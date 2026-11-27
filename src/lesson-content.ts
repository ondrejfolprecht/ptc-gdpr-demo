export const lessons = {
  1: {
    title: "E-mailová komunikace a osobní údaje",
    learn: "Naučíte se chránit zdravotní údaje v e-mailech a zároveň komunikovat transparentně: s pravdivým předmětem, jasně identifikovaným odesílatelem a správným podpisem.",
    rules: [
      ["Co je důvěrné", "Jméno a kontaktní údaje jsou osobní údaje. Diagnózy a lékařské zprávy obsahují údaje o zdraví, které požívají zvláštní ochrany. Sdílejte jen údaje potřebné pro konkrétní účel."],
      ["Transparentní e-mail", "Předmět musí pravdivě odpovídat obsahu, účel zprávy má být zřejmý a odesílatel identifikovatelný. Školení PTC upozorňuje i na auditní kontrolu podpisových vzorů."],
      ["Před odesláním a při chybě", "Ověřte celou adresu a oprávnění příjemce, obsah přílohy i schválený kanál. Chybné odeslání či jiné podezření na incident bez odkladu oznamte podle interních pravidel."],
    ],
    example: "Při komunikaci s pacientem nepřebírejte automaticky zavádějící předmět typu „Re: informace o účtu“. Vraťte se k skutečnému účelu zprávy, upravte předmět, ověřte příjemce a podpis.",
    task: "Nejdřív v modelovém e-mailu zkontrolujte příjemce, předmět i přílohu. Potom rozhodněte, co udělat, pokud zpráva odešla nesprávné osobě.",
  },
  2: {
    title: "Žádosti o údaje a právo na výmaz",
    learn: "Rozlišíte žádost pacienta, rodiny či instituce, potřebu ověření oprávnění i situace, kdy nelze dokumentaci na žádost jednoduše smazat.",
    rules: [
      ["Kdo smí údaje získat", "Pozornost vyžadují žádosti rodiny, zaměstnavatele, policie, soudů, dalších zdravotnických zařízení, pojišťoven a úřadů. Samotná identita volajícího ani úřední hlavička nezakládají automatické oprávnění ke všem údajům."],
      ["Právo na výmaz má výjimky", "Pacient může požádat o výmaz podle čl. 17 GDPR, ale zdravotnická dokumentace může podléhat povinnému uchování. Rozhodnutí o vyhovění nebo odmítnutí žádosti patří odpovědné osobě a musí být zdůvodněno."],
      ["Předejte žádost správnou cestou", "Ověřuje se totožnost, oprávnění, právní důvod, rozsah a způsob předání. Žádost o výmaz, kopii dokumentace či údaj pro externí instituci nevyřizujte neformálně."],
    ],
    example: "Volající uvede správné datum narození pacienta a tvrdí, že je jeho manželkou. Bez schváleného ověření nesdělujte termín ani výsledek vyšetření; požadavek předejte k vyřízení.",
    task: "Přiřaďte tři modelové žádosti ke správným postupům. Kartičky lze přetahovat nebo ovládat kliknutím.",
  },
  3: {
    title: "Kamerový systém a přístup k záznamům",
    learn: "Zjistíte, proč i krátký náhled do kamerového záznamu vyžaduje formální postup a kdo v PTC řeší externí žádosti a schvalování předání.",
    rules: [
      ["Právní důvod a účel", "Kamerový záznam identifikovatelných osob je osobním údajem. Jeho pořízení a použití musí mít oprávněný účel; nelze jej zpřístupnit jen na základě dobrého úmyslu nebo zvědavosti."],
      ["Formulář i při pouhém nahlédnutí", "Podle interního školení PTC je pro náhled i žádost o předání kamerového záznamu potřeba vyplnit formulář na SharePointu (SHP)."],
      ["Schvalování a komunikace", "Externí žádosti, například od policie, řeší dle školení technický úsek. Vydání záznamu vyžaduje schválení jednatelů a informace o kamerovém systému sdělují jen pověřené osoby."],
    ],
    example: "Kolega potřebuje po incidentu pouze na chvíli vidět záznam. I v takové situaci jej nesmí získat neformálně; musí být zaznamenána žádost na SHP a ověřeno oprávnění.",
    task: "Přečtěte si situaci s kamerovým záznamem a vyberte správný postup.",
  },
  4: {
    title: "AI, GDPR a odpovědnost v PTC",
    learn: "Poznáte hlavní rizika AI ve zdravotnictví, fenomén shadow AI, rozdíl mezi pseudonymizací a anonymizací a roli DPO či metodika AI.",
    rules: [
      ["Shadow AI a kontrola nástrojů", "Používat AI mimo schválený rámec organizace je rizikové. Před nasazením nového nástroje nebo účelu použití zapojte DPO či metodika AI a ověřte zacházení s daty."],
      ["Ochrana údajů a pseudonymizace", "Do neschválených nástrojů nevkládejte osobní ani zdravotní údaje pacientů. Nahrazení jména kódem samo o sobě neznamená anonymizaci; identifikace může být možná i z kombinace dalších údajů."],
      ["Lidský dohled a kontrola výsledků", "AI může generovat chybný či zkreslený výstup. Zdravotnická rozhodnutí vyžadují odborný dohled, problematické výstupy je třeba řešit příslušným postupem. Při relevantním klinickém použití se posuzují také bezpečnostní a regulační požadavky."],
    ],
    example: "Chcete AI požádat o stručnou pacientskou šablonu. Místo skutečné lékařské zprávy použijete fiktivní zadání a nejprve ověříte, že je použití daného nástroje v PTC povoleno.",
    task: "Projděte krátký příběh o bezpečném použití AI a poté roztřiďte příklady podle toho, zda obsahují osobní údaje.",
  },
  5: {
    title: 'Shrnutí před testem',
    task: 'Doplňte tři důležitá slova do základních pravidel GDPR. Pak přejděte k závěrečnému testu.',
  },
} satisfies Record<number, { title: string; task: string; learn?: string; rules?: string[][]; example?: string }>

export const recap = {
  title: 'Našli jste ve společné složce dokument s údaji pacientů, ke kterému zřejmě mají přístup i neoprávněné osoby. Co uděláte?',
  choices: [
    'Hned ohlásím podezření schváleným interním kanálem.',
    'Počkám, jestli na to upozorní ještě někdo.',
    'Pošlu kopii dokumentu kolegům, aby to zkontrolovali.',
  ],
  key: 0,
  feedback: [
    'Včasné hlášení umožní pověřenému týmu ověřit rozsah přístupu a situaci řešit. Další kopie dokumentu neposílejte.',
  ],
}
