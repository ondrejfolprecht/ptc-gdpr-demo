# GDPR v praxi PTC

České interaktivní demo pro Protonové centrum. Šest krátkých lekcí, závěrečný test a ukázkové potvrzení. Rozhraní je inspirované motivem Moodle Boost. Každé výukové téma má nejdřív teorii a potom procvičení. Kurz po rozšíření trvá přibližně 30–35 minut. Fotografie v teoretických částech jsou ilustrační a pocházejí z Unsplash; zobrazují se z externího CDN. Odborné modelové scénáře, interní role a postupy musí před nasazením schválit odpovědní pracovníci PTC. Otázky testu jsou v `src/course.json`; rozšířená teorie a další sekce jsou v `src/theory-content.ts`, `src/lesson-content.ts` a `src/course-extensions.ts`.

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

Pro test použij **Banka úloh → Import → Moodle XML** a soubor `moodle/gdpr-otazky.xml`. Otázky vlož do Moodle Quiz. Navržené hodnocení je 8 bodů, hranice úspěchu 6 bodů, nejvyšší známka z opakovaných pokusů. Podmínku úspěšné známky a dokončení nastav přímo v kurzu. Vystavení skutečného potvrzení vyžaduje interní konfiguraci Moodlu. Po úpravě otázek obnovíš importní soubor příkazem `npm run moodle:xml`.

## Revize podle školení PTC 2025–2026

Teoretické části byly aktualizovány podle interní prezentace **GDPR a AI v PTC 2025–2026**. Nově zdůrazňují transparentnost e-mailů a podpisové vzory, žádosti pacientů a institucí včetně práva na výmaz, pravidla žádostí o kamerový záznam (včetně pouhého náhledu) a bezpečné používání AI s pověřencem pro ochranu osobních údajů. Modelové situace zůstávají fiktivní.

**Před ostrým školením je nutná věcná kontrola pověřence pro ochranu osobních údajů a odpovědného útvaru.** Zejména ověřte aktuálnost interního schvalování kamerových záznamů. Stoletá lhůta byla ověřena ve vyhlášce č. 444/2024 Sb. (příloha č. 3, bod 11), vztahuje se na vybrané záznamy o léčebném či paliativním lékařském ozáření, ozařovací protokoly a plány v radiační onkologii, nikoli automaticky na veškerou dokumentaci pacienta. Ověřte také aktuální pravidla a schválené nástroje AI. Veřejné demo úmyslně neobsahuje fyzické rozmístění, počet ani plánované změny kamer PTC.

## Skutečné případy v teoretických lekcích

Každá ze čtyř teorií obsahuje vizuálně odlišený blok **Skutečný případ** s doloženou chybou, následkem a přímým odkazem na zdroj. Údaje vycházejí z veřejných rozhodnutí soudů, dozorových úřadů a z ověřeného odborného zpravodajství:

- E-mail: klinika 56 Dean Street (2015), tisková zpráva britského ICO převzatá portálem wired-gov.net.
- Žádosti o údaje: Staines Health Group (2026), oficiální sdělení ICO.
- Kamerové záznamy: North Central Regional Health Authority (Trinidad a Tobago), neoprávněné sdílení videa pacienta vrchní sestrou v roce 2017 a soudní potvrzení následného disciplinárního opatření v roce 2025. Zdroj: High Court of Trinidad and Tobago, CV2023-03073. Jedná se o video z oddělení, nikoli o záznam pevného kamerového systému.
- Práce s AI: Johns Hopkins Bayview Medical Center (2026), zaměstnanec nahrál údaje 3 182 pacientů do neschválené AI služby. Zdroj: Healthcare IT News (HIMSS), 29. 10. 2026.

Pro všechny konzultace v kurzu používáme jednotný název **pověřenec pro ochranu osobních údajů**. Doložené zahraniční případy jsou vzdělávací ilustrace. Jejich právní předpisy a sankce nelze automaticky vztahovat na české prostředí.

## Doplněné kapitoly a zdroje

Obsah dále pokrývá odpovědnost vedoucích pracovníků, zákonný účel a označení kamerových prostor, uchování dokumentace a žádosti o výmaz včetně možných kopií u zpracovatelů, evidenci a posuzování AI nástrojů, přenosy dat mimo EU, lidský dohled a příklady využití AI ve zdravotnictví. Test nyní obsahuje osm otázek včetně transparentního e-mailu, odpovědnosti vedoucích a posouzení nového AI nástroje.

- **Vyhláška č. 444/2024 Sb.**: https://www.zakonyprolidi.cz/cs/2024-444
- **Pacientský průzkum (1 053 respondentů)**: https://www.nzip.cz/data/media/konference-nzip-12-2025/prezentace/2025-12-10-sekce-04d-Volny.pdf

**Rozdíly proti původní prezentaci:** Hodnoty pacientského průzkumu na jejím slidu 17 (například 84 % a 76 %) neodpovídají dohledanému publikovanému přehledu průzkumu se stejným počtem respondentů. Ve webovém kurzu jsou proto uvedeny ověřitelné hodnoty 70 %, 87 % a více než 90 % se zdrojem. Údaje FDA/CE a podíly nemocnic ze slidu 15 nebyly převzaty jako časově platné statistiky; téma rozšíření AI je vysvětleno věcnými příklady, které nevyžadují neustálou aktualizaci.
