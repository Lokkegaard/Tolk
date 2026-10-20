# Tolk dansk ⇄ russisk

En lille webapp, der tolker mellem dansk og russisk med tale og tekst, uden AI.

**Åbn appen:** https://lokkegaard.github.io/tolk/

## Sådan virker den

- Tryk på den røde knap og tal dansk, eller på den blå og tal russisk. Du kan også skrive i feltet.
- Sproget genkendes automatisk: kyrillisk skrift oversættes til dansk, alt andet til russisk.
- En besked på begge sprog oversættes sætning for sætning.
- Oversættelsen læses højt (kan slås fra under Indstillinger).
- "Vend RU-felt" vender det russiske felt, så personen overfor kan læse det.
- Hvis tal i oversættelsen ikke stemmer med originalen, tilføjes "(Bør bekræftes / Нужно уточнить)".

## To enheder

Appen er lavet til samtaler mellem to elever eller en lærer og en elev, hvor hver har sin egen computer.

1. Tryk "To enheder" og vælg, hvem der bruger computeren. Der vises en kode med 8 cifre, en QR-kode og et link.
2. Den anden skriver koden under "To enheder" og vælger sit sprog, eller åbner linket.
3. Samtalen vises som en chat. Oversættelsen læses kun højt på modtagerens computer.

Beskederne sendes gennem den gratis open source-tjeneste [ntfy.sh](https://ntfy.sh), krypteret med AES-GCM. Både krypteringsnøglen og navnet på samtalen dannes ud fra koden med PBKDF2, så koden aldrig forlader computeren. Del kun koden med den, du taler med.

## Tilbageoversættelse

Under hver af dine egne beskeder står "Kommer frem som: …": oversættelsen oversat tilbage til dit eget sprog. Så kan du se, om meningen er gået tabt, og sige det på en anden måde.

Talt tekst lægges i tekstfeltet og sendes efter 3 sekunder. Klik i feltet for at rette den først. Ventetiden kan ændres under Indstillinger.

## Tastaturgenveje

- Hold **mellemrum** nede for at tale (når du ikke skriver i et felt).
- **Enter** sender.
- **Esc** stopper oplæsning og nedtælling.

## Oversættelseskilder

Vælges under Indstillinger. Hvis den valgte fejler, prøves en anden automatisk.

- **Google Translate**: gratis, ingen nøgle (uofficiel adgang).
- **MyMemory**: gratis, ingen nøgle, dagskvote.
- **LibreTranslate**: open source, kræver egen server eller API-nøgle.

## Krav

Talegenkendelse kræver Chrome, Edge eller Safari og internetforbindelse. Oplæsning bruger som standard Googles online-stemme. En stemme på enheden kan vælges i stedet. Stemmen kan vælges og afprøves under Indstillinger.

## Tredjepartskode

`qrcode.js` er QR Code Generator af Kazuhiko Arase (MIT-licens).
