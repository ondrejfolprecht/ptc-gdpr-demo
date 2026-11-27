/**
 * Upraveno podle interní prezentace „GDPR a AI v PTC 2025–2026“.
 * Veřejné demo uvádí principy a modelové situace, nikoli přesné
 * bezpečnostní parametry zařízení. Před ostrým nasazením nutná revize DPO.
 */
export type PracticeExample = {
  title: string
  situation: string
  action: string
  takeaway: string
}
export type TheoryExtra = {
  lead: string
  photo: { src: string; alt: string; credit: string; url: string }
  why: string
  examples: PracticeExample[]
  mistake: string
  checklist: string[]
  note?: string
}

export const theoryExtras: Record<number, TheoryExtra> = {
  1: {
    lead: "Ochrana údajů je součástí důvěry pacientů v PTC. E-mail může obsahovat informace o zdraví, ale také může vyvolat zbytečné obavy, pokud má zavádějící předmět nebo nejasného odesílatele.",
    photo: {
      src: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační fotografie rukou při psaní na počítačové klávesnici ve zdravotnickém prostředí',
      credit: 'Vitaly Gariev / Unsplash',
      url: 'https://unsplash.com/photos/doctor-typing-on-keyboard-with-stethoscope-nearby-FQQoUPVb_1c',
    },
    why: "Pacientské údaje zpracováváme pouze pro oprávněný účel a ve vhodném rozsahu. Diagnózy, lékařské zprávy či plán léčby jsou zvlášť chráněné informace. Vedle správného adresáta a přílohy je důležitá i transparentnost: z předmětu, podpisu a odesílatele musí být zřejmé, kdo a proč píše. Interní prezentace PTC navíc upozorňuje na plánované auditní kontroly podpisových vzorů.",
    examples: [
      {
        title: "Zavádějící předmět e-mailu",
        situation: "Pacientovi posíláte informaci o změně termínu. V předmětu je automaticky převzaté „Re: informace o účtu“, které se zprávou nesouvisí.",
        action: "Použijte pravdivý a srozumitelný předmět. Neuvádějte v něm zbytečně diagnózu ani jiné zdravotní údaje; ověřte také podpis a identitu odesílatele.",
        takeaway: "Předmět i podpis mají odpovídat skutečnému účelu komunikace.",
      },
      {
        title: "Dvě podobné e-mailové adresy",
        situation: "Našeptávač nabídne dva kontakty s podobným jménem. K jednomu e-mailu je přiložena zpráva konkrétního pacienta.",
        action: "Zkontrolujte celou adresu a oprávnění příjemce. Otevřete přílohu, ověřte správného pacienta a použijte schválený kanál.",
        takeaway: "Ani interní adresát automaticky nepotřebuje všechna pacientská data.",
      },
      {
        title: "Chybná příloha už odešla",
        situation: "Po odeslání zjistíte, že jste připojili zprávu jiného pacienta. Nevíte, zda ji příjemce otevřel.",
        action: "Podezření na bezpečnostní incident bez odkladu nahlaste schváleným interním postupem. Nesnažte se je řešit pouze smazáním zprávy z odeslané pošty.",
        takeaway: "Při incidentu je zásadní rychlé nahlášení a koordinovaný postup.",
      },
    ],
    mistake: "„Stačí, že zpráva došla správnému člověku.“ Nestačí. Prezentace PTC zdůrazňuje také transparentní komunikaci, pravdivé údaje o odesílateli a jednotné podpisové vzory.",
    checklist: [
      "Je předmět pravdivý, jasný a bez zbytečných zdravotních údajů?",
      "Je odesílatel identifikovatelný a podpis odpovídá pravidlům PTC?",
      "Ověřil/a jsem oprávnění příjemce i obsah všech příloh?",
      "Vím, jak ihned nahlásit chybné odeslání?",
    ],
    note: "Podklad: interní školení „GDPR a AI v PTC 2025–2026“, zejména část o klamavých e-mailech a kontrole podpisových vzorů. Konkrétní podobu podpisu určuje aktuální interní standard.",
  },
  2: {
    lead: "Pacienti, příbuzní i instituce mají různé důvody žádat o informace. Ochota pomoci nesmí předběhnout ověření totožnosti, právního důvodu a oprávnění k předání.",
    photo: {
      src: 'https://images.unsplash.com/photo-1758691462848-31a39258dbd8?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační fotografie zdravotnice telefonující při práci na notebooku',
      credit: 'Vitaly Gariev / Unsplash',
      url: 'https://unsplash.com/photos/doctor-on-phone-working-on-laptop-in-office-egCFrNJ6Djw',
    },
    why: "Podle interní prezentace PTC je potřeba zvláštní pozornost věnovat žádostem policie a soudů, dalších lékařů a zdravotnických zařízení, zdravotních pojišťoven, úřadů, zaměstnavatelů i rodinných příslušníků. Každá skupina může mít jiné oprávnění a rozsah údajů. Právo na výmaz podle čl. 17 GDPR neznamená automatický výmaz zdravotnické dokumentace, protože může platit zákonná povinnost uchování. Každá žádost se musí posoudit a odpověď řádně zdůvodnit.",
    examples: [
      {
        title: "Volá příbuzný pacienta",
        situation: "Volající zná datum narození a ptá se na výsledek vyšetření či termín protonové léčby.",
        action: "Před sdělením údajů ověřte totožnost a oprávnění podle pravidel PTC. Bez ověření výsledek ani termín nesdělujte.",
        takeaway: "Znalost rodinných či identifikačních údajů sama o sobě nestačí.",
      },
      {
        title: "Požadavek policie nebo jiného úřadu",
        situation: "Do schránky dorazí žádost o celou dokumentaci s úředně vypadajícím podpisem.",
        action: "Nespoléhejte na samotné označení instituce. Žádost předejte odpovědné osobě k ověření právního podkladu, identity, rozsahu a způsobu předání.",
        takeaway: "I oficiálně působící požadavek se musí ověřit.",
      },
      {
        title: "Pacient chce smazat dokumentaci",
        situation: "Pacient po léčbě žádá okamžitý výmaz všech záznamů včetně údajů u dalších zpracovatelů.",
        action: "Žádost zaznamenejte a předejte k posouzení. Neodstraňujte dokumentaci svévolně; odpovědná osoba posoudí zákonné lhůty uchování, případné výjimky a způsob odpovědi.",
        takeaway: "Pokud nelze vymazat, musí být důvod srozumitelně vysvětlen.",
      },
    ],
    mistake: "„Právo být zapomenut znamená, že musíme zdravotnickou dokumentaci na požádání smazat.“ V prezentaci PTC se výslovně upozorňuje na výjimky spojené s povinným uchováním a na potřebu řádného odůvodnění.",
    checklist: [
      "Vím, která osoba či instituce o údaje žádá?",
      "Ověřil/a jsem její skutečné oprávnění a potřebný rozsah?",
      "Nejde o žádost, kterou musí posoudit pověřená osoba?",
      "Při žádosti o výmaz jsem ji předal/a k řádnému vyřízení, nikoli smazal/a data sám/sama?",
    ],
    note: "Prezentace PTC uvádí pro zdravotnickou dokumentaci po protonové radioterapii novou archivační lhůtu 100 let. Před ostrým nasazením kurzu musí tuto konkrétní lhůtu a její právní základ potvrdit DPO nebo odpovědná osoba. V demonstraci ji proto neuvádíme jako obecně platné právní pravidlo.",
  },
  3: {
    lead: "Kamerové záznamy slouží stanoveným bezpečnostním účelům, ale mohou zachycovat pacienty, zaměstnance i návštěvníky. Neformální „jen se podívat“ není výjimkou z pravidel.",
    photo: {
      src: 'https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?auto=format&fit=crop&w=1200&q=82',
      alt: 'Ilustrační fotografie bezpečnostní kamery na stropě',
      credit: 'Franck V. / Unsplash',
      url: 'https://unsplash.com/photos/a-security-camera-mounted-to-the-ceiling-of-a-building-ujSsIk5iZmA',
    },
    why: "Interní prezentace PTC výslovně uvádí, že žádost o kamerový záznam se podává formulářem dostupným na SharePointu (SHP) – a to i v případě pouhého náhledu. Externí žádost, například od policie, vyřizuje podle školení technický úsek. Vydání záznamu třetí osobě podléhá schválení jednatelů. Informace o samotném kamerovém systému sděluje jen pověřenec nebo osoba k tomu určená jednateli.",
    examples: [
      {
        title: "Kolega chce jen nahlédnout",
        situation: "Kolega se ptá, kdo se pohyboval na chodbě, a říká, že si záznam nechce nikam ukládat.",
        action: "Záznam nezpřístupňujte neformálně. Podle interního školení je nutné vyplnit formulář na SHP i při pouhém náhledu a nechat žádost posoudit.",
        takeaway: "Žádost se eviduje i tehdy, když nevznikne kopie.",
      },
      {
        title: "Policie žádá o kamerový záznam",
        situation: "Příslušník policie požaduje záznam události a chce jej hned předat na externí disk.",
        action: "Nepředávejte záznam na místě bez schválení. Podle prezentace se externí žádost řeší prostřednictvím technického úseku a předání vyžaduje schválení jednatelů.",
        takeaway: "Úřední požadavek neobchází interní schvalovací postup.",
      },
      {
        title: "Dotaz na fungování kamer",
        situation: "Návštěvník chce vědět, kde se ukládají záznamy a kdo k nim má přístup.",
        action: "Neposkytujte vlastní neověřené vysvětlení. Informace o kamerovém systému předává pověřenec nebo osoba určená jednateli.",
        takeaway: "Komunikaci o kamerovém systému zajišťují určené osoby.",
      },
    ],
    mistake: "„Formulář je potřeba, jen když se video vydává.“ Podle interní prezentace PTC je evidence nutná i pro samotné nahlédnutí do záznamu.",
    checklist: [
      "Byl vyplněn příslušný formulář žádosti na SHP?",
      "Jde jen o náhled, nebo o předání kopie? (Postup je nutný v obou případech.)",
      "Pokud žádá externí subjekt, zapojil se určený útvar?",
      "Bylo před vydáním záznamu zajištěno požadované schválení jednatelů?",
    ],
    note: "Tyto postupy přebíráme ze školení PTC 2025–2026. Před publikací interního kurzu je potřeba ověřit jejich aktuální znění. Z důvodů bezpečnosti nejsou na veřejném demu uvedeny počty, rozmístění ani plánované změny kamer.",
  },
  4: {
    lead: "Ve zdravotnictví se AI využívá při práci s obrazovými daty, v plánování radioterapie i administrativě. Přínosy jsou reálné, ale odpovědnost za rozhodnutí, ochranu údajů a kontrolu výstupu zůstává na lidech.",
    photo: {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační abstraktní grafika představující umělou inteligenci',
      credit: 'Unsplash',
      url: 'https://unsplash.com/s/photos/artificial-intelligence',
    },
    why: "Interní školení PTC upozorňuje na pět rizik: nesprávné či zkreslené výsledky, nedostatek lidského dohledu, zpracování citlivých údajů, ztrátu kontroly nad uloženými daty a etická dilemata. Shadow AI znamená používání nástrojů mimo schválený rámec organizace. U nového nástroje je podle prezentace nutné zapojit DPO nebo metodika AI a posoudit, co nástroj s daty dělá; u relevantních zdravotnických AI systémů také příslušné požadavky na bezpečnost a certifikaci. Pseudonymizace (např. kódem) neznamená anonymitu.",
    examples: [
      {
        title: "Vložení zprávy do externí AI",
        situation: "Zaměstnanec chce zkrátit dopis pacientovi a nahraje celý dokument do veřejného chatbotu.",
        action: "Nepoužívejte pro pacientské údaje neschválený nástroj. Před novým použitím AI informujte DPO nebo metodika AI a vyžádejte posouzení nástroje i účelu.",
        takeaway: "Úspora času neopravňuje předávat citlivá data externí službě.",
      },
      {
        title: "Jméno nahradíte kódem",
        situation: "Ze zprávy odstraníte jméno, ale ponecháte kombinaci vzácné diagnózy, věku a termínu léčby.",
        action: "Nespoléhejte na samotnou pseudonymizaci. I kombinace nepřímých údajů může člověka identifikovat. Pro běžné textové šablony použijte fiktivní zadání.",
        takeaway: "Pseudonymizovaná data mohou být stále osobními údaji.",
      },
      {
        title: "AI navrhne přesvědčivý odborný text",
        situation: "Nástroj připraví text o léčbě, ale uvede klinický výsledek, který nedokážete doložit.",
        action: "Odborný obsah ověřte u kompetentního pracovníka a ve spolehlivém podkladu. Chybné nebo nevhodné výstupy hlaste podle platného interního postupu.",
        takeaway: "AI je podpora práce, nikoli náhrada odborného úsudku.",
      },
    ],
    mistake: "„Když mám AI nástroj v počítači, je tím automaticky schválený pro zdravotnická data.“ Schválení konkrétního nástroje, účelu i typu údajů je nutné ověřit; volně dostupné chatboty nebo překladače mohou být příkladem shadow AI.",
    checklist: [
      "Vím, zda je AI nástroj a zamýšlené použití schváleno?",
      "Před novým nástrojem nebo účelem jsem zapojil/a DPO či metodika AI?",
      "Nevkládám osobní, zdravotní ani jinak identifikující údaje bez odpovídajícího schválení?",
      "Ověřil/a jsem správnost výstupu a vím, kam nahlásit problematický výsledek?",
    ],
    note: "Školení 2025–2026 uvádělo, že pravidla používání AI v PTC se připravují. Demo proto neprohlašuje žádný konkrétní komerční AI nástroj za schválený. Aktuální seznam nástrojů a postupy musí potvrdit DPO / metodik AI.",
  },
}

export const recapExtras = {
  heading: "GDPR v PTC: chráníme důvěru pacientů",
  intro: "Ochrana údajů je součástí kvality a bezpečnosti zdravotní péče. Odpovědnost za každodenní zacházení s daty není jen na pověřenci: každý zaměstnanec musí znát pravidla svého pracoviště.",
  questions: [
    "Před odesláním informací vím, kdo a proč je skutečně potřebuje?",
    "Vím, jak předat žádost pacienta, úřadu nebo požadavek na kamerový záznam?",
    "Umím bez odkladu ohlásit podezření na bezpečnostní incident?",
    "Vím, komu v PTC předat návrh na nový AI nástroj či problematický AI výstup?",
  ],
  footer: "Pro vedoucí zaměstnance navíc platí povinnost zajistit, aby jejich úsek znal používané údaje, postupy při žádostech a hlášení incidentů. V pochybnostech postup ověřte u určené odpovědné osoby.",
}
