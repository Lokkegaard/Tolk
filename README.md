# Tolk · Kiril Translate

En lille webapp, der tolker mellem dansk og russisk med tale og tekst, uden AI.

**Åbn appen:** https://lokkegaard.github.io/tolk/

## Sådan bruges den

1. **Vælg dit sprog.** Hele appen vises derefter på dit sprog. Det kan skiftes med DA/RU øverst.
2. **Skriv dit navn**, så de andre kan se, hvem der siger hvad.
3. **Vælg, hvordan I vil tale sammen:**
   - **Hver sin enhed:** tryk "Start samtale". Du får en kode på 8 cifre og en QR-kode. De andre vælger deres sprog, trykker "Jeg har fået en kode" og skriver koden, eller scanner QR-koden. I kan være mange med i samme samtale, fx en lærer og flere elever, og flere kan tale samme sprog. "Invitér flere" viser koden igen.
   - **Én enhed sammen:** to felter, ét på hvert sprog, med hver sin mikrofonknap.
4. **Tal eller skriv.** Tryk på mikrofonen. Den lytter, til du holder en pause, eller til du trykker igen. På en computer kan du også holde mikrofonknappen eller mellemrumstasten nede.
5. Den talte tekst sendes efter 3 sekunder. Tryk "Ret" for at rette den først, eller "Send nu".

I samtalen på flere enheder:

- Øverst står, hvem der er med i samtalen.
- Dine egne beskeder viser "Kommer frem som: …", altså oversættelsen oversat tilbage til dit sprog. Er I to, står der "✓ Leveret", når den anden har modtaget beskeden; er I flere, står der "✓ Sendt".
- De andres beskeder vises på dit sprog med navn, originalen nedenunder og knapperne "Hør igen" og "Langsomt".
- "Olga taler …" vises, mens nogen taler.
- Oversættelsen læses kun højt for dem, der taler det andet sprog; dem med samme sprog har jo hørt det.

Hvis tal i oversættelsen ikke stemmer med originalen, eller en sætning kommer uoversat tilbage, tilføjes "(Bør bekræftes / Нужно уточнить)".

## Billede af en tekst

Tryk på kameraknappen ved tekstfeltet, og tag et billede af et opgaveark eller tavlen. Teksten genkendes direkte i browseren med det gratis open source-værktøj [Tesseract](https://tesseract.projectnaptha.com) (ingen AI-tjeneste), og du kan rette den, før den oversættes. Oversættelsen kan læses op eller sendes til samtalen. Første gang hentes ca. 8 MB; derefter husker browseren det.

## Lær sproget

Tryk på et ord i den andens original (eller i felterne på én enhed) for at se, hvad det betyder, og hør det almindeligt eller langsomt. Modtagne beskeder har både "Hør igen" og "Langsomt". Under Indstillinger → Læring kan al oplæsning gøres langsommere.

## Installér som app

Tolk kan lægges på hjemmeskærmen og åbner så i fuld skærm som en app. I Chrome og Edge vises en "Installér"-knap på forsiden; på iPhone og iPad: tryk på Del-knappen i Safari og vælg "Føj til hjemmeskærm". Selve appen åbner også uden net, men oversættelse, tale og forbindelse kræver internet. Virker talegenkendelsen ikke i appen på iPhone eller iPad, så brug siden i Safari.

## Tastaturgenveje (computer)

- Hold **mellemrum** nede for at tale.
- **Enter** sender.
- **Esc** stopper oplæsning og nedtælling.

## Forbindelse og privatliv

Beskederne mellem enhederne sendes gennem den gratis open source-tjeneste [ntfy.sh](https://ntfy.sh), krypteret med AES-GCM. Både nøglen og navnet på samtalen dannes ud fra koden med PBKDF2, så koden aldrig forlader enheden. ntfy.sh har en daglig grænse for antal beskeder pr. netværk. Bruger mange på skolen appen samtidig, kan skolen køre sin egen ntfy-server (open source) og skrive adressen under Indstillinger → Avanceret; alle i samtalen skal bruge samme server. Selve oversættelsen laves af Google Oversæt (eller den valgte kilde), så skriv ikke CPR-numre eller andre følsomme oplysninger.

## Oversættelseskilder

Vælges under Indstillinger. Hvis den valgte fejler, prøves en anden automatisk.

- **Google Translate**: gratis, ingen nøgle (uofficiel adgang).
- **MyMemory**: gratis, ingen nøgle, dagskvote.
- **LibreTranslate**: open source, kræver egen server eller API-nøgle.

## Krav

Talegenkendelse kræver Chrome, Edge eller Safari og internetforbindelse. Oplæsning bruger som standard Googles online-stemme. En stemme på enheden kan vælges i stedet. Stemmen kan vælges og afprøves under Indstillinger.

## Tredjepartskode

`qrcode.js` er QR Code Generator af Kazuhiko Arase (MIT-licens).
