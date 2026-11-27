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
export type RealIncident = {
  name: string
  location: string
  year: string
  mistake: string
  consequence: string
  takeaway: string
  sourceName: string
  sourceUrl: string
}
export type TheoryExtra = {
  lead: string
  photo: { src: string; alt: string; credit: string; url: string }
  why: string
  examples: PracticeExample[]
  mistake: string
  checklist: string[]
  realCase: RealIncident
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
      "Je adresa příjemce správná a má příjemce oprávnění údaje získat? Jsou přílohy zkontrolované?",
      "Vím, komu okamžitě nahlásit chybu při odeslání?",
    ],
    realCase: {
      name: "Hromadný e-mail odhalil klienty kliniky",
      location: "56 Dean Street, Londýn, Velká Británie",
      year: "2015",
      mistake: "Klinika odeslala hromadný e-mail uživatelům služby spojené s HIV. Adresy vložila do pole Komu místo Skrytá kopie. Příjemci tak viděli e-mailové adresy ostatních; u většiny bylo uvedeno i celé jméno.",
      consequence: "Únik se týkal 781 e-mailových adres. Britský úřad pro ochranu údajů uložil provozovateli kliniky v roce 2016 pokutu 180 000 liber.",
      takeaway: "U hromadných e-mailů stačí jediná chyba při zadávání adresátů, aby se citlivé informace dostaly k dalším lidem.",
      sourceName: "ICO: London NHS trust fined for HIV newsletter data breach (9. 5. 2016)",
      sourceUrl: "https://www.wired-gov.net/wg/news.nsf/print/London%2BNHS%2Btrust%2Bfined%2Bfor%2BHIV%2Bnewsletter%2Bdata%2Bbreach%2B09052016162000",
    },
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
      "Byla žádost o výmaz předána k vyřízení, aniž by kdokoli údaje svévolně mazal?",
    ],
    realCase: {
      name: "Ordinace předala pojišťovně příliš mnoho údajů",
      location: "Staines Health Group, Velká Británie",
      year: "2026",
      mistake: "Pojišťovna požádala o pět let zdravotní historie, které měl nejprve dostat pacient ke kontrole. Ordinace ale odeslala pojišťovně přímo 23 let jeho zdravotnických záznamů.",
      consequence: "Úřad ICO udělil ordinaci oficiální napomenutí. Případ ukázal nedostatky v pravidlech pro vyřizování žádostí a v proškolení zaměstnanců.",
      takeaway: "Předávejte jen údaje, které jsou skutečně požadované a pro jejichž předání existuje oprávnění.",
      sourceName: "ICO: GP surgery reprimanded after excessive medical history sent to insurer (3. 2. 2026)",
      sourceUrl: "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/02/gp-surgery-reprimanded-after-excessive-medical-history-of-terminally-ill-patient-sent-to-insurer/",
    },
  },
  3: {
    lead: "Kamerové záznamy mohou pomoci při řešení bezpečnostních událostí. Protože na nich lze poznat pacienty, návštěvníky i zaměstnance, není možné do nich nahlížet bez oprávnění.",
    photo: {
      src: 'https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?auto=format&fit=crop&w=1200&q=82',
      alt: 'Ilustrační fotografie bezpečnostní kamery na stropě',
      credit: 'Franck V. / Unsplash',
      url: 'https://unsplash.com/photos/a-security-camera-mounted-to-the-ceiling-of-a-building-ujSsIk5iZmA',
    },
    why: "Kamerové záznamy lze zpřístupnit pouze oprávněným osobám a pro konkrétní účel. To platí také pro krátké nahlédnutí bez pořizování kopie. Každou žádost je třeba posoudit podle schválených pravidel a záznam nesmí být předán bez odpovídajícího oprávnění.",
    examples: [
      {
        title: "Kolega chce jen nahlédnout",
        situation: "Kolega chce zjistit, kdo se pohyboval po chodbě. Tvrdí, že se potřebuje jen podívat a nic si nebude ukládat.",
        action: "Záznam neotevírejte jen na základě neformální prosby. Požadavek předejte k ověření oprávnění a účelu podle stanoveného postupu.",
        takeaway: "I pouhé zhlédnutí záznamu musí mít oprávněný důvod.",
      },
      {
        title: "Policie žádá o kamerový záznam",
        situation: "Policista požaduje kopii kamerového záznamu a chce si ji rovnou odnést na externím disku.",
        action: "Záznam sami nevydávejte. Žádost předejte oprávněné osobě, která ověří právní důvod, rozsah a podmínky případného předání.",
        takeaway: "Ani úřední žádost není důvodem k okamžitému předání záznamu bez ověření.",
      },
      {
        title: "Dotaz na fungování kamer",
        situation: "Návštěvník se ptá, kde se kamerové záznamy ukládají a kdo si je může prohlížet.",
        action: "Dotaz předejte odpovědné osobě. Neposkytujte neověřené informace o provozu ani zabezpečení kamer.",
        takeaway: "Podrobnosti o kamerovém systému poskytují pouze oprávněné osoby.",
      },
    ],
    mistake: "„Když se na záznam jen podívám, nic se neděje.“ Také samotné zhlédnutí je přístup k osobním údajům a musí mít oprávněný účel.",
    checklist: [
      "Je důvod k přístupu oprávněný a jasně vymezený?",
      "Byl požadavek posouzen stanoveným způsobem, i když jde jen o nahlédnutí?",
      "Pokud žádá externí subjekt, bylo ověřeno jeho oprávnění?",
      "Je předání záznamu schválené oprávněnou osobou?",
    ],
    realCase: {
      name: "Vrchní sestra sdílela video pacienta v pracovním chatu",
      location: "Eric Williams Medical Sciences Complex, Trinidad a Tobago",
      year: "2017, rozhodnutí soudu 2025",
      mistake: "Vrchní sestra sdílela v pracovní skupině na WhatsAppu video pacienta z oddělení. Na záznamu bylo možné rozpoznat pacienta i informace o jeho zdravotním stavu. Skupina měla přibližně 65 členů. Sestra tímto způsobem upozorňovala na problémy při předání pacienta, místo aby je řešila oficiální cestou.",
      consequence: "Disciplinární řízení dospělo k závěru, že došlo k porušení důvěrnosti informací o pacientovi. Sestra byla přeřazena z vedoucí pozice na pozici všeobecné sestry. Soud v květnu 2025 potvrdil, že toto rozhodnutí bylo zákonné.",
      takeaway: "Video pacienta neposílejte do skupinových chatů, ani když jsou v nich jen kolegové. Pro řešení události použijte schválený postup.",
      sourceName: "High Court of Trinidad and Tobago: Akela Mason Ward v Minister of Health, CV2023-03073 (6. 5. 2025)",
      sourceUrl: "https://webopac.ttlawcourts.org/LibraryJud/Judgments/HC/Reid/2023/cv_23_03073DD6May2025.pdf",
    },
  },
  4: {
    lead: "Umělá inteligence pomáhá ve zdravotnictví například při vyhodnocování snímků, plánování radioterapie nebo administrativě. Za správné použití AI a kontrolu jejích výsledků ale stále odpovídá člověk.",
    photo: {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační abstraktní grafika představující umělou inteligenci',
      credit: 'Unsplash',
      url: 'https://unsplash.com/s/photos/artificial-intelligence',
    },
    why: "AI může vytvářet chybné výsledky a při jejím používání může dojít k úniku nebo nevhodnému zpracování citlivých údajů. Rizikové je také používání nástrojů bez schválení PTC, kterému se říká shadow AI. Před zavedením nového nástroje se obraťte na pověřence pro ochranu osobních údajů. Je potřeba ověřit, jak nástroj pracuje s daty, kdo má k údajům přístup a zda splňuje příslušné bezpečnostní požadavky. U zdravotnických AI systémů mohou platit také zvláštní regulační pravidla. Nahrazení jména kódem ještě neznamená, že údaje nelze spojit s konkrétním pacientem.",
    examples: [
      {
        title: "Vložení zprávy do externí AI",
        situation: "Chcete zkrátit dopis pro pacienta a zvažujete, že jeho skutečné znění vložíte do veřejného AI nástroje.",
        action: "Skutečný dopis do neschváleného AI nástroje nevkládejte. Pokud chcete začít používat nový nástroj, požádejte pověřence pro ochranu osobních údajů o posouzení.",
        takeaway: "Úspora času není důvodem pro odesílání pacientských údajů do neschválených služeb.",
      },
      {
        title: "Jméno nahradíte kódem",
        situation: "Ze zprávy odstraníte jméno, ale zůstane v ní vzácná diagnóza, věk a termín léčby.",
        action: "Samotné odstranění jména nestačí. Pacienta může prozradit i kombinace dalších údajů. Pro tvorbu obecné šablony proto použijte fiktivní příklad.",
        takeaway: "I údaje bez jména mohou být stále osobními údaji.",
      },
      {
        title: "AI navrhne přesvědčivý odborný text",
        situation: "AI připraví text o léčbě a uvede v něm výsledek studie, který se vám nedaří ověřit.",
        action: "Tvrzení nepublikujte bez ověření. Vyhledejte původní studii a nechte odbornou správnost zkontrolovat příslušným pracovníkem. Chybný výstup řešte podle pravidel PTC.",
        takeaway: "AI může pomoci s přípravou textu, ale odborná kontrola je nezbytná.",
      },
    ],
    mistake: "„Když mám AI nástroj nainstalovaný, mohu do něj vložit i údaje pacientů.“ Nejdřív ověřte, zda PTC schválilo daný nástroj pro konkrétní účel a typ údajů. To platí také pro veřejné chatboty a překladače.",
    checklist: [
      "Je tento AI nástroj v PTC schválený pro danou práci?",
      "Bylo nové použití AI konzultováno s pověřencem pro ochranu osobních údajů?",
      "Nevkládám do AI nástroje údaje pacientů bez potřebného schválení?",
      "Je výstup zkontrolovaný a vím, jak nahlásit chybu?",
    ],
    realCase: {
      name: "Zaměstnanec nahrál údaje pacientů do neschválené AI",
      location: "Johns Hopkins Bayview Medical Center, Baltimore, USA",
      year: "září 2026",
      mistake: "Zaměstnanec nemocnice chtěl zpracovat údaje a nahrál tabulku s informacemi o pacientech do veřejně dostupného AI nástroje, který nemocnice pro tento účel neschválila. Soubor mohl obsahovat jména, čísla zdravotnické dokumentace a údaje o poskytované péči.",
      consequence: "Nemocnice zjistila událost při interní kontrole 21. září 2026 a informovala 3 182 pacientů o možném zpřístupnění jejich údajů. Požádala provozovatele nástroje o odstranění vložených informací a znovu proškolila zaměstnance.",
      takeaway: "Do veřejného nebo neschváleného AI nástroje nevkládejte skutečné údaje pacientů, ani když vám má pomoci s běžnou administrativou.",
      sourceName: "Healthcare IT News (HIMSS): At Johns Hopkins, shadow AI use linked to data breach (29. 10. 2026)",
      sourceUrl: "https://www.healthcareitnews.com/news/johns-hopkins-shadow-ai-use-linked-data-breach",
    },
  },
}

export const recapExtras = {
  heading: "GDPR v PTC: chráníme důvěru pacientů",
  intro: "S osobními údaji pracujeme každý den. Za jejich ochranu neodpovídá pouze pověřenec. Pravidla musí znát a dodržovat každý zaměstnanec PTC.",
  questions: [
    "Vím, kdo má informace dostat a proč je potřebuje?",
    "Vím, jak postupovat při žádosti pacienta, úřadu nebo při požadavku na kamerový záznam?",
    "Vím, komu ihned nahlásit podezření na únik údajů?",
    "Vím, s kým konzultovat nový AI nástroj nebo chybný výstup?",
  ],
  footer: "Vedoucí pracovníci mají zajistit, aby jejich týmy věděly, s jakými údaji pracují a jak řešit žádosti či bezpečnostní incidenty. Pokud si nejste jistí, jak postupovat, obraťte se na odpovědnou osobu.",
}
