// Salt search for launchpad token addresses.
//
// AgentLaunchpad deploys every token with CREATE2. A salt is accepted only when its first 20 bytes are the creator's
// address and the resulting token address ends with the platform suffix (for example "AAAA"). This module finds such
// a salt off-chain. Plain JavaScript, no dependencies beyond @noble/hashes, so it runs in Node and in browsers.
import { keccak_256 } from "@noble/hashes/sha3";

/** Platform suffix shown at the end of every token address. */
export const TOKEN_SUFFIX = "AAAA";

const HEX = "0123456789abcdef";

function hexToBytes(hex) {
  const h = hex.startsWith("0x") ? hex.slice(2) : hex;
  if (h.length % 2) throw new Error(`odd hex length: ${hex}`);
  const out = new Uint8Array(h.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(h.slice(2 * i, 2 * i + 2), 16);
  return out;
}

function bytesToHex(b) {
  let s = "";
  for (let i = 0; i < b.length; i++) s += HEX[b[i] >> 4] + HEX[b[i] & 15];
  return s;
}

/** EIP-55 checksum casing of a 40-char lowercase hex address (no 0x). */
export function checksumHex(lowerHex) {
  const hash = keccak_256(new TextEncoder().encode(lowerHex));
  let out = "";
  for (let i = 0; i < 40; i++) {
    const c = lowerHex[i];
    const nibble = i % 2 === 0 ? hash[i >> 1] >> 4 : hash[i >> 1] & 15;
    out += c >= "a" && nibble >= 8 ? c.toUpperCase() : c;
  }
  return out;
}

/** Address a CREATE2 deployment gets: keccak256(0xff ++ deployer ++ salt ++ initCodeHash)[12:]. */
export function create2Address(deployer, saltHex, initCodeHash) {
  const buf = new Uint8Array(85);
  buf[0] = 0xff;
  buf.set(hexToBytes(deployer), 1);
  buf.set(hexToBytes(saltHex), 21);
  buf.set(hexToBytes(initCodeHash), 53);
  return "0x" + checksumHex(bytesToHex(keccak_256(buf).subarray(12)));
}

/** True when a checksummed address ends with the suffix exactly as written (case included). */
export function hasSuffix(address, suffix = TOKEN_SUFFIX) {
  return address.endsWith(suffix);
}

/**
 * Search for a salt whose token address ends with `suffix`.
 * @param {object} o
 * @param {string} o.launchpad      launchpad address (the CREATE2 deployer)
 * @param {string} o.creator        creator address; becomes the salt's first 20 bytes
 * @param {string} o.initCodeHash   AgentLaunchpad.tokenInitCodeHash()
 * @param {string} [o.suffix]       hex suffix; letters must match the checksum case when `matchCase` is true
 * @param {boolean} [o.matchCase]   also require the checksum (EIP-55) case to match, default true
 * @param {number} [o.maxTries]     give up after this many attempts
 * @returns {{ salt: string, address: string, tries: number }}
 */
export function findSalt({ launchpad, creator, initCodeHash, suffix = TOKEN_SUFFIX, matchCase = true, maxTries = 5e7 }) {
  const want = suffix.toLowerCase();
  const wantBytes = want.length;
  const buf = new Uint8Array(85);
  buf[0] = 0xff;
  buf.set(hexToBytes(launchpad), 1);
  buf.set(hexToBytes(creator), 21); // salt[0..20) = creator
  buf.set(hexToBytes(initCodeHash), 53);
  // salt[20..32): 4 random bytes then an 8-byte counter, so parallel searches never collide
  const rnd = new Uint8Array(4);
  (globalThis.crypto?.getRandomValues ? globalThis.crypto.getRandomValues(rnd) : rnd.fill(Date.now() & 255));
  buf.set(rnd, 41);
  const view = new DataView(buf.buffer);
  for (let i = 0; i < maxTries; i++) {
    view.setUint32(49, i >>> 0);
    view.setUint32(45, Math.floor(i / 2 ** 32));
    const h = keccak_256(buf);
    // compare the last hex chars of the address (bytes 12..31 of the hash)
    let ok = true;
    for (let k = 0; k < wantBytes; k++) {
      const pos = 40 - wantBytes + k; // index in the 40-char address
      const byte = h[12 + (pos >> 1)];
      const nib = pos % 2 === 0 ? byte >> 4 : byte & 15;
      if (HEX[nib] !== want[k]) { ok = false; break; }
    }
    if (!ok) continue;
    const address = "0x" + checksumHex(bytesToHex(h.subarray(12)));
    if (matchCase && !address.endsWith(suffix)) continue;
    return { salt: "0x" + bytesToHex(buf.subarray(21, 53)), address, tries: i + 1 };
  }
  throw new Error(`no salt found in ${maxTries} tries`);
}
