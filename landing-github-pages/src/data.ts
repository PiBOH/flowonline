export const LINKS = {
  app: "https://piboh.github.io/flowonline",
  github: "https://github.com/PiBOH/flowonline",
  releases: "https://github.com/PiBOH/flowonline/releases",
  author: "https://github.com/PiBOH",
};

export type Feature = {
  icon: string;
  title: string;
  desc: string;
  accent: string;
};

export const FEATURES: Feature[] = [
  {
    icon: "flow",
    title: "Editor a diagrammi di flusso",
    desc: "Costruisci algoritmi blocco per blocco: inizio, input/output, processi, decisioni e cicli, collegati da frecce di flusso.",
    accent: "from-violet-500/20 to-indigo-500/10 text-violet-300",
  },
  {
    icon: "play",
    title: "Esecuzione passo-passo",
    desc: "Avvia il programma e segui quale blocco viene eseguito: il flusso si illumina in diretta mentre la logica procede.",
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-300",
  },
  {
    icon: "terminal",
    title: "Variabili e console live",
    desc: "Osserva i valori delle variabili aggiornarsi in tempo reale e leggi l'output nella console integrata.",
    accent: "from-sky-500/20 to-cyan-500/10 text-sky-300",
  },
  {
    icon: "code",
    title: "Generazione di codice",
    desc: "Converti automaticamente il diagramma in Python, JavaScript, Java, C++ e altri linguaggi con un clic.",
    accent: "from-amber-500/20 to-orange-500/10 text-amber-300",
  },
  {
    icon: "globe",
    title: "Tutto nel browser",
    desc: "Nessuna installazione richiesta: apri l'editor su qualsiasi dispositivo dotato di un browser moderno.",
    accent: "from-fuchsia-500/20 to-pink-500/10 text-fuchsia-300",
  },
  {
    icon: "heart",
    title: "Gratuito e open source",
    desc: "Codice aperto e liberamente utilizzabile per la scuola, l'università e lo studio autonomo.",
    accent: "from-rose-500/20 to-red-500/10 text-rose-300",
  },
];

export type Step = {
  n: string;
  title: string;
  desc: string;
  icon: string;
};

export const STEPS: Step[] = [
  {
    n: "01",
    title: "Disegna la logica",
    desc: "Aggiungi i blocchi e collegali per descrivere, in modo visivo, come deve funzionare il tuo algoritmo.",
    icon: "cursor",
  },
  {
    n: "02",
    title: "Esegui e debugga",
    desc: "Premi play: FlowOnline segue il flusso, mostra le variabili che cambiano e stampa l'output passo dopo passo.",
    icon: "play",
  },
  {
    n: "03",
    title: "Genera il codice",
    desc: "Esporta il diagramma nel linguaggio che preferisci e porta avanti il tuo progetto altrove.",
    icon: "code",
  },
];

export type Benefit = {
  icon: string;
  title: string;
  desc: string;
};

export const BENEFITS: Benefit[] = [
  {
    icon: "bolt",
    title: "Zero installazione",
    desc: "Apri e usa: niente setup, niente dipendenze, niente aggiornamenti da scaricare a mano.",
  },
  {
    icon: "device",
    title: "Multipiattaforma",
    desc: "Windows, macOS, Linux, ChromeOS e persino il tablet. Lì dove c'è un browser, c'è FlowOnline.",
  },
  {
    icon: "refresh",
    title: "Sempre aggiornato",
    desc: "Le novità e le correzioni arrivano automaticamente, senza dover reinstallare nulla.",
  },
  {
    icon: "share",
    title: "Facile da condividere",
    desc: "Invia il link o salva il tuo diagramma: perfetto per compiti, esercitazioni e lezioni.",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: "Cos'è FlowOnline?",
    a: "È una reimplementazione web di Flowgorithm: uno strumento che permette di creare, eseguire e debuggare programmi usando diagrammi di flusso invece di scrivere codice, pensato per imparare il pensiero algoritmico.",
  },
  {
    q: "Devo installare qualcosa?",
    a: "No. FlowOnline gira interamente nel browser: apri la pagina dell'editor e cominci subito a disegnare i tuoi algoritmi.",
  },
  {
    q: "È davvero gratuito?",
    a: "Sì. Il progetto è open source e gratuito, ideale per la scuola, l'università e lo studio individuale.",
  },
  {
    q: "In quali linguaggi genera il codice?",
    a: "Lo stesso diagramma può essere esportato in diversi linguaggi, tra cui Python, JavaScript, Java e C++, per facilitare il passaggio dalla logica visiva al codice reale.",
  },
  {
    q: "Posso usarlo in classe?",
    a: "Assolutamente. Essendo basato su browser e gratuito, è perfetto per laboratori, compiti a casa e dimostrazioni alla lavagna digitale.",
  },
];

export type CodeSample = {
  id: string;
  label: string;
  lang: string;
  code: string[];
};

export const LANGUAGES = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C",
  "C++",
  "C#",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
  "Go",
  "Rust",
  "Pascal",
  "Perl",
  "Lua",
  "Scala",
  "Dart",
  "Visual Basic",
  "SQL",
];

export const CODE_SAMPLES: CodeSample[] = [
  {
    id: "python",
    label: "Python",
    lang: "python",
    code: [
      "eta = int(input('Inserisci la tua eta: '))",
      "",
      "if eta >= 18:",
      "    print('Maggiorenne')",
      "else:",
      "    print('Minorenne')",
    ],
  },
  {
    id: "javascript",
    label: "JavaScript",
    lang: "javascript",
    code: [
      "const eta = Number(prompt('Inserisci la tua eta'));",
      "",
      "if (eta >= 18) {",
      "  console.log('Maggiorenne');",
      "} else {",
      "  console.log('Minorenne');",
      "}",
    ],
  },
  {
    id: "java",
    label: "Java",
    lang: "java",
    code: [
      "import java.util.Scanner;",
      "",
      "public class Maggiorenne {",
      "  public static void main(String[] a) {",
      "    Scanner in = new Scanner(System.in);",
      "    int eta = in.nextInt();",
      "    if (eta >= 18)",
      "      System.out.println('Maggiorenne');",
      "    else",
      "      System.out.println('Minorenne');",
      "  }",
      "}",
    ],
  },
  {
    id: "cpp",
    label: "C++",
    lang: "cpp",
    code: [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "  int eta;",
      "  cin >> eta;",
      "  if (eta >= 18)",
      "    cout << 'Maggiorenne';",
      "  else",
      "    cout << 'Minorenne';",
      "  return 0;",
      "}",
    ],
  },
];
