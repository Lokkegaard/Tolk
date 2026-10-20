# Tolk dansk ⇄ russisk

En lille webapp, der tolker mellem dansk og russisk med tale og tekst, uden AI.

**Åbn appen:** https://lokkegaard.github.io/tolk/

## Sådan bruges den

1. **Vælg dit sprog.** Hele appen vises derefter på dit sprog. Det kan skiftes med DA/RU øverst.
2. **Vælg, hvordan I vil tale sammen:**
   - **Hver sin enhed:** tryk "Start samtale". Du får en kode på 8 cifre og en QR-kode. Den anden vælger sit sprog, trykker "Jeg har fået en kode" og skriver koden, eller scanner QR-koden.
   - **Én enhed sammen:** to felter, ét på hvert sprog, med hver sin mikrofonknap.
3. **Tal eller skriv.** Tryk på mikrofonen. Den lytter, til du holder en pause, eller til du trykker igen. På en computer kan du også holde mikrofonknappen eller mellemrumstasten nede.
4. Den talte tekst sendes efter 3 sekunder. Tryk "Ret" for at rette den først, eller "Send nu".

I samtalen på to enheder:

- Dine egne beskeder viser "Kommer frem som: …", altså oversættelsen oversat tilbage til dit sprog, og "✓ Leveret", når den anden har modtaget dem.
- Den andens beskeder vises på dit sprog med originalen nedenunder og knappen "Hør igen".
- "Den anden taler …" vises, mens den anden taler.
- Oversættelsen læses kun højt på modtagerens enhed.

Hvis tal i oversættelsen ikke stemmer med originalen, eller en sætning kommer uoversat tilbage, tilføjes "(Bør bekræftes / Нужно уточнить)".

## Tastaturgenveje (computer)

- Hold **mellemrum** nede for at tale.
- **Enter** sender.
- **Esc** stopper oplæsning og nedtælling.

## Forbindelse og privatliv

Beskederne mellem enhederne sendes gennem den gratis open source-tjeneste [ntfy.sh](https://ntfy.sh), krypteret med AES-GCM. Både nøglen og navnet på samtalen dannes ud fra koden med PBKDF2, så koden aldrig forlader enheden. Selve oversættelsen laves af Google Oversæt (eller den valgte kilde), så skriv ikke CPR-numre eller andre følsomme oplysninger.

## Oversættelseskilder

Vælges under Indstillinger. Hvis den valgte fejler, prøves en anden automatisk.

- **Google Translate**: gratis, ingen nøgle (uofficiel adgang).
- **MyMemory**: gratis, ingen nøgle, dagskvote.
- **LibreTranslate**: open source, kræver egen server eller API-nøgle.

## Krav

Talegenkendelse kræver Chrome, Edge eller Safari og internetforbindelse. Oplæsning bruger som standard Googles online-stemme. En stemme på enheden kan vælges i stedet. Stemmen kan vælges og afprøves under Indstillinger.

## Tredjepartskode

`qrcode.js` er QR Code Generator af Kazuhiko Arase (MIT-licens).
