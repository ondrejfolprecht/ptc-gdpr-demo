/**
 * Rozšířené vzdělávací bloky pro GDPR demo.
 * Všechny příklady jsou modelové; před interním nasazením musí být
 * interní kanály a odpovědné role potvrzené PTC / pověřencem.
 */
export type PracticeExample = {
  title: string
  situation: string
  action: string
  takeaway: string
}
export type TheoryExtra = {
  lead: string
  photo: {
    src: string
    alt: string
    credit: string
    url: string
  }
  why: string
  examples: PracticeExample[]
  mistake: string
  checklist: string[]
  note?: string
}
export const theoryExtras: Record<number, TheoryExtra> = {
  1: {
    lead: 'Údaje o pacientovi se často předávají při běžné administrativě. Největší riziko nemusí být složitý útok, ale jedna přehlédnutá adresa, nesprávná příloha nebo zbytečně dlouhá historie e-mailu.',
    photo: {
      src: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační fotografie rukou při psaní na počítačové klávesnici ve zdravotnickém prostředí',
      credit: 'Vitaly Gariev / Unsplash',
      url: 'https://unsplash.com/photos/doctor-typing-on-keyboard-with-stethoscope-nearby-FQQoUPVb_1c',
    },
    why: 'Jméno, kontakt a datum narození jsou osobní údaje. Diagnóza, léčebný plán či lékařská zpráva obsahují informace o zdraví, kterým GDPR přiznává zvláštní ochranu. Při odesílání proto nestačí jen ověřit, že e-mail „funguje“: potřebujete vědět, kdo má údaje dostat, proč a v jakém rozsahu.',
    examples: [
      {
        title: 'Našeptávač doplnil jiného příjemce',
        situation: 'Při odesílání výsledku vyšetření se objeví dvě podobná jména. Adresa v poli Komu vypadá na první pohled správně.',
        action: 'Před odesláním otevřete celou adresu, ověřte skutečného příjemce i jeho oprávnění a použijte schválený způsob předání.',
        takeaway: 'Podobné jméno není ověřená totožnost.',
      },
      {
        title: 'Správný e-mail, nesprávná příloha',
        situation: 'K administrativnímu e-mailu připojíte soubor ze stejné složky, ale po otevření zjistíte, že obsahuje jiného pacienta.',
        action: 'Přílohu odeberte a zkontrolujte obsah správného souboru před odesláním. Pokud již zpráva odešla, bez odkladu ohlaste podezření na incident.',
        takeaway: 'Kontrolujte obsah přílohy, nejen její název.',
      },
      {
        title: 'Přeposílání celého vlákna',
        situation: 'Kolegovi chcete poslat jednu organizační informaci, ale předchozí komunikace obsahuje diagnózu a osobní údaje pacienta.',
        action: 'Vytvořte novou stručnou zprávu nebo odstraňte nadbytečné části; sdílejte pouze informace, které příjemce skutečně potřebuje.',
        takeaway: 'I historie zpráv může obsahovat chráněné údaje.',
      },
    ],
    mistake: '„Posílám to kolegovi, takže je to automaticky v pořádku.“ Ani interní příjemce nemá automaticky oprávnění vidět všechny údaje. Rozhoduje pracovní potřeba, účel a schválený kanál.',
    checklist: [
      'Komu zpráva skutečně odejde a má na údaje oprávnění?',
      'Obsahuje předmět a tělo jen nezbytné informace?',
      'Otevřel/a jsem správnou přílohu a ověřil/a její obsah?',
      'Používám pro tento typ údajů schválený způsob předání?',
    ],
    note: 'Pokud dojde k chybnému odeslání, zaměstnanec nečeká na reakci adresáta. Podezření ihned hlásí interně podle schváleného postupu. Posouzení případného oznámení dozorovému úřadu řeší odpovědný tým.',
  },
  2: {
    lead: 'Žádost o zdravotní údaje může přijít telefonicky, e-mailem i osobně. Je důležité oddělit ochotu pomoci od samotného oprávnění údaje předat.',
    photo: {
      src: 'https://images.unsplash.com/photo-1758691462848-31a39258dbd8?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační fotografie zdravotnice telefonující při práci na notebooku',
      credit: 'Vitaly Gariev / Unsplash',
      url: 'https://unsplash.com/photos/doctor-on-phone-working-on-laptop-in-office-egCFrNJ6Djw',
    },
    why: 'Pacientské informace nepředáváme jen podle toho, jak důvěryhodně žadatel působí. Před sdělením se ověřuje totožnost, oprávnění, právní důvod a přiměřený rozsah. Některé žádosti, například o výmaz nebo kopii zdravotnické dokumentace, musejí být formálně posouzené.',
    examples: [
      {
        title: 'Volá údajná manželka pacienta',
        situation: 'Volající zná jméno, datum narození a ptá se na výsledek vyšetření nebo termín léčby.',
        action: 'Výsledek ani termín zatím nesdělujte. Použijte schválený postup pro ověření totožnosti a oprávnění k informacím.',
        takeaway: 'Znalost několika údajů sama o sobě neopravňuje k přístupu.',
      },
      {
        title: 'E-mail označený jako žádost policie',
        situation: 'Z neznámé adresy dorazí požadavek na kompletní lékařskou zprávu s krátkou lhůtou na odpověď.',
        action: 'Neodpovídejte zasláním dokumentu na uvedenou adresu. Požadavek předejte pověřenému pracovníkovi k ověření oprávnění a právního podkladu.',
        takeaway: 'Institucionální podpis v e-mailu není důkazem oprávnění.',
      },
      {
        title: 'Pacient požaduje úplný výmaz',
        situation: 'Pacient žádá odstranění celé dokumentace, protože již léčbu ukončil.',
        action: 'Žádost zaevidujte a předejte podle interního postupu. O případných výjimkách z práva na výmaz a povinnostech uchování rozhoduje odpovědná osoba.',
        takeaway: 'Právo na výmaz není u zdravotnické dokumentace neomezené.',
      },
    ],
    mistake: '„Když je žadatel naléhavý nebo zná podrobnosti, musím mu vyhovět hned.“ Naléhavost nenahrazuje ověření. Zdvořile vysvětlete, že požadavek projde určeným postupem.',
    checklist: [
      'Vím, kdo žádá a jakým způsobem se ověřuje jeho totožnost?',
      'Je jasné, z čeho plyne oprávnění k údajům?',
      'Stačí menší rozsah informací, než žadatel požaduje?',
      'Patří rozhodnutí do mé kompetence, nebo je musím předat?',
    ],
    note: 'Konkrétní role, lhůty a schválené kanály musí doplnit a potvrdit odpovědné osoby v PTC.',
  },
  3: {
    lead: 'Kamerový záznam může pomoci vysvětlit incident, ale obsahuje podobu a chování identifikovatelných osob. Pravidla přístupu se proto vztahují i na pouhé nahlédnutí.',
    photo: {
      src: 'https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?auto=format&fit=crop&w=1200&q=82',
      alt: 'Ilustrační fotografie bezpečnostní kamery na stropě',
      credit: 'Franck V. / Unsplash',
      url: 'https://unsplash.com/photos/a-security-camera-mounted-to-the-ceiling-of-a-building-ujSsIk5iZmA',
    },
    why: 'Záznam může zachycovat pacienty, návštěvníky i zaměstnance. Přístup musí mít konkrétní účel a odpovídající oprávnění. Riziko nevzniká až odesláním kopie: již zobrazení záznamu neoprávněné osobě představuje zpřístupnění údajů.',
    examples: [
      {
        title: 'Kolega chce rychle zkontrolovat chodbu',
        situation: 'Kolega chce „jen na minutu“ otevřít záznam, aby zjistil, kdo odešel z oddělení.',
        action: 'Záznam neotevírejte na základě neformální prosby. Požadavek předejte podle interního postupu, aby se ověřil účel a oprávnění.',
        takeaway: 'I krátký náhled je přístup k osobním údajům.',
      },
      {
        title: 'Návštěvník žádá kopii po incidentu',
        situation: 'Návštěvník chce kamerový záznam, na kterém je zachycen on i další lidé.',
        action: 'Sami video neposílejte ani nevyřezávejte. Žádost předejte odpovědnému pracovníkovi k posouzení včetně práv ostatních osob.',
        takeaway: 'Poskytnutí kopie může ovlivnit soukromí dalších lidí.',
      },
      {
        title: 'Fotografie monitoru mobilem',
        situation: 'Někdo navrhne pořídit snímek z kamery mobilem a rychle jej přeposlat týmu.',
        action: 'Nezřizujte neoficiální kopii. Při bezpečnostní události postupujte přes stanovený kanál a odpovědné osoby.',
        takeaway: 'Fotka monitoru je také další kopie osobních údajů.',
      },
    ],
    mistake: '„Když si nikdo záznam nestáhne, nic se nestalo.“ Rozhoduje i samotné zhlédnutí, účel přístupu a případné další zpřístupnění.',
    checklist: [
      'Je pro nahlédnutí jasný a oprávněný účel?',
      'Jsem osobou, která smí ke konkrétnímu záznamu přistupovat?',
      'Nehrozí zbytečné zpřístupnění dalších osob?',
      'Předal/a jsem žádost schváleným postupem?',
    ],
  },
  4: {
    lead: 'AI může ušetřit čas při psaní, ale vložené zadání může obsahovat skutečné informace o pacientovi. Bezpečné použití záleží na schválení nástroje, účelu a typu dat.',
    photo: {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=82',
      alt: 'Ilustrační abstraktní grafika představující umělou inteligenci',
      credit: 'Unsplash',
      url: 'https://unsplash.com/s/photos/artificial-intelligence',
    },
    why: 'Použití neschváleného nástroje, tzv. shadow AI, může vést k nechtěnému předání údajů externí službě. Pseudonymizace (například nahrazení jména kódem) nemusí stačit: pacienta lze někdy poznat podle kombinace diagnózy, věku, data či okolností. Výstupy AI navíc mohou obsahovat chyby.',
    examples: [
      {
        title: 'Marketingový text z reálného příběhu',
        situation: 'Chcete připravit příspěvek o pacientovi a zrychlit si práci vložením jeho skutečného e-mailu do veřejného AI chatu.',
        action: 'Do neschváleného nástroje skutečný e-mail nevkládejte. Použijte fiktivní nebo řádně schválený podklad a dodržte proces pro použití pacientského příběhu.',
        takeaway: 'Souhlas s publikací příběhu není automatické schválení libovolného AI nástroje.',
      },
      {
        title: 'Odstranili jste jméno, ale ne souvislosti',
        situation: 'V zadání zůstane vzácná diagnóza, přibližný věk, datum návštěvy a popis unikátní léčby.',
        action: 'Předpokládejte, že kombinace těchto údajů může být stále identifikující. Pro obecnou šablonu použijte zcela fiktivní situaci.',
        takeaway: 'Odstranění jména není totéž co anonymizace.',
      },
      {
        title: 'Obecná šablona pozvánky',
        situation: 'Potřebujete návrh obecného textu pro informační akci bez informací o konkrétních pacientech.',
        action: 'Použijte schválený nástroj, zadejte pouze obecný nebo fiktivní obsah a před použitím vše zkontrolujte.',
        takeaway: 'AI pomáhá s návrhem, odpovědnost za výsledek má člověk.',
      },
    ],
    mistake: '„Když AI vytvoří profesionálně vypadající text, musí být správný.“ AI může vymyslet i přesvědčivé, ale nepravdivé informace. Zvlášť zdravotnická tvrzení vždy ověřujte.',
    checklist: [
      'Je tento AI nástroj schválený pro daný účel?',
      'Nevkládám skutečné nebo zpětně identifikovatelné údaje pacientů?',
      'Stačí k úkolu obecný či fiktivní příklad?',
      'Zkontroloval/a jsem odbornou a věcnou správnost výstupu?',
    ],
    note: 'Schválení nástroje pro jeden typ práce neznamená automaticky povolení zpracování zdravotních údajů. Konkrétní pravidla pro PTC musí potvrdit odpovědné osoby.',
  },
}

export const recapExtras = {
  heading: 'Co si odnést do každodenní práce',
  intro: 'Ochrana údajů není samostatná administrativní povinnost. Uplatňuje se při každém e-mailu, telefonátu, nahlédnutí do záznamu i používání digitálních nástrojů.',
  questions: [
    'Předal/a bych tyto informace také člověku, který k nim nemá pracovní důvod?',
    'Vím, kdo schvaluje předání údajů a kam se obrátit při nejistotě?',
    'Umím rozpoznat podezření na incident a nahlásit ho bez prodlení?',
  ],
  footer: 'V pochybnostech nic neposílejte „pro jistotu“ mimo schválené postupy. Ověřte si správný další krok u odpovědné osoby.',
}
