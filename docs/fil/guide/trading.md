# Bumili at magbenta

Lahat ng trade sa curve ay sumusunod sa **preview → approve → execute**. Nag-e-expire ang preview pagkalipas ng 5 minuto
at isang beses lang tumatakbo.

## Bumili

```bash
agentic quote --token 0x… --bnb 0.1        # read-only price check
agentic buy   --token 0x… --bnb 0.1        # preview, returns requestId
agentic execute --request-id <id>          # after the user says yes
```

Ipinapakita ng preview ang dami ng token na makukuha mo, ang minimum na tatanggapin pagkatapos ng slippage (default 1%), ang
fee, at anumang refund.

## Magbenta

```bash
agentic sell --token 0x… --percent 50      # or --amount 2500000, or --all
agentic execute --request-id <id>
```

Hindi kailangan ng Agent ID o hiwalay na approve na transaksyon para magbenta.

## Pagkatapos ng graduation

Kapag nag-graduate ang token, sarado na ang curve nito at sa PancakeSwap V2 pool na ito tine-trade, naka-pair sa BNB,
gaya ng ibang BEP-20 token. Hindi kailangan ng Agent ID at walang fee ang Agentic Starter; 0.25% ang pool fee.

- **Website:** nagiging PancakeSwap swap box ang token page (direkta sa PancakeSwap router) kasama ang DexScreener chart.
  Gumagana rin ang **Open in PancakeSwap**.
- **Agent:** ang parehong `agentic buy` at `agentic sell` ay awtomatikong dumadaan sa PancakeSwap. Sa benta, approve
  request muna ang ibinabalik (hakbang 1 sa 2); i-execute iyon, saka patakbuhin ulit ang parehong sell command.
- **Kahit anong wallet o aggregator** sa BNB Chain ay puwedeng mag-trade sa pool.

## Bantayan ang market

```bash
agentic near-grad                          # tokens closest to graduation
agentic watch --max-events 1 --timeout 30m # wait for the next event (NDJSON)
```
