# Staking

I-stake ang $AGNT sa `AGNTStaking` contract para kumita ng BNB mula sa launchpad fees.

- Nakakatanggap ang stakers ng **30% ng bawat curve fee**, binabayaran sa BNB.
- Ang bawat BNB na dumarating ay **pinapadaloy sa susunod na 7 araw**, hinahati sa lahat ng naka-stake sa panahong iyon. Hindi
  makakakuha ng bahagi ang magsta-stake bago lang ang payout.
- Ang BNB na dumating habang walang nag-i-stake ay naghihintay at magsisimulang dumaloy kapag sumali ang unang staker.
- Walang lock-up: mag-unstake anumang oras; mag-claim ng BNB anumang oras.

## Perks

Ang AGNT na naka-stake nang **hindi bababa sa 7 araw** ay binibilang para sa perks. Ang pagdagdag ng AGNT ay nire-restart
ang 7-araw na orasan para sa buong posisyon, kaya hindi mabibili ang perks para sa isang block lang.

| Perk | Kailangan |
| --- | --- |
| Libreng launch sa launchpad | 100,000 AGNT na naka-stake nang 7 araw |
| Kalahating presyo sa standard token factory | 100,000 AGNT na naka-stake nang 7 araw |
| Timbang ng boto sa Snapshot | Kahit anong AGNT na naka-stake nang 7 araw (`maturedStake`) |
| Multiplier sa airdrop ng Season 2 | Iaanunsyo kasabay ng Season 2 |

Ang threshold ay mababago ng owner Safe; pampubliko ang bawat pagbabago sa
[Site integrity](https://agenticstarter.xyz/integrity?lang=fil).

Magbubukas ang staking kasabay ng listing ng $AGNT.

| Function | Epekto |
| --- | --- |
| `stake(amount)` | Magdeposito ng AGNT (mag-approve muna) |
| `unstake(amount)` | Mag-withdraw ng AGNT, nananatili ang rewards |
| `claim()` | I-withdraw ang naipong BNB |
| `pendingBnb(address)` | Tingnan ang naipong BNB |
| `maturedStake(address)` | AGNT na binibilang para sa perks at boto |
| `hasPerks(address)` | True kapag lampas sa perk threshold |
