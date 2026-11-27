# GDPR v praxi PTC

České interaktivní demo pro Protonové centrum. Šest krátkých lekcí, závěrečný test a ukázkové potvrzení. Rozhraní je inspirované motivem Moodle Boost. Každé výukové téma má nejdřív teorii a potom procvičení. Po rozšíření teorie kurz trvá přibližně 20–25 minut. Fotografie v teoretických částech jsou ilustrační a pocházejí z Unsplash; zobrazují se z externího CDN. Odborné modelové scénáře, interní role a postupy musí před nasazením schválit odpovědní pracovníci PTC. Obsah a test vycházejí z jednoho souboru `src/course.json`.

## Spuštění u sebe

Potřebuješ Node.js 24. Po rozbalení přejdi do kořenové složky projektu a spusť:

```sh
npm ci
npm run dev
```

Otevři adresu z terminálu. Produkční sestavení vytvoříš pomocí `npm run build`, pro místní kontrolu použij `npm run preview`.

## GitHub Pages

1. Nahraj obsah kořene projektu do repozitáře včetně skryté složky `.github`. Do repozitáře patří `package-lock.json`, nikoli `node_modules` a `dist`.
2. Na GitHubu otevři **Settings → Pages → Build and deployment**. Jako **Source** vyber **GitHub Actions**.
3. V **Actions** otevři **Nasazení GDPR dema** a na hlavní větvi zvol **Run workflow**.
4. Další změny ve větvi `main` spustí nové nasazení automaticky. Hotovou adresu najdeš u úlohy **deploy** nebo v **Settings → Pages**. Workflow nastaví cestu podle konfigurace GitHub Pages.

Projekt používá fiktivní situace. Pokud budeš vyměňovat ilustrace nebo texty pro veřejný web, použij schválená veřejná média a modelové údaje. Odpovědi, postup i skóre zůstávají v aktuálním prohlížeči. Tlačítko **Smazat postup** je odstraní.

## Média a přenos do Moodlu

V AI lekci je tříkroková animace s volbou a rovnocenná textová verze. Po dodání českého videa lze stejný scénář přenést do **H5P Interactive Video**. E-mailové procvičení tvoří dvě krátké otázky s okamžitou zpětnou vazbou (v Moodle například **Quiz** nebo **H5P Single Choice Set**); přiřazování žádostí odpovídá **H5P Drag and Drop** a kamerový případ lze přenést do aktivity **Lesson**. Hotové interakce tohoto prototypu se v Moodlu znovu sestaví.

Pro test použij **Banka úloh → Import → Moodle XML** a soubor `moodle/gdpr-otazky.xml`. Otázky vlož do Moodle Quiz. Navržené hodnocení je 5 bodů, hranice úspěchu 4 body, nejvyšší známka z opakovaných pokusů. Podmínku úspěšné známky a dokončení nastav přímo v kurzu. Vystavení skutečného potvrzení vyžaduje interní konfiguraci Moodlu. Po úpravě otázek obnovíš importní soubor příkazem `npm run moodle:xml`.

## Revize podle školení PTC 2025–2026

Teoretické části byly aktualizovány podle interní prezentace **GDPR a AI v PTC 2025–2026**. Nově zdůrazňují transparentnost e-mailů a podpisové vzory, žádosti pacientů a institucí včetně práva na výmaz, pravidla žádostí o kamerový záznam (včetně pouhého náhledu) a bezpečné používání AI s pověřencem pro ochranu osobních údajů. Modelové situace zůstávají fiktivní.

**Před ostrým školením je nutná věcná kontrola pověřence pro ochranu osobních údajů a odpovědného útvaru.** Zejména ověřte aktuálnost interního schvalování kamerových záznamů a tvrzení ze školení o archivační době zdravotnické dokumentace po protonové radioterapii (v prezentaci uvedeno 100 let); toto číslo není v demu uváděno jako potvrzené obecné právní pravidlo. Ověřte také aktuální pravidla a schválené nástroje AI. Veřejné demo úmyslně neobsahuje fyzické rozmístění, počet ani plánované změny kamer PTC.

## Skutečné případy v teoretických lekcích

Každá ze čtyř teorií obsahuje vizuálně odlišený blok **Skutečný případ** s doloženou chybou, následkem a přímým odkazem na zdroj. Údaje vycházejí z veřejných materiálů dozorových úřadů:

- E-mail: klinika 56 Dean Street (2015), tisková zpráva britského ICO převzatá portálem wired-gov.net.
- Žádosti o údaje: Staines Health Group (2026), oficiální sdělení ICO.
- Kamerové záznamy: Biržai Hospital (2026), litevský úřad VDAI.
- Práce s AI: Royal Free London a DeepMind (2015 až 2017), ICO.

Pro všechny konzultace v kurzu používáme jednotný název **pověřenec pro ochranu osobních údajů**. Doložené zahraniční případy jsou vzdělávací ilustrace. Jejich právní předpisy a sankce nelze automaticky vztahovat na české prostředí.
