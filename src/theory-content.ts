/**
 * Pravidla ochrany údajů a používání AI pro zaměstnance PTC.
 * Příklady jsou ilustrační a neobsahují údaje skutečných pacientů.
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
}

export const theoryExtras: Record<number, TheoryExtra> = {
  1: {
    lead: "Bezpečné zacházení s osobními údaji je důležité pro důvěru pacientů v PTC. Při e-mailové komunikaci může i drobná chyba způsobit, že citlivé informace dostane nesprávný člověk.",
    photo: {
      src: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační fotografie rukou při psaní na počítačové klávesnici ve zdravotnickém prostředí',
      credit: 'Vitaly Gariev / Unsplash',
      url: 'https://unsplash.com/photos/doctor-typing-on-keyboard-with-stethoscope-nearby-FQQoUPVb_1c',
    },
    why: "Informace o pacientech sdílejte jen s lidmi, kteří je potřebují ke své práci a mají k nim oprávnění. Diagnózy, lékařské zprávy a léčebné plány obsahují údaje o zdraví, na které se vztahuje zvláštní ochrana. Před odesláním zkontrolujte příjemce, přílohu a předmět. Pacient musí také poznat, kdo mu píše. Proto používejte aktuální podpisový vzor PTC.",
    examples: [
      {
        title: "Zavádějící předmět e-mailu",
        situation: "Píšete pacientovi o změně termínu, ale v předmětu zůstal text „Re: informace o účtu“, který s obsahem zprávy nesouvisí.",
        action: "Upravte předmět tak, aby odpovídal zprávě a neprozrazoval zbytečné zdravotní údaje. Zkontrolujte také svůj podpis.",
        takeaway: "Předmět má vystihovat obsah zprávy a z podpisu musí být zřejmé, kdo ji posílá.",
      },
      {
        title: "Dvě podobné e-mailové adresy",
        situation: "Při výběru adresáta vám e-mailový program nabídne dva podobné kontakty. Ke zprávě máte přiloženou lékařskou zprávu.",
        action: "Před odesláním ověřte celou adresu a oprávnění příjemce. Otevřete přílohu a zkontrolujte, zda se týká správného pacienta. Použijte schválený způsob předání.",
        takeaway: "Ani kolegovi neposílejte víc údajů, než potřebuje ke své práci.",
      },
      {
        title: "Chybná příloha už odešla",
        situation: "Po odeslání zjistíte, že jste připojili zprávu jiného pacienta. Nevíte, jestli si ji příjemce už přečetl.",
        action: "Chybu ihned nahlaste podle interního postupu. Nestačí zprávu smazat z odeslané pošty.",
        takeaway: "Podezření na incident hlaste ihned. Další postup zajistí odpovědné osoby.",
      },
    ],
    mistake: "„Zpráva šla kolegovi, takže je vše v pořádku.“ I kolega smí dostat jen údaje, které ke své práci potřebuje. E-mail navíc musí mít správný předmět a podpis.",
    checklist: [
      "Odpovídá předmět obsahu zprávy a neprozrazuje zbytečné zdravotní údaje?",
      "Je ze zprávy jasné, kdo ji posílá, a je podpis správný?",
      "Je adresa příjemce správná a smí dané údaje obdržet? Zkontroloval jsem přílohy?",
      "Vím, komu okamžitě nahlásit chybu při odeslání?",
    ],
  },
  2: {
    lead: "O informace o pacientovi může požádat příbuzný, jiný lékař i úřad. Než údaje komukoli sdělíte, musíte ověřit, zda na ně má právo.",
    photo: {
      src: 'https://images.unsplash.com/photo-1758691462848-31a39258dbd8?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační fotografie zdravotnice telefonující při práci na notebooku',
      credit: 'Vitaly Gariev / Unsplash',
      url: 'https://unsplash.com/photos/doctor-on-phone-working-on-laptop-in-office-egCFrNJ6Djw',
    },
    why: "O zdravotní údaje mohou žádat například příbuzní, jiné nemocnice, pojišťovny, policie, soudy nebo úřady. U každé žádosti je nutné ověřit, jaké informace lze předat a komu. Pacient může také požádat o výmaz údajů podle čl. 17 GDPR. Zdravotnickou dokumentaci ale může být nutné uchovávat ze zákona, proto se každá žádost o výmaz posuzuje individuálně. Pokud jí nelze vyhovět, musí pacient dostat vysvětlení.",
    examples: [
      {
        title: "Volá příbuzný pacienta",
        situation: "Volající zná datum narození pacienta a ptá se na výsledek vyšetření nebo termín léčby.",
        action: "Než cokoli sdělíte, ověřte totožnost volajícího a jeho oprávnění podle pravidel PTC. Do té doby žádné informace neposkytujte.",
        takeaway: "Ani znalost data narození neznamená, že má volající právo na informace.",
      },
      {
        title: "Požadavek policie nebo jiného úřadu",
        situation: "E-mailem přijde žádost o kompletní zdravotnickou dokumentaci. Zpráva má úředně vypadající podpis.",
        action: "Dokumentaci sami neposílejte. Žádost předejte odpovědné osobě, která ověří žadatele, jeho oprávnění i rozsah požadovaných údajů.",
        takeaway: "Úřední podpis v e-mailu sám o sobě nestačí.",
      },
      {
        title: "Pacient chce smazat dokumentaci",
        situation: "Pacient po ukončení léčby požádá o smazání celé zdravotnické dokumentace.",
        action: "Žádost zaznamenejte a předejte k vyřízení. Sami nic nemažte. Odpovědná osoba ověří povinnost dokumentaci uchovávat a připraví odpověď pacientovi.",
        takeaway: "Pokud výmaz není možný, pacient musí dostat srozumitelné vysvětlení.",
      },
    ],
    mistake: "„Když pacient požádá o výmaz, musíme všechny údaje hned smazat.“ U zdravotnické dokumentace mohou platit zákonné lhůty uchování. Žádost vždy předejte k posouzení.",
    checklist: [
      "Vím, kdo o údaje žádá?",
      "Má žadatel právo získat právě tyto informace?",
      "Musím žádost předat odpovědné osobě?",
      "Pokud jde o žádost o výmaz, předal jsem ji k vyřízení, aniž bych údaje sám mazal?",
    ],
  },
  3: {
    lead: "Kamerové záznamy slouží stanoveným bezpečnostním účelům, ale mohou zachycovat pacienty, zaměstnance i návštěvníky. Neformální „jen se podívat“ není výjimkou z pravidel.",
    photo: {
      src: 'https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?auto=format&fit=crop&w=1200&q=82',
      alt: 'Ilustrační fotografie bezpečnostní kamery na stropě',
      credit: 'Franck V. / Unsplash',
      url: 'https://unsplash.com/photos/a-security-camera-mounted-to-the-ceiling-of-a-building-ujSsIk5iZmA',
    },
    why: "Pro nahlédnutí i vydání kamerového záznamu vyplňte formulář žádosti na SharePointu (SHP). Pokud o záznam žádá externí subjekt, například Policie ČR, formulář vyplňuje technický úsek. Vydání záznamu musí schválit jednatelé. Informace o kamerovém systému sděluje pouze pověřenec nebo osoba určená jednateli.",
    examples: [
      {
        title: "Kolega chce jen nahlédnout",
        situation: "Kolega se ptá, kdo se pohyboval na chodbě, a říká, že si záznam nechce nikam ukládat.",
        action: "Záznam nezpřístupňujte na základě neformální prosby. I při pouhém náhledu je nutné vyplnit formulář žádosti na SHP a postupovat podle pravidel přístupu.",
        takeaway: "Žádost se eviduje i tehdy, když nevznikne kopie.",
      },
      {
        title: "Policie žádá o kamerový záznam",
        situation: "Příslušník policie požaduje záznam události a chce jej hned předat na externí disk.",
        action: "Záznam nepředávejte bez schválení. U externí žádosti vyplňuje formulář technický úsek a vydání záznamu schvalují jednatelé.",
        takeaway: "Úřední požadavek neobchází interní schvalovací postup.",
      },
      {
        title: "Dotaz na fungování kamer",
        situation: "Návštěvník chce vědět, kde se ukládají záznamy a kdo k nim má přístup.",
        action: "Neposkytujte vlastní neověřené vysvětlení. Informace o kamerovém systému předává pověřenec nebo osoba určená jednateli.",
        takeaway: "Komunikaci o kamerovém systému zajišťují určené osoby.",
      },
    ],
    mistake: "„Formulář je potřeba jen při vydání kopie.“ Žádost na SHP vyplňujete i tehdy, když potřebujete záznam pouze zobrazit.",
    checklist: [
      "Byl vyplněn příslušný formulář žádosti na SHP?",
      "Jde jen o náhled, nebo o předání kopie? (Postup je nutný v obou případech.)",
      "Pokud žádá externí subjekt, zapojil se určený útvar?",
      "Bylo před vydáním záznamu zajištěno požadované schválení jednatelů?",
    ],
  },
  4: {
    lead: "Ve zdravotnictví se AI využívá při práci s obrazovými daty, v plánování radioterapie i administrativě. Přínosy jsou reálné, ale odpovědnost za rozhodnutí, ochranu údajů a kontrolu výstupu zůstává na lidech.",
    photo: {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační abstraktní grafika představující umělou inteligenci',
      credit: 'Unsplash',
      url: 'https://unsplash.com/s/photos/artificial-intelligence',
    },
    why: "Při práci s AI je nutné počítat s pěti hlavními riziky: nesprávné či zkreslené výsledky, nedostatek lidského dohledu, zpracování citlivých údajů, ztrátu kontroly nad uloženými daty a etická dilemata. Shadow AI znamená používání nástrojů mimo schválený rámec organizace. Před zavedením nového nástroje zapojte DPO nebo metodika AI a posoudit, co nástroj s daty dělá; u relevantních zdravotnických AI systémů také příslušné požadavky na bezpečnost a certifikaci. Pseudonymizace (např. kódem) neznamená anonymitu.",
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
