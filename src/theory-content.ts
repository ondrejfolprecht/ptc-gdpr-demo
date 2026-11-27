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
    lead: "Kamerové záznamy mohou pomoci při řešení bezpečnostních událostí. Protože na nich lze poznat pacienty, návštěvníky i zaměstnance, není možné do nich nahlížet bez oprávnění.",
    photo: {
      src: 'https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?auto=format&fit=crop&w=1200&q=82',
      alt: 'Ilustrační fotografie bezpečnostní kamery na stropě',
      credit: 'Franck V. / Unsplash',
      url: 'https://unsplash.com/photos/a-security-camera-mounted-to-the-ceiling-of-a-building-ujSsIk5iZmA',
    },
    why: "Pokud potřebujete nahlédnout do kamerového záznamu nebo získat jeho kopii, vyplňte žádost na SharePointu (SHP). U externích žadatelů, například Policie ČR, vyplňuje formulář technický úsek. Vydání záznamu schvalují jednatelé. Informace o kamerovém systému smí poskytovat pouze pověřenec nebo osoba pověřená jednateli.",
    examples: [
      {
        title: "Kolega chce jen nahlédnout",
        situation: "Kolega chce zjistit, kdo se pohyboval po chodbě. Tvrdí, že se potřebuje jen podívat a nic si nebude ukládat.",
        action: "Záznam mu bez schválení neukazujte. I pro pouhé nahlédnutí je potřeba vyplnit formulář žádosti na SHP a ověřit oprávnění.",
        takeaway: "Formulář je nutný i tehdy, když se záznam nekopíruje.",
      },
      {
        title: "Policie žádá o kamerový záznam",
        situation: "Policista požaduje kopii kamerového záznamu a chce si ji rovnou odnést na externím disku.",
        action: "Záznam sami nevydávejte. Formulář externí žádosti vyplňuje technický úsek a kopii lze předat až po schválení jednateli.",
        takeaway: "I při žádosti policie je nutné dodržet schvalovací postup.",
      },
      {
        title: "Dotaz na fungování kamer",
        situation: "Návštěvník se ptá, kde se kamerové záznamy ukládají a kdo si je může prohlížet.",
        action: "Odpověď přenechte pověřenci nebo osobě pověřené jednateli. Tyto informace sami neposkytujte.",
        takeaway: "O fungování kamerového systému informují pouze pověřené osoby.",
      },
    ],
    mistake: "„Když se na záznam jen podívám, žádost nepotřebuji.“ Formulář na SHP je nutné vyplnit i před pouhým nahlédnutím.",
    checklist: [
      "Je na SHP vyplněný formulář žádosti?",
      "Je požadavek na nahlédnutí nebo na kopii záznamu? Formulář je nutný v obou případech.",
      "Pokud žádá externí subjekt, řeší žádost technický úsek?",
      "Schválili jednatelé vydání záznamu?",
    ],
  },
  4: {
    lead: "Umělá inteligence pomáhá ve zdravotnictví například při vyhodnocování snímků, plánování radioterapie nebo administrativě. Za správné použití AI a kontrolu jejích výsledků ale stále odpovídá člověk.",
    photo: {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační abstraktní grafika představující umělou inteligenci',
      credit: 'Unsplash',
      url: 'https://unsplash.com/s/photos/artificial-intelligence',
    },
    why: "AI může vytvářet chybné výsledky a při jejím používání může dojít k úniku nebo nevhodnému zpracování citlivých údajů. Rizikové je také používání nástrojů bez schválení PTC, kterému se říká shadow AI. Před zavedením nového nástroje se obraťte na DPO nebo metodika AI. Je potřeba ověřit, jak nástroj pracuje s daty, kdo má k údajům přístup a zda splňuje příslušné bezpečnostní požadavky. U zdravotnických AI systémů mohou platit také zvláštní regulační pravidla. Nahrazení jména kódem ještě neznamená, že údaje nelze spojit s konkrétním pacientem.",
    examples: [
      {
        title: "Vložení zprávy do externí AI",
        situation: "Chcete zkrátit dopis pro pacienta a zvažujete, že jeho skutečné znění vložíte do veřejného AI nástroje.",
        action: "Skutečný dopis do neschváleného AI nástroje nevkládejte. Pokud chcete začít používat nový nástroj, požádejte DPO nebo metodika AI o posouzení.",
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
      "Pokud jde o nové použití AI, konzultoval jsem ho s DPO nebo metodikem AI?",
      "Nevkládám do AI nástroje údaje pacientů bez potřebného schválení?",
      "Zkontroloval jsem výstup a vím, jak nahlásit chybu?",
    ],
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
  footer: "Vedoucí pracovníci mají zajistit, aby jejich týmy věděly, s jakými údaji pracují a jak řešit žádosti či bezpečnostní incidenty. Pokud si nejste správným postupem jistí, obraťte se na odpovědnou osobu.",
}
