export const lessons = {
  1: {
    title: "E-mailová komunikace a osobní údaje",
    learn: "Naučíte se bezpečně posílat e-maily s údaji pacientů. Také si ukážeme, jak správně napsat předmět zprávy a co má obsahovat podpis.",
    rules: [
      ["Co je důvěrné", "Jméno a kontaktní údaje patří mezi osobní údaje. Informace o zdraví, například diagnóza nebo lékařská zpráva, podléhají zvláštní ochraně. Posílejte jen informace, které příjemce skutečně potřebuje."],
      ["Transparentní e-mail", "Předmět má vystihovat obsah zprávy a z podpisu musí být jasné, kdo ji posílá. Používejte aktuální podpisový vzor PTC."],
      ["Před odesláním a při chybě", "Před odesláním zkontrolujte celou adresu, oprávnění příjemce a správnou přílohu. Použijte schválený způsob předání. Pokud údaje omylem pošlete nesprávné osobě, ihned to nahlaste podle interního postupu."],
    ],
    example: "Píšete pacientovi o změně termínu, ale v předmětu zůstal text „Re: informace o účtu“. Předmět upravte podle skutečného obsahu zprávy. Před odesláním ještě zkontrolujte adresu a podpis.",
    task: "Odpovězte na dvě krátké otázky: co zkontrolovat před odesláním e-mailu a jak postupovat, pokud zpráva odešla nesprávnému příjemci.",
  },
  2: {
    title: "Žádosti o údaje a právo na výmaz",
    learn: "Dozvíte se, kdo může žádat o informace o pacientovi, proč musíte ověřit jeho oprávnění a jak postupovat při žádosti o výmaz dokumentace.",
    rules: [
      ["Kdo smí údaje získat", "O informace mohou požádat příbuzní, zaměstnavatelé, policie, soudy, jiná zdravotnická zařízení, pojišťovny i úřady. U každé žádosti je nutné ověřit, zda má žadatel právo získat požadované údaje."],
      ["Právo na výmaz má výjimky", "Pacient může požádat o výmaz údajů podle čl. 17 GDPR. Zdravotnickou dokumentaci však může být nutné uchovávat ze zákona. Žádost proto předejte odpovědné osobě, která ji posoudí a připraví odůvodněnou odpověď."],
      ["Předejte žádost správnou cestou", "Před předáním údajů je potřeba ověřit totožnost žadatele, jeho oprávnění a rozsah informací, na které má právo. Žádosti o výmaz nebo kopii dokumentace vyřizujte pouze stanoveným postupem."],
    ],
    example: "Volající zná datum narození pacienta a představí se jako jeho manželka. Bez ověření totožnosti a oprávnění jí nesdělujte termín ani výsledek vyšetření. Postupujte podle pravidel PTC.",
    task: "Přiřaďte tři modelové žádosti ke správným postupům. Kartičky lze přetahovat nebo ovládat kliknutím.",
  },
  3: {
    title: "Kamerový systém a přístup k záznamům",
    learn: "Dozvíte se, proč i krátké nahlédnutí do kamerového záznamu vyžaduje oprávnění a jak bezpečně reagovat na žádost o přístup.",
    rules: [
      ["Právní důvod a účel", "Kamerové záznamy, na kterých lze poznat konkrétní osoby, obsahují osobní údaje. K jejich pořízení a zpřístupnění musí existovat oprávněný důvod."],
      ["Oprávnění i pro pouhé nahlédnutí", "Pro nahlédnutí i vydání kopie je nutné ověřit důvod žádosti a oprávnění žadatele. Bez stanoveného postupu záznam nezpřístupňujte."],
      ["Předání a komunikace", "Žádosti externích subjektů musí projít ověřením. O vydání záznamu i poskytování informací o kamerovém systému rozhodují určené oprávněné osoby."],
    ],
    example: "Kolega chce po incidentu na chvíli vidět kamerový záznam. Ani krátký náhled mu bez ověření oprávnění a stanoveného postupu nezpřístupňujte.",
    task: "Přečtěte si situaci s kamerovým záznamem a vyberte správný postup.",
  },
  4: {
    title: "AI, GDPR a odpovědnost v PTC",
    learn: "Seznámíte se s riziky používání AI ve zdravotnictví. Vysvětlíme si, co znamená shadow AI, proč nestačí odstranit jméno pacienta a s kým konzultovat nový AI nástroj.",
    rules: [
      ["Shadow AI a kontrola nástrojů", "Používejte jen AI nástroje schválené pro danou práci. Pokud chcete zavést nový nástroj nebo jej využívat jiným způsobem, nejprve se obraťte na pověřence pro ochranu osobních údajů."],
      ["Ochrana údajů a pseudonymizace", "Do neschválených AI nástrojů nevkládejte osobní ani zdravotní údaje pacientů. Ani nahrazení jména kódem nemusí stačit. Pacienta mohou prozradit jiné informace ve zprávě."],
      ["Lidský dohled a kontrola výsledků", "AI může chybovat nebo vytvářet nepřesné informace. Její výsledky musí kontrolovat odpovědný pracovník, zvlášť pokud souvisejí se zdravotní péčí. Při klinickém použití je navíc nutné posoudit příslušné bezpečnostní a právní požadavky."],
    ],
    example: "Chcete pomocí AI vytvořit šablonu dopisu pro pacienty. Připravte fiktivní zadání místo skutečné lékařské zprávy a ověřte, že PTC daný nástroj pro tuto práci schválilo.",
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
