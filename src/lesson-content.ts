export const lessons = {
  1: {
    title: 'E-mail a osobní údaje',
    learn: 'Naučíte se, co zkontrolovat před odesláním e-mailu s údaji pacienta a co udělat, když zpráva odejde nesprávnému příjemci.',
    rules: [
      ['Co chráníme', 'Jméno a e-mailová adresa jsou osobní údaje. Diagnóza nebo lékařská zpráva obsahují údaje o zdraví, které mají zvláštní ochranu.'],
      ['Co zkontrolovat před odesláním', 'Ověřte adresu a oprávnění příjemce. Zkontrolujte, že předmět vystihuje účel zprávy a zbytečně neprozrazuje údaje. Otevřete přílohu a ověřte její obsah i schválený způsob předání.'],
      ['Jak reagovat na chybu', 'Pokud zpráva odejde nesprávné osobě, nahlaste podezření na incident ihned schváleným interním kanálem. S hlášením nečekejte na odpověď příjemce.'],
    ],
    example: 'Při přeposílání zprávy vám našeptávač nabídne dva podobné kontakty. Před odesláním si otevřete celou e-mailovou adresu a ověřte ji podle schváleného postupu.',
    task: 'Čekají vás dva kroky. Nejprve zkontrolujete koncept e-mailu. Potom rozhodnete, jak postupovat, pokud už zpráva odešla na nesprávnou adresu.',
  },
  2: {
    title: 'Žádosti o osobní údaje',
    learn: 'Rozlišíte, kdy je potřeba ověřit oprávnění žadatele a jak předat žádost o výmaz k vyřízení.',
    rules: [
      ['Ověřte, kdo žádá a na co má nárok', 'To, že volající zná jméno nebo datum narození pacienta, samo o sobě neprokazuje jeho oprávnění. Do ověření údaje nesdělujte.'],
      ['Formální žádost předejte správným postupem', 'U žádosti policie nebo jiného externího subjektu se ověřuje totožnost, účel, právní důvod a rozsah. Předání zajišťuje oprávněná osoba schváleným kanálem.'],
      ['Žádost o výmaz předejte k posouzení', 'Právo na výmaz má výjimky. U zdravotnické dokumentace může platit zákonná povinnost uchování. Zaměstnanec předá žádost odpovědné osobě.'],
    ],
    example: 'Pokud se příbuzný telefonicky ptá na zdravotní stav pacienta, použijte interní postup pro ověření totožnosti a oprávnění, než sdělíte jakýkoli údaj.',
    task: 'Projděte třemi krátkými situacemi. V každé vyberte, jak byste postupovali, a přečtěte si zpětnou vazbu.',
  },
  3: {
    title: 'Kamerové záznamy',
    learn: 'Zjistíte, jak reagovat, když někdo požádá o nahlédnutí do kamerového záznamu nebo o jeho kopii.',
    rules: [
      ['I pouhé zhlédnutí je přístup k údajům', 'Pokud jsou lidé na záznamu identifikovatelní, jejich záznam obsahuje osobní údaje. Pravidla přístupu platí i pro krátké nahlédnutí.'],
      ['Předání má stanovený postup', 'Oprávněná osoba prověří důvod a rozsah přístupu. Požadavek na náhled i vydání kopie předejte schváleným interním postupem.'],
    ],
    example: 'Pokud kolega potřebuje záznam kvůli události na chodbě, předejte jeho požadavek k posouzení, i když si záznam nechce uložit.',
    task: 'Přečtěte si, o co vás kolega žádá, a vyberte jeden postup.',
  },
  4: {
    title: 'Bezpečná práce s AI',
    learn: 'Rozpoznáte, kdy je zadání pro AI bezpečné a jak vytvořit obecnou šablonu bez údajů skutečného pacienta.',
    rules: [
      ['Ověřte nástroj i účel', 'Shadow AI znamená používání nástrojů mimo schválený rámec organizace. Pro práci používejte nástroj schválený pro daný účel a typ údajů.'],
      ['Samotné odstranění jména nestačí', 'Člověka může prozradit i kombinace diagnózy, termínu a dalších údajů. Nahrazení jména kódem může stále ponechat údaje osobními.'],
      ['Výstup ověřte před použitím', 'AI může vytvořit přesvědčivý, ale chybný text. U obecného návrhu stačí fiktivní příklad. Za kontrolu výstupu odpovídá člověk.'],
    ],
    example: 'Pro návrh pozvánky si vymyslete modelové zadání a použijte schválený nástroj. Hotový návrh před použitím zkontrolujte.',
    task: 'Projděte krátký animovaný příběh nebo jeho textovou verzi. V prostředním kroku rozhodnete, jak připravit šablonu pro pacienta.',
  },
  5: {
    title: 'Shrnutí před testem',
    task: 'Vyzkoušejte si poslední situaci nanečisto. Po odpovědi můžete přejít k závěrečnému testu.',
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
