# GDPR v praxi PTC

České interaktivní demo pro Protonové centrum. Šest krátkých lekcí, závěrečný test a ukázkové potvrzení. Kurz trvá přibližně 15 minut. Obsah a test vycházejí z jednoho souboru `src/course.json`.

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
4. Hotovou adresu najdeš u úlohy **deploy** nebo v **Settings → Pages**. Workflow nastaví cestu podle konfigurace GitHub Pages.

Projekt používá fiktivní situace. Pokud budeš vyměňovat ilustrace nebo texty pro veřejný web, použij schválená veřejná média a modelové údaje. Odpovědi, postup i skóre zůstávají v aktuálním prohlížeči. Tlačítko **Smazat postup** je odstraní.

## Média a přenos do Moodlu

V AI lekci je tříkroková animace s volbou a rovnocenná textová verze. Po dodání českého videa lze stejný scénář přenést do **H5P Interactive Video**. Klikací e-mail odpovídá **H5P Image Hotspots**, žádosti a kamerový případ aktivitě **Lesson**. Hotové interakce tohoto prototypu se v Moodlu znovu sestaví.

Pro test použij **Banka úloh → Import → Moodle XML** a soubor `moodle/gdpr-otazky.xml`. Otázky vlož do Moodle Quiz. Navržené hodnocení je 5 bodů, hranice úspěchu 4 body, nejvyšší známka z opakovaných pokusů. Podmínku úspěšné známky a dokončení nastav přímo v kurzu. Vystavení skutečného potvrzení vyžaduje interní konfiguraci Moodlu. Po úpravě otázek obnovíš importní soubor příkazem `npm run moodle:xml`.
