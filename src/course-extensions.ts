
/**
 * Doplňující témata kurzu GDPR a AI v PTC.
 * Praktický obsah pro zaměstnance bez zveřejňování interních bezpečnostních detailů.
 */
export type ExtraTopic = {
  title: string
  intro: string
  points: { title: string; text: string }[]
  source?: { name: string; url: string }
}
export const extraTopics: Record<number, ExtraTopic[]> = {
  2: [{
    title: "Jak dlouho musíme údaje uchovávat?",
    intro: "Právo na výmaz se vždy posuzuje podle toho, o jaké údaje jde a zda nám zákon ukládá jejich uchování.",
    points: [
      { title: "Dokumentace související s ozařováním", text: "Vyhláška č. 444/2024 Sb. stanoví u vybraných záznamů o léčebném nebo paliativním výkonu s lékařským ozářením a u ozařovacích protokolů a plánů v radiační onkologii uchovávání po dobu 100 let od posledního výkonu s ozářením. Toto pravidlo se nevztahuje automaticky na každý dokument v kartě pacienta." },
      { title: "Údaje v dalších systémech", text: "Pokud lze žádosti o výmaz vyhovět, musí odpovědná osoba prověřit také údaje u externích zpracovatelů, kopie a relevantní zálohy. Mazání se vždy provádí podle platných pravidel a možností obnovy, nikoli svévolně zaměstnancem." },
      { title: "Odpověď pacientovi", text: "Pacient musí dostat odpověď na svou žádost. Pokud údaje nelze smazat kvůli zákonné povinnosti uchování, je nutné vysvětlit důvod a další postup." }
    ],
    source: { name: "Vyhláška č. 444/2024 Sb., příloha č. 3, bod 11", url: "https://www.zakonyprolidi.cz/cs/2024-444" }
  }],
  3: [{
    title: "Kdy je kamerové sledování přípustné?",
    intro: "Kamery lze používat pouze pro konkrétní oprávněný účel. Ani snaha zvýšit bezpečnost automaticky neospravedlňuje sledování každého prostoru.",
    points: [
      { title: "Jasný účel a přiměřený rozsah", text: "Před pořízením záznamu musí být zřejmé, proč je sledování potřebné. V citlivých prostorech, například tam, kde se pacient převléká nebo podstupuje vyšetření, je zásah do soukromí obzvlášť závažný." },
      { title: "Informování lidí", text: "Pacienti, návštěvníci a zaměstnanci musí být vhodně informováni o monitorovaných prostorách. Označení prostoru samo o sobě neznamená, že je možné záznam využít k libovolnému účelu." },
      { title: "Přístup jen podle potřeby", text: "Se záznamy pracují pouze oprávněné osoby. Každé nahlédnutí i předání kopie musí mít odpovídající důvod a proběhnout stanoveným postupem." }
    ]
  }],
  4: [{
    title: "Co prověřit před použitím nového AI nástroje?",
    intro: "Než AI zapojíte do své práce, musí být jasné, co bude nástroj zpracovávat, kdo k údajům získá přístup a kdo zkontroluje výsledek.",
    points: [
      { title: "Účel a schválení", text: "Nejprve ověřte, zda je nástroj v PTC schválený pro danou činnost. Nové použití konzultujte s pověřencem pro ochranu osobních údajů a dalšími odpovědnými pracovníky podle povahy nástroje." },
      { title: "Práce s daty", text: "Zjistěte, zda se údaje ukládají, kdo k nim má přístup, jak dlouho zůstávají u poskytovatele a zda mohou být předávány mimo EU. U externí služby se řeší také smluvní záruky a podmínky zpracování dat." },
      { title: "Bezpečnost a regulace", text: "U AI, která je zdravotnickým prostředkem, je třeba posoudit také příslušné zdravotnické a bezpečnostní požadavky včetně označení CE, pokud se vyžaduje. Samotné označení AI nebo její dostupnost na internetu bezpečnost nedokazují." },
      { title: "Evidence, kontrola a hlášení", text: "Schválené nástroje a jejich použití mají být dohledatelné. Výstupy ověřuje člověk. Pokud AI vytvoří chybnou či nevhodnou informaci, řešte ji podle interního postupu a upozorněte odpovědné osoby." }
    ]
  }]
}
export const aiUseCases = [
  { title: "Radiologie", text: "Pomoc s rozpoznáváním odchylek na snímcích a jejich přednostním vyhodnocením." },
  { title: "Prediktivní modely", text: "Odhad rizika komplikací nebo opakované hospitalizace podle dostupných údajů." },
  { title: "Administrativa", text: "Převod řeči na text, návrhy zápisů a uspořádání dokumentů." },
  { title: "Práce s dokumentací", text: "Vyhledávání a shrnování informací v dokumentech, pokud je nástroj schválený pro daná data." },
  { title: "Personalizovaná medicína", text: "Podpora analýzy genetických nebo histologických údajů při hledání vhodného léčebného postupu." }
]
export const aiAdoption = {
  text: "V národním průzkumu Ministerstva zdravotnictví ČR z února 2026 uvedlo 67,6 % ze 105 respondentů ze zdravotnických zařízení, že AI již používají nebo testují. Jde o podíl respondentů průzkumu, nikoli o podíl všech českých nemocnic.",
  source: { name: "Ministerstvo zdravotnictví ČR, Národní průzkum využívání AI ve zdravotnictví (únor 2026)", url: "https://mzd.gov.cz/tiskove-centrum-mz/narodni-pruzkum-ministerstva-zdravotnictvi-umela-inteligence-se-stava-beznou-soucasti-ceskeho-zdravotnictvi/" }
}
export const patientSurvey = {
  title: "Jak pacienti vnímají AI?",
  intro: "Zveřejněný český průzkum mezi 1 053 pacienty ukazuje, že lidé vnímají přínosy AI, ale chtějí zachovat lidský dohled a vědět, kdy se při diagnostice používá.",
  stats: [
    { value: "70 %", label: "chce být informováno o využití AI při stanovení diagnózy" },
    { value: "87 %", label: "preferuje vyšetření lékařem s podporou AI" },
    { value: "> 90 %", label: "se domnívá, že AI lékaře nikdy zcela nenahradí" }
  ],
  takeaway: "Pacientům vysvětlujte používání AI podle pravidel PTC. AI může pomoci zdravotníkům, odpovědnost za péči však zůstává na lidech.",
  source: { name: "NZIP, AI z pohledu pacientů (prezentace ČAUI, prosinec 2025)", url: "https://www.nzip.cz/data/media/konference-nzip-12-2025/prezentace/2025-12-10-sekce-04d-Volny.pdf" }
}
export const leadership = {
  title: "Co musí zajistit vedoucí pracovník?",
  intro: "Za dodržování pravidel v týmu neodpovídá pouze pověřenec pro ochranu osobních údajů. Vedoucí pracovníci mají zajistit, aby zaměstnanci znali pravidla a dokázali je používat.",
  points: [
    { title: "Vědět, s jakými údaji tým pracuje", text: "Zaměstnanci mají rozumět tomu, jaké údaje potřebují, proč je zpracovávají a s kým je smějí sdílet." },
    { title: "Umět vyřídit žádost", text: "Tým musí vědět, jak postupovat při žádosti pacienta, policie, soudu nebo jiné instituce a komu ji předat." },
    { title: "Vědět, jak hlásit incident", text: "Každý zaměstnanec má znát postup při ztrátě, chybném odeslání nebo podezření na neoprávněný přístup k údajům." }
  ]
}
