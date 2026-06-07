/* ============================================
   FLOWGORITHM CLONE - SCRIPT.JS
   Logica completa: editor, interprete, console, variabili
   ============================================ */

// ============ INTERNATIONALIZATION ============
const i18n = {
    it: {
        'menu.file': 'File', 'menu.edit': 'Modifica', 'menu.program': 'Programma',
        'menu.tools': 'Strumenti', 'menu.help': 'Aiuto',
        'menu.new': 'Nuovo', 'menu.open': 'Apri...', 'menu.save': 'Salva',
        'menu.saveas': 'Salva con nome...', 'menu.print': 'Stampa...', 'menu.exit': 'Esci',
        'menu.zoomin': 'Zoom In', 'menu.zoomout': 'Zoom Out', 'menu.style': 'Stile flowchart...',
        'menu.run': 'Esegui', 'menu.step': 'Passo a passo', 'menu.pause': 'Pausa', 'menu.stop': 'Stop',
        'menu.speed': 'Velocità esecuzione...', 'menu.breakpoints': 'Rimuovi breakpoint',
        'menu.functions': 'Gestione funzioni...', 'menu.attributes': 'Attributi programma...',
        'menu.copyimg': 'Copia immagine', 'menu.exportimg': 'Esporta immagine...',
        'menu.exportvec': 'Esporta vettoriale...', 'menu.language': 'Cambia lingua...',
        'menu.console': 'Finestra console', 'menu.sourceview': 'Visualizzatore codice sorgente',
        'menu.variables': 'Variabili', 'menu.layout': 'Disposizione finestre',
        'menu.about': 'Informazioni su Flowgorithm',
        'ctx.header': 'Aggiungi forma', 'ctx.assign': 'Assegna', 'ctx.declare': 'Dichiara',
        'ctx.input': 'Input', 'ctx.output': 'Output', 'ctx.if': 'Se (If)', 'ctx.while': 'Mentre (While)',
        'ctx.do': 'Do (Do While)', 'ctx.for': 'Per (For)', 'ctx.call': 'Chiamata',
        'ctx.comment': 'Commento', 'ctx.breakpoint': 'Breakpoint', 'ctx.paste': 'Incolla',
        'window.console': 'Console', 'window.variables': 'Variabili',
        'window.source': 'Visualizzatore Codice Sorgente',
        'window.clear': 'Pulisci', 'window.submit': 'Invio',
        'window.inputPlaceholder': 'Inserisci un valore...',
        'var.name': 'Nome', 'var.type': 'Tipo', 'var.value': 'Valore',
        'var.empty': 'Nessuna variabile',
        'status.zoom': 'Zoom', 'status.shapes': 'Forme',
        'flow.start': 'Inizio', 'flow.end': 'Fine', 'flow.true': 'Vero', 'flow.false': 'Falso',
        'flow.while': 'Mentre', 'flow.do': 'Esegui-Mentre', 'flow.for': 'Per', 'flow.to': 'a',
        'dlg.assign': 'Assegna', 'dlg.declare': 'Dichiara', 'dlg.input': 'Input',
        'dlg.output': 'Output', 'dlg.if': 'Se (If)', 'dlg.while': 'Mentre (While)',
        'dlg.do': 'Esegui-Mentre (Do-While)', 'dlg.for': 'Per (For)',
        'dlg.call': 'Chiamata', 'dlg.comment': 'Commento', 'dlg.breakpoint': 'Breakpoint',
        'dlg.ok': 'OK', 'dlg.cancel': 'Annulla',
        'msg.ready': 'Pronto', 'msg.started': '▶ Esecuzione avviata...',
        'msg.terminated': '✓ Programma terminato.', 'msg.stopped': '■ Esecuzione interrotta.',
        'msg.error': '✗ Errore: ', 'msg.breakpoint': 'Breakpoint raggiunto. Premi Esegui per continuare.',
        'msg.infinite': 'Loop infinito rilevato (>100000 iterazioni)',
        'msg.undeclared': 'Variabile non dichiarata: ',
        'msg.badexpr': 'Espressione non valida: ',
        'msg.newConfirm': 'Creare un nuovo programma? Le modifiche non salvate andranno perse.',
        'msg.invalidFile': 'File non valido o corrotto',
        'msg.speed': 'Velocità', 'msg.lang': 'Lingua corrente',
        'msg.delete': 'Eliminare questa forma?',
        'msg.about': 'Flowgorithm Online\nVersione BETA 1.0.0k\n\nReplica web dell\'interfaccia di Flowgorithm\nAutore: PiBOH\nhttps://piboh.github.io\n\nLicenza: MIT\n\n© 2024 PiBOH',
        'msg.colorscheme': 'Schema colori: feature dimostrativa',
        'msg.functions': 'Gestione funzioni: feature dimostrativa',
        'fld.variable': 'Variabile:', 'fld.expression': 'Espressione:',
        'fld.name': 'Nome variabile:', 'fld.type': 'Tipo:', 'fld.array': 'Array',
        'fld.size': 'Dimensione:', 'fld.condition': 'Condizione:',
        'fld.from': 'Da:', 'fld.to': 'A:', 'fld.step': 'Passo:', 'fld.direction': 'Direzione:',
        'fld.up': 'Crescente (++)', 'fld.down': 'Decrescente (--)',
        'fld.text': 'Testo del commento:', 'fld.newline': 'Vai a capo',
        'fld.inputvar': 'Variabile da leggere:', 'fld.outputexp': 'Espressione da stampare:',
        'fld.call': 'Chiamata di funzione:', 'fld.bpcond': 'Condizione (opzionale, ferma se vera):',
        'fld.exprHelp': 'Esempio: a + b, x * 2, "Ciao " & nome',
        'fld.outHelp': 'Per stringhe usa le virgolette. Concatena con & o ,',
        'fld.condHelp': 'Operatori: ==, !=, <, >, <=, >=, AND, OR, NOT',
        'fld.dirUp': 'Crescente (++)', 'fld.dirDown': 'Decrescente (--)',
        'langName': 'Italiano'
    },
    en: {
        'menu.file': 'File', 'menu.edit': 'Edit', 'menu.program': 'Program',
        'menu.tools': 'Tools', 'menu.help': 'Help',
        'menu.new': 'New', 'menu.open': 'Open...', 'menu.save': 'Save',
        'menu.saveas': 'Save As...', 'menu.print': 'Print...', 'menu.exit': 'Exit',
        'menu.zoomin': 'Zoom In', 'menu.zoomout': 'Zoom Out', 'menu.style': 'Flowchart Style...',
        'menu.run': 'Run', 'menu.step': 'Step', 'menu.pause': 'Pause', 'menu.stop': 'Stop',
        'menu.speed': 'Run Speed...', 'menu.breakpoints': 'Remove Breakpoints',
        'menu.functions': 'Function Manager...', 'menu.attributes': 'Program Attributes...',
        'menu.copyimg': 'Copy Image', 'menu.exportimg': 'Export Image...',
        'menu.exportvec': 'Export Vector...', 'menu.language': 'Change Language...',
        'menu.console': 'Console Window', 'menu.sourceview': 'Source Code Viewer',
        'menu.variables': 'Variables', 'menu.layout': 'Layout Windows',
        'menu.about': 'About Flowgorithm',
        'ctx.header': 'Add shape', 'ctx.assign': 'Assign', 'ctx.declare': 'Declare',
        'ctx.input': 'Input', 'ctx.output': 'Output', 'ctx.if': 'If', 'ctx.while': 'While',
        'ctx.do': 'Do', 'ctx.for': 'For', 'ctx.call': 'Call',
        'ctx.comment': 'Comment', 'ctx.breakpoint': 'Breakpoint', 'ctx.paste': 'Paste',
        'window.console': 'Console', 'window.variables': 'Variables',
        'window.source': 'Source Code Viewer',
        'window.clear': 'Clear', 'window.submit': 'Submit',
        'window.inputPlaceholder': 'Enter a value...',
        'var.name': 'Name', 'var.type': 'Type', 'var.value': 'Value',
        'var.empty': 'No variables',
        'status.zoom': 'Zoom', 'status.shapes': 'Shapes',
        'flow.start': 'Start', 'flow.end': 'End', 'flow.true': 'True', 'flow.false': 'False',
        'flow.while': 'While', 'flow.do': 'Do-While', 'flow.for': 'For', 'flow.to': 'to',
        'dlg.assign': 'Assign', 'dlg.declare': 'Declare', 'dlg.input': 'Input',
        'dlg.output': 'Output', 'dlg.if': 'If', 'dlg.while': 'While',
        'dlg.do': 'Do-While', 'dlg.for': 'For',
        'dlg.call': 'Call', 'dlg.comment': 'Comment', 'dlg.breakpoint': 'Breakpoint',
        'dlg.ok': 'OK', 'dlg.cancel': 'Cancel',
        'msg.ready': 'Ready', 'msg.started': '▶ Execution started...',
        'msg.terminated': '✓ Program terminated.', 'msg.stopped': '■ Execution stopped.',
        'msg.error': '✗ Error: ', 'msg.breakpoint': 'Breakpoint reached. Press Run to continue.',
        'msg.infinite': 'Infinite loop detected (>100000 iterations)',
        'msg.undeclared': 'Undeclared variable: ',
        'msg.badexpr': 'Invalid expression: ',
        'msg.newConfirm': 'Create a new program? Unsaved changes will be lost.',
        'msg.invalidFile': 'Invalid file',
        'msg.speed': 'Speed', 'msg.lang': 'Current language',
        'msg.delete': 'Delete this shape?',
        'msg.about': 'Flowgorithm Online\nVersion BETA 1.0.0k\n\nWeb replica of Flowgorithm\nAuthor: PiBOH\nhttps://piboh.github.io\n\nLicense: MIT\n\n© 2024 PiBOH',
        'msg.colorscheme': 'Color scheme: demo feature',
        'msg.functions': 'Function manager: demo feature',
        'fld.variable': 'Variable:', 'fld.expression': 'Expression:',
        'fld.name': 'Variable name:', 'fld.type': 'Type:', 'fld.array': 'Array',
        'fld.size': 'Size:', 'fld.condition': 'Condition:',
        'fld.from': 'From:', 'fld.to': 'To:', 'fld.step': 'Step:', 'fld.direction': 'Direction:',
        'fld.up': 'Ascending (++)', 'fld.down': 'Descending (--)',
        'fld.text': 'Comment text:', 'fld.newline': 'New line',
        'fld.inputvar': 'Variable to read:', 'fld.outputexp': 'Expression to print:',
        'fld.call': 'Function call:', 'fld.bpcond': 'Condition (optional, stops if true):',
        'fld.exprHelp': 'Example: a + b, x * 2, "Hello " & name',
        'fld.outHelp': 'Use quotes for strings. Concatenate with & or ,',
        'fld.condHelp': 'Operators: ==, !=, <, >, <=, >=, AND, OR, NOT',
        'fld.dirUp': 'Ascending (++)', 'fld.dirDown': 'Descending (--)',
        'langName': 'English'
    },
    es: {
        'menu.file': 'Archivo', 'menu.edit': 'Editar', 'menu.program': 'Programa',
        'menu.tools': 'Herramientas', 'menu.help': 'Ayuda',
        'menu.new': 'Nuevo', 'menu.open': 'Abrir...', 'menu.save': 'Guardar',
        'menu.saveas': 'Guardar como...', 'menu.print': 'Imprimir...', 'menu.exit': 'Salir',
        'menu.zoomin': 'Acercar', 'menu.zoomout': 'Alejar', 'menu.style': 'Estilo del diagrama...',
        'menu.run': 'Ejecutar', 'menu.step': 'Paso a paso', 'menu.pause': 'Pausa', 'menu.stop': 'Detener',
        'menu.speed': 'Velocidad de ejecución...', 'menu.breakpoints': 'Eliminar puntos de interrupción',
        'menu.functions': 'Gestor de funciones...', 'menu.attributes': 'Atributos del programa...',
        'menu.copyimg': 'Copiar imagen', 'menu.exportimg': 'Exportar imagen...',
        'menu.exportvec': 'Exportar vectorial...', 'menu.language': 'Cambiar idioma...',
        'menu.console': 'Ventana de consola', 'menu.sourceview': 'Visor de código fuente',
        'menu.variables': 'Variables', 'menu.layout': 'Disposición de ventanas',
        'menu.about': 'Acerca de Flowgorithm',
        'ctx.header': 'Agregar forma', 'ctx.assign': 'Asignar', 'ctx.declare': 'Declarar',
        'ctx.input': 'Entrada', 'ctx.output': 'Salida', 'ctx.if': 'Si (If)', 'ctx.while': 'Mientras (While)',
        'ctx.do': 'Hacer (Do While)', 'ctx.for': 'Para (For)', 'ctx.call': 'Llamada',
        'ctx.comment': 'Comentario', 'ctx.breakpoint': 'Punto de interrupción', 'ctx.paste': 'Pegar',
        'window.console': 'Consola', 'window.variables': 'Variables',
        'window.source': 'Visor de Código Fuente',
        'window.clear': 'Limpiar', 'window.submit': 'Enviar',
        'window.inputPlaceholder': 'Ingrese un valor...',
        'var.name': 'Nombre', 'var.type': 'Tipo', 'var.value': 'Valor',
        'var.empty': 'Sin variables',
        'status.zoom': 'Zoom', 'status.shapes': 'Formas',
        'flow.start': 'Inicio', 'flow.end': 'Fin', 'flow.true': 'Verdadero', 'flow.false': 'Falso',
        'flow.while': 'Mientras', 'flow.do': 'Hacer-Mientras', 'flow.for': 'Para', 'flow.to': 'hasta',
        'dlg.assign': 'Asignar', 'dlg.declare': 'Declarar', 'dlg.input': 'Entrada',
        'dlg.output': 'Salida', 'dlg.if': 'Si (If)', 'dlg.while': 'Mientras (While)',
        'dlg.do': 'Hacer-Mientras (Do-While)', 'dlg.for': 'Para (For)',
        'dlg.call': 'Llamada', 'dlg.comment': 'Comentario', 'dlg.breakpoint': 'Punto de interrupción',
        'dlg.ok': 'Aceptar', 'dlg.cancel': 'Cancelar',
        'msg.ready': 'Listo', 'msg.started': '▶ Ejecución iniciada...',
        'msg.terminated': '✓ Programa terminado.', 'msg.stopped': '■ Ejecución detenida.',
        'msg.error': '✗ Error: ', 'msg.breakpoint': 'Punto de interrupción alcanzado. Presiona Ejecutar para continuar.',
        'msg.infinite': 'Bucle infinito detectado (>100000 iteraciones)',
        'msg.undeclared': 'Variable no declarada: ',
        'msg.badexpr': 'Expresión inválida: ',
        'msg.newConfirm': '¿Crear un nuevo programa? Los cambios no guardados se perderán.',
        'msg.invalidFile': 'Archivo inválido',
        'msg.speed': 'Velocidad', 'msg.lang': 'Idioma actual',
        'msg.delete': '¿Eliminar esta forma?',
        'msg.about': 'Flowgorithm Online\nVersión BETA 1.0.0k\n\nRéplica web de Flowgorithm\nAutor: PiBOH\nhttps://piboh.github.io\n\nLicencia: MIT\n\n© 2024 PiBOH',
        'msg.colorscheme': 'Esquema de colores: función de demostración',
        'msg.functions': 'Gestor de funciones: función de demostración',
        'fld.variable': 'Variable:', 'fld.expression': 'Expresión:',
        'fld.name': 'Nombre de variable:', 'fld.type': 'Tipo:', 'fld.array': 'Arreglo',
        'fld.size': 'Tamaño:', 'fld.condition': 'Condición:',
        'fld.from': 'Desde:', 'fld.to': 'Hasta:', 'fld.step': 'Paso:', 'fld.direction': 'Dirección:',
        'fld.up': 'Ascendente (++)', 'fld.down': 'Descendente (--)',
        'fld.text': 'Texto del comentario:', 'fld.newline': 'Nueva línea',
        'fld.inputvar': 'Variable a leer:', 'fld.outputexp': 'Expresión a imprimir:',
        'fld.call': 'Llamada a función:', 'fld.bpcond': 'Condición (opcional, se detiene si es verdadera):',
        'fld.exprHelp': 'Ejemplo: a + b, x * 2, "Hola " & nombre',
        'fld.outHelp': 'Usa comillas para cadenas. Concatena con & o ,',
        'fld.condHelp': 'Operadores: ==, !=, <, >, <=, >=, AND, OR, NOT',
        'fld.dirUp': 'Ascendente (++)', 'fld.dirDown': 'Descendente (--)',
        'langName': 'Español'
    },
    fr: {
        'menu.file': 'Fichier', 'menu.edit': 'Édition', 'menu.program': 'Programme',
        'menu.tools': 'Outils', 'menu.help': 'Aide',
        'menu.new': 'Nouveau', 'menu.open': 'Ouvrir...', 'menu.save': 'Enregistrer',
        'menu.saveas': 'Enregistrer sous...', 'menu.print': 'Imprimer...', 'menu.exit': 'Quitter',
        'menu.zoomin': 'Zoom avant', 'menu.zoomout': 'Zoom arrière', 'menu.style': 'Style de diagramme...',
        'menu.run': 'Exécuter', 'menu.step': 'Pas à pas', 'menu.pause': 'Pause', 'menu.stop': 'Arrêter',
        'menu.speed': 'Vitesse d\'exécution...', 'menu.breakpoints': 'Supprimer les points d\'arrêt',
        'menu.functions': 'Gestionnaire de fonctions...', 'menu.attributes': 'Attributs du programme...',
        'menu.copyimg': 'Copier l\'image', 'menu.exportimg': 'Exporter l\'image...',
        'menu.exportvec': 'Exporter en vectoriel...', 'menu.language': 'Changer la langue...',
        'menu.console': 'Fenêtre console', 'menu.sourceview': 'Visionneuse de code source',
        'menu.variables': 'Variables', 'menu.layout': 'Disposition des fenêtres',
        'menu.about': 'À propos de Flowgorithm',
        'ctx.header': 'Ajouter une forme', 'ctx.assign': 'Affecter', 'ctx.declare': 'Déclarer',
        'ctx.input': 'Entrée', 'ctx.output': 'Sortie', 'ctx.if': 'Si (If)', 'ctx.while': 'Tant que (While)',
        'ctx.do': 'Faire (Do While)', 'ctx.for': 'Pour (For)', 'ctx.call': 'Appel',
        'ctx.comment': 'Commentaire', 'ctx.breakpoint': 'Point d\'arrêt', 'ctx.paste': 'Coller',
        'window.console': 'Console', 'window.variables': 'Variables',
        'window.source': 'Visionneuse de Code Source',
        'window.clear': 'Effacer', 'window.submit': 'Envoyer',
        'window.inputPlaceholder': 'Entrez une valeur...',
        'var.name': 'Nom', 'var.type': 'Type', 'var.value': 'Valeur',
        'var.empty': 'Aucune variable',
        'status.zoom': 'Zoom', 'status.shapes': 'Formes',
        'flow.start': 'Début', 'flow.end': 'Fin', 'flow.true': 'Vrai', 'flow.false': 'Faux',
        'flow.while': 'Tant que', 'flow.do': 'Faire-Tant que', 'flow.for': 'Pour', 'flow.to': 'à',
        'dlg.assign': 'Affecter', 'dlg.declare': 'Déclarer', 'dlg.input': 'Entrée',
        'dlg.output': 'Sortie', 'dlg.if': 'Si (If)', 'dlg.while': 'Tant que (While)',
        'dlg.do': 'Faire-Tant que (Do-While)', 'dlg.for': 'Pour (For)',
        'dlg.call': 'Appel', 'dlg.comment': 'Commentaire', 'dlg.breakpoint': 'Point d\'arrêt',
        'dlg.ok': 'OK', 'dlg.cancel': 'Annuler',
        'msg.ready': 'Prêt', 'msg.started': '▶ Exécution démarrée...',
        'msg.terminated': '✓ Programme terminé.', 'msg.stopped': '■ Exécution arrêtée.',
        'msg.error': '✗ Erreur : ', 'msg.breakpoint': 'Point d\'arrêt atteint. Appuyez sur Exécuter pour continuer.',
        'msg.infinite': 'Boucle infinie détectée (>100000 itérations)',
        'msg.undeclared': 'Variable non déclarée : ',
        'msg.badexpr': 'Expression invalide : ',
        'msg.newConfirm': 'Créer un nouveau programme ? Les modifications non enregistrées seront perdues.',
        'msg.invalidFile': 'Fichier invalide',
        'msg.speed': 'Vitesse', 'msg.lang': 'Langue actuelle',
        'msg.delete': 'Supprimer cette forme ?',
        'msg.about': 'Flowgorithm Online\nVersion BETA 1.0.0k\n\nRéplique web de Flowgorithm\nAuteur: PiBOH\nhttps://piboh.github.io\n\nLicence: MIT\n\n© 2024 PiBOH',
        'msg.colorscheme': 'Schéma de couleurs : fonction de démonstration',
        'msg.functions': 'Gestionnaire de fonctions : fonction de démonstration',
        'fld.variable': 'Variable :', 'fld.expression': 'Expression :',
        'fld.name': 'Nom de la variable :', 'fld.type': 'Type :', 'fld.array': 'Tableau',
        'fld.size': 'Taille :', 'fld.condition': 'Condition :',
        'fld.from': 'De :', 'fld.to': 'À :', 'fld.step': 'Pas :', 'fld.direction': 'Direction :',
        'fld.up': 'Croissant (++)', 'fld.down': 'Décroissant (--)',
        'fld.text': 'Texte du commentaire :', 'fld.newline': 'Nouvelle ligne',
        'fld.inputvar': 'Variable à lire :', 'fld.outputexp': 'Expression à afficher :',
        'fld.call': 'Appel de fonction :', 'fld.bpcond': 'Condition (optionnel, arrête si vraie) :',
        'fld.exprHelp': 'Exemple : a + b, x * 2, "Bonjour " & nom',
        'fld.outHelp': 'Utilisez des guillemets pour les chaînes. Concaténez avec & ou ,',
        'fld.condHelp': 'Opérateurs : ==, !=, <, >, <=, >=, AND, OR, NOT',
        'fld.dirUp': 'Croissant (++)', 'fld.dirDown': 'Décroissant (--)',
        'langName': 'Français'
    },
    de: {
        'menu.file': 'Datei', 'menu.edit': 'Bearbeiten', 'menu.program': 'Programm',
        'menu.tools': 'Werkzeuge', 'menu.help': 'Hilfe',
        'menu.new': 'Neu', 'menu.open': 'Öffnen...', 'menu.save': 'Speichern',
        'menu.saveas': 'Speichern unter...', 'menu.print': 'Drucken...', 'menu.exit': 'Beenden',
        'menu.zoomin': 'Vergrößern', 'menu.zoomout': 'Verkleinern', 'menu.style': 'Diagrammstil...',
        'menu.run': 'Ausführen', 'menu.step': 'Einzelschritt', 'menu.pause': 'Pause', 'menu.stop': 'Stop',
        'menu.speed': 'Ausführungsgeschwindigkeit...', 'menu.breakpoints': 'Haltepunkte entfernen',
        'menu.functions': 'Funktionsverwaltung...', 'menu.attributes': 'Programmattribute...',
        'menu.copyimg': 'Bild kopieren', 'menu.exportimg': 'Bild exportieren...',
        'menu.exportvec': 'Vektor exportieren...', 'menu.language': 'Sprache ändern...',
        'menu.console': 'Konsolenfenster', 'menu.sourceview': 'Quellcode-Anzeige',
        'menu.variables': 'Variablen', 'menu.layout': 'Fensteranordnung',
        'menu.about': 'Über Flowgorithm',
        'ctx.header': 'Form hinzufügen', 'ctx.assign': 'Zuweisen', 'ctx.declare': 'Deklarieren',
        'ctx.input': 'Eingabe', 'ctx.output': 'Ausgabe', 'ctx.if': 'Wenn (If)', 'ctx.while': 'Solange (While)',
        'ctx.do': 'Tun (Do While)', 'ctx.for': 'Für (For)', 'ctx.call': 'Aufruf',
        'ctx.comment': 'Kommentar', 'ctx.breakpoint': 'Haltepunkt', 'ctx.paste': 'Einfügen',
        'window.console': 'Konsole', 'window.variables': 'Variablen',
        'window.source': 'Quellcode-Anzeige',
        'window.clear': 'Löschen', 'window.submit': 'Senden',
        'window.inputPlaceholder': 'Wert eingeben...',
        'var.name': 'Name', 'var.type': 'Typ', 'var.value': 'Wert',
        'var.empty': 'Keine Variablen',
        'status.zoom': 'Zoom', 'status.shapes': 'Formen',
        'flow.start': 'Start', 'flow.end': 'Ende', 'flow.true': 'Wahr', 'flow.false': 'Falsch',
        'flow.while': 'Solange', 'flow.do': 'Tun-Solange', 'flow.for': 'Für', 'flow.to': 'bis',
        'dlg.assign': 'Zuweisen', 'dlg.declare': 'Deklarieren', 'dlg.input': 'Eingabe',
        'dlg.output': 'Ausgabe', 'dlg.if': 'Wenn (If)', 'dlg.while': 'Solange (While)',
        'dlg.do': 'Tun-Solange (Do-While)', 'dlg.for': 'Für (For)',
        'dlg.call': 'Aufruf', 'dlg.comment': 'Kommentar', 'dlg.breakpoint': 'Haltepunkt',
        'dlg.ok': 'OK', 'dlg.cancel': 'Abbrechen',
        'msg.ready': 'Bereit', 'msg.started': '▶ Ausführung gestartet...',
        'msg.terminated': '✓ Programm beendet.', 'msg.stopped': '■ Ausführung gestoppt.',
        'msg.error': '✗ Fehler: ', 'msg.breakpoint': 'Haltepunkt erreicht. Drücken Sie Ausführen, um fortzufahren.',
        'msg.infinite': 'Endlosschleife erkannt (>100000 Iterationen)',
        'msg.undeclared': 'Nicht deklarierte Variable: ',
        'msg.badexpr': 'Ungültiger Ausdruck: ',
        'msg.newConfirm': 'Neues Programm erstellen? Nicht gespeicherte Änderungen gehen verloren.',
        'msg.invalidFile': 'Ungültige Datei',
        'msg.speed': 'Geschwindigkeit', 'msg.lang': 'Aktuelle Sprache',
        'msg.delete': 'Diese Form löschen?',
        'msg.about': 'Flowgorithm Online\nVersion BETA 1.0.0k\n\nWeb-Replik von Flowgorithm\nAutor: PiBOH\nhttps://piboh.github.io\n\nLizenz: MIT\n\n© 2024 PiBOH',
        'msg.colorscheme': 'Farbschema: Demo-Funktion',
        'msg.functions': 'Funktionsverwaltung: Demo-Funktion',
        'fld.variable': 'Variable:', 'fld.expression': 'Ausdruck:',
        'fld.name': 'Variablenname:', 'fld.type': 'Typ:', 'fld.array': 'Array',
        'fld.size': 'Größe:', 'fld.condition': 'Bedingung:',
        'fld.from': 'Von:', 'fld.to': 'Bis:', 'fld.step': 'Schritt:', 'fld.direction': 'Richtung:',
        'fld.up': 'Aufsteigend (++)', 'fld.down': 'Absteigend (--)',
        'fld.text': 'Kommentartext:', 'fld.newline': 'Neue Zeile',
        'fld.inputvar': 'Zu lesende Variable:', 'fld.outputexp': 'Auszugebender Ausdruck:',
        'fld.call': 'Funktionsaufruf:', 'fld.bpcond': 'Bedingung (optional, stoppt wenn wahr):',
        'fld.exprHelp': 'Beispiel: a + b, x * 2, "Hallo " & name',
        'fld.outHelp': 'Verwenden Sie Anführungszeichen für Strings. Verketten Sie mit & oder ,',
        'fld.condHelp': 'Operatoren: ==, !=, <, >, <=, >=, AND, OR, NOT',
        'fld.dirUp': 'Aufsteigend (++)', 'fld.dirDown': 'Absteigend (--)',
        'langName': 'Deutsch'
    }
};

function t(key) {
    return (i18n[state.language] && i18n[state.language][key]) || (i18n.en[key]) || key;
}

function applyLanguage(lang) {
    if (!i18n[lang]) return;
    state.language = lang;
    
    // Aggiorna elementi con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    
    // Aggiorna elementi con data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (i18n[lang][key]) el.title = i18n[lang][key];
    });
    
    // Aggiorna elementi con data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[lang][key]) el.placeholder = i18n[lang][key];
    });
    
    // Aggiorna testi statici del flowchart
    if (document.getElementById('startLabel')) {
        document.getElementById('startLabel').textContent = t('flow.start');
    }
    if (document.getElementById('endLabel')) {
        document.getElementById('endLabel').textContent = t('flow.end');
    }
    
    // Aggiorna status bar
    if (document.getElementById('statusLanguage')) {
        document.getElementById('statusLanguage').textContent = t('langName');
    }
    if (document.getElementById('statusMessage')) {
        document.getElementById('statusMessage').textContent = t('msg.ready');
    }
    
    // Salva preferenza
    try { localStorage.setItem('flowgorithm_lang', lang); } catch(e) {}
    
    // Rerender del flowchart per aggiornare etichette Vero/Falso
    if (typeof render === 'function' && state.program) {
        render();
    }
    
    // Aggiorna le etichette dei branch (Vero/Falso) e dei loop
    if (typeof updateBranchLabels === 'function') {
        updateBranchLabels();
    }
    
    // Aggiorna bottoni dialoghi
    if (typeof updateDialogButtons === 'function') {
        updateDialogButtons();
    }
    
    // Aggiorna tutte le finestre aperte
    if (typeof refreshWindows === 'function') {
        refreshWindows();
    }
    
    // Aggiorna status bar
    if (document.getElementById('statusMessage')) {
        document.getElementById('statusMessage').textContent = t('msg.ready');
    }
}

// ============ STATE ============
const state = {
    language: 'it',
    program: [],
    selectedShape: null,
    editingShape: null,
    insertionTarget: null,
    variables: {},
    running: false,
    paused: false,
    stepMode: false,
    speed: 'medium',
    awaitingInput: null,
    zoom: 100,
    nextId: 1,
    executionStack: [],
};

// ============ UTILITIES ============
function uid() { return 'n' + (state.nextId++); }

function speedDelay() {
    return { full: 50, fast: 200, medium: 500, slow: 1000 }[state.speed] || 500;
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
}

// ============ NODE FACTORY ============
function createNode(type, props = {}) {
    const base = { id: uid(), type };
    switch (type) {
        case 'assign':     return { ...base, variable: 'x', expression: '0', ...props };
        case 'declare':    return { ...base, name: 'x', varType: 'Integer', isArray: false, size: '', ...props };
        case 'input':      return { ...base, variable: 'x', ...props };
        case 'output':     return { ...base, expression: '"Hello"', newLine: true, ...props };
        case 'if':         return { ...base, condition: 'x > 0', trueBranch: [], falseBranch: [], ...props };
        case 'while':      return { ...base, condition: 'x > 0', body: [], ...props };
        case 'do':         return { ...base, condition: 'x > 0', body: [], ...props };
        case 'for':        return { ...base, variable: 'i', start: '1', end: '10', step: '1', direction: 'up', body: [], ...props };
        case 'call':       return { ...base, expression: 'funzione()', ...props };
        case 'comment':    return { ...base, text: 'commento', ...props };
        case 'breakpoint': return { ...base, condition: '', ...props };
    }
    return base;
}

// ============ RENDERING ============
function render() {
    const container = document.getElementById('shapesContainer');
    container.innerHTML = '';
    renderBlock(container, state.program, true);
    updateStatus();
    if (document.getElementById('sourceWindow').style.display !== 'none') {
        renderSourceCode();
    }
}

function renderBlock(container, blockArray, allowInsert = true) {
    // Linea di inserimento iniziale
    if (allowInsert) {
        container.appendChild(createInsertionLine(blockArray, 0));
    }
    
    blockArray.forEach((node, idx) => {
        const el = renderNode(node, blockArray, idx);
        container.appendChild(el);
        if (allowInsert) {
            container.appendChild(createInsertionLine(blockArray, idx + 1));
        }
    });
}

function createInsertionLine(parent, index) {
    const line = document.createElement('div');
    line.className = 'insertion-line';
    const dot = document.createElement('div');
    dot.className = 'insertion-dot';
    line.appendChild(dot);
    line.addEventListener('click', (e) => {
        e.stopPropagation();
        showShapeMenu(e, parent, index);
    });
    return line;
}

function renderNode(node, parent, index) {
    const wrapper = document.createElement('div');
    wrapper.dataset.id = node.id;
    
    switch (node.type) {
        case 'assign':
            return renderRectShape(node, parent, index, 'shape-assign', 
                `${node.variable} ← ${node.expression}`);
        case 'declare':
            const declText = node.isArray 
                ? `${node.name}[${node.size}] : ${node.varType}`
                : `${node.name} : ${node.varType}`;
            return renderRectShape(node, parent, index, 'shape-declare', declText);
        case 'input':
            return renderParaShape(node, parent, index, 'shape-input', 
                `Input ${node.variable}`);
        case 'output':
            return renderParaShape(node, parent, index, 'shape-output', 
                `Output ${node.expression}`);
        case 'if':
            return renderIfShape(node, parent, index);
        case 'while':
        case 'do':
        case 'for':
            return renderLoopShape(node, parent, index);
        case 'call':
            return renderRectShape(node, parent, index, 'shape-call', node.expression);
        case 'comment':
            return renderRectShape(node, parent, index, 'shape-comment', node.text);
        case 'breakpoint':
            return renderBreakpoint(node, parent, index);
    }
    return wrapper;
}

function renderRectShape(node, parent, index, cssClass, text) {
    const div = document.createElement('div');
    div.className = `flow-shape ${cssClass}`;
    div.dataset.id = node.id;
    div.innerHTML = `<div class="shape-content">${escapeHtml(text)}</div><button class="shape-delete" title="Elimina">✕</button>`;
    div.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        openEditDialog(node);
    });
    div.querySelector('.shape-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNode(parent, index);
    });
    return div;
}

function renderParaShape(node, parent, index, cssClass, text) {
    const div = document.createElement('div');
    div.className = `flow-shape ${cssClass}`;
    div.dataset.id = node.id;
    div.innerHTML = `<div class="shape-bg"></div><div class="shape-content">${escapeHtml(text)}</div><button class="shape-delete" title="Elimina">✕</button>`;
    div.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        openEditDialog(node);
    });
    div.querySelector('.shape-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNode(parent, index);
    });
    return div;
}

function renderIfShape(node, parent, index) {
    const wrap = document.createElement('div');
    wrap.className = 'shape-if';
    wrap.dataset.id = node.id;
    
    // Diamond rosa (come Flowgorithm)
    const diamond = document.createElement('div');
    diamond.className = 'diamond-shape';
    diamond.innerHTML = `
        <svg viewBox="0 0 240 80" preserveAspectRatio="none">
            <polygon points="120,2 238,40 120,78 2,40" fill="#F4A3C8" stroke="#7A2954" stroke-width="2"/>
        </svg>
        <div class="diamond-text">${escapeHtml(node.condition)}</div>
        <button class="shape-delete">✕</button>
    `;
    diamond.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        openEditDialog(node);
    });
    diamond.querySelector('.shape-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNode(parent, index);
    });
    wrap.appendChild(diamond);
    
    // Contenitore rami con linee orizzontali
    const branches = document.createElement('div');
    branches.className = 'if-branches';
    
    // False branch (sinistra)
    const falseBranch = document.createElement('div');
    falseBranch.className = 'if-branch if-false';
    const falseLabel = document.createElement('div');
    falseLabel.className = 'branch-label false-label';
    falseLabel.textContent = 'False';
    falseBranch.appendChild(falseLabel);
    renderBlock(falseBranch, node.falseBranch);
    
    // True branch (destra)
    const trueBranch = document.createElement('div');
    trueBranch.className = 'if-branch if-true';
    const trueLabel = document.createElement('div');
    trueLabel.className = 'branch-label true-label';
    trueLabel.textContent = 'True';
    trueBranch.appendChild(trueLabel);
    renderBlock(trueBranch, node.trueBranch);
    
    branches.appendChild(falseBranch);
    branches.appendChild(trueBranch);
    wrap.appendChild(branches);
    
    // Merge point (cerchio bianco)
    const mergePoint = document.createElement('div');
    mergePoint.className = 'if-merge-point';
    wrap.appendChild(mergePoint);
    
    return wrap;
}

function renderLoopShape(node, parent, index) {
    const wrap = document.createElement('div');
    wrap.className = 'shape-loop';
    wrap.dataset.id = node.id;
    
    // Costruisco il testo basato sul tipo di loop
    let text = '';
    switch (node.type) {
        case 'while':
            text = t('flow.while') + ' ' + node.condition;
            break;
        case 'do':
            text = t('flow.do') + ' ' + node.condition;
            break;
        case 'for':
            text = t('flow.for') + ' ' + node.variable + ' = ' + node.start + ' ' + t('flow.to') + ' ' + node.end + ' (' + node.step + ')';
            break;
    }
    
    const hexEl = document.createElement('div');
    hexEl.className = 'hexagon-shape';
    hexEl.dataset.loopType = node.type;
    hexEl.innerHTML = `
        <svg viewBox="0 0 240 70" preserveAspectRatio="none">
            <polygon points="36,2 204,2 238,35 204,68 36,68 2,35" fill="#F6D7A6" stroke="#8A6F49" stroke-width="2"/>
        </svg>
        <div class="hex-text" data-loop-label="${node.type}">${escapeHtml(text)}</div>
        <button class="shape-delete">✕</button>
    `;
    hexEl.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        openEditDialog(node);
    });
    hexEl.querySelector('.shape-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNode(parent, index);
    });
    wrap.appendChild(hexEl);
    
    const classic = document.createElement('div');
    classic.className = `loop-classic loop-${node.type}`;
    classic.innerHTML = `
        <div class="loop-false-label classic-label">${node.type === 'for' ? 'Done' : t('flow.false')}</div>
        <div class="loop-true-label classic-label">${node.type === 'for' ? 'Next' : t('flow.true')}</div>
        <div class="loop-false-path"></div>
        <div class="loop-true-path"></div>
        <div class="loop-return-arrow"></div>
    `;
    const bodyContainer = document.createElement('div');
    bodyContainer.className = 'loop-body-container';
    renderBlock(bodyContainer, node.body);
    classic.appendChild(bodyContainer);
    wrap.appendChild(classic);
    return wrap;
}

function renderBreakpoint(node, parent, index) {
    const div = document.createElement('div');
    div.className = 'flow-shape shape-breakpoint';
    div.dataset.id = node.id;
    div.innerHTML = `<div class="shape-content">●</div><button class="shape-delete">✕</button>`;
    div.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        openEditDialog(node);
    });
    div.querySelector('.shape-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNode(parent, index);
    });
    return div;
}

function deleteNode(parent, index) {
    if (confirm(t('msg.delete'))) {
        parent.splice(index, 1);
        render();
    }
}

function updateStatus() {
    document.getElementById('zoomLevel').textContent = state.zoom + '%';
    document.getElementById('shapeCount').textContent = countShapes(state.program);
}

function countShapes(arr) {
    let n = 0;
    for (const node of arr) {
        n++;
        if (node.type === 'if') {
            n += countShapes(node.trueBranch) + countShapes(node.falseBranch);
        } else if (node.body) {
            n += countShapes(node.body);
        }
    }
    return n;
}

// ============ SHAPE CONTEXT MENU ============
function showShapeMenu(event, parent, index) {
    const menu = document.getElementById('shapeMenu');
    state.insertionTarget = { parent, index };
    menu.classList.add('visible');
    const x = Math.min(event.clientX, window.innerWidth - 230);
    const y = Math.min(event.clientY, window.innerHeight - menu.offsetHeight - 10);
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
}

function hideShapeMenu() {
    document.getElementById('shapeMenu').classList.remove('visible');
    state.insertionTarget = null;
}

document.querySelectorAll('#shapeMenu .context-item').forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('disabled')) return;
        const shape = item.dataset.shape;
        if (!state.insertionTarget) return;
        const node = createNode(shape);
        state.insertionTarget.parent.splice(state.insertionTarget.index, 0, node);
        hideShapeMenu();
        render();
        // Open edit dialog immediately for new shape
        setTimeout(() => openEditDialog(node), 50);
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('#shapeMenu') && !e.target.closest('.insertion-line')) {
        hideShapeMenu();
    }
});

// ============ EDIT DIALOG ============
function openEditDialog(node) {
    state.editingShape = node;
    const title = document.getElementById('dialogTitle');
    const body = document.getElementById('dialogBody');
    
    let html = '';
    let dlgTitle = '';
    
    switch (node.type) {
        case 'assign':
            dlgTitle = t('dlg.assign');
            html = `
                <div class="dialog-shape-preview">
                    <svg viewBox="0 0 200 50" width="200" height="50"><rect x="2" y="2" width="196" height="46" fill="#7BB8E8" stroke="#1F3354" stroke-width="2"/><text x="100" y="30" text-anchor="middle" font-family="Consolas" font-size="14">${escapeHtml(t('dlg.assign'))}</text></svg>
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.variable'))}</label>
                    <input type="text" id="fld-variable" value="${escapeHtml(node.variable)}" placeholder="x">
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.expression'))}</label>
                    <input type="text" id="fld-expression" value="${escapeHtml(node.expression)}" placeholder="5 + x * 2">
                    <div class="dialog-field-help">${escapeHtml(t('fld.exprHelp'))}</div>
                </div>`;
            break;
        case 'declare':
            dlgTitle = t('dlg.declare');
            html = `
                <div class="dialog-shape-preview">
                    <svg viewBox="0 0 200 50" width="200" height="50"><rect x="2" y="2" width="196" height="46" fill="#C0C0C0" stroke="#333" stroke-width="2"/><text x="100" y="30" text-anchor="middle" font-family="Consolas" font-size="14">${escapeHtml(t('dlg.declare'))}</text></svg>
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.name'))}</label>
                    <input type="text" id="fld-name" value="${escapeHtml(node.name)}">
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.type'))}</label>
                    <select id="fld-vartype">
                        <option value="Integer" ${node.varType==='Integer'?'selected':''}>Integer</option>
                        <option value="Real" ${node.varType==='Real'?'selected':''}>Real</option>
                        <option value="String" ${node.varType==='String'?'selected':''}>String</option>
                        <option value="Boolean" ${node.varType==='Boolean'?'selected':''}>Boolean</option>
                    </select>
                </div>
                <div class="dialog-field">
                    <label><input type="checkbox" id="fld-isarray" ${node.isArray?'checked':''}> ${escapeHtml(t('fld.array'))}</label>
                </div>
                <div class="dialog-field" id="size-field" style="${node.isArray?'':'display:none;'}">
                    <label>${escapeHtml(t('fld.size'))}</label>
                    <input type="text" id="fld-size" value="${escapeHtml(node.size)}" placeholder="10">
                </div>`;
            break;
        case 'input':
            dlgTitle = t('dlg.input');
            html = `
                <div class="dialog-shape-preview">
                    <svg viewBox="0 0 200 50" width="200" height="50"><polygon points="20,2 198,2 180,48 2,48" fill="#5BC9F0" stroke="#1F4F7A" stroke-width="2"/><text x="100" y="30" text-anchor="middle" font-family="Consolas" font-size="14">Input</text></svg>
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.inputvar'))}</label>
                    <input type="text" id="fld-variable" value="${escapeHtml(node.variable)}">
                </div>`;
            break;
        case 'output':
            dlgTitle = t('dlg.output');
            html = `
                <div class="dialog-shape-preview">
                    <svg viewBox="0 0 200 50" width="200" height="50"><polygon points="20,2 198,2 180,48 2,48" fill="#7FCC7F" stroke="#1F5C1F" stroke-width="2"/><text x="100" y="30" text-anchor="middle" font-family="Consolas" font-size="14">Output</text></svg>
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.outputexp'))}</label>
                    <input type="text" id="fld-expression" value="${escapeHtml(node.expression)}" placeholder='"Hello", x, x+y'>
                    <div class="dialog-field-help">${escapeHtml(t('fld.outHelp'))}</div>
                </div>
                <div class="dialog-field">
                    <label><input type="checkbox" id="fld-newline" ${node.newLine?'checked':''}> ${escapeHtml(t('fld.newline'))}</label>
                </div>`;
            break;
        case 'if':
            dlgTitle = t('dlg.if');
            html = `
                <div class="dialog-shape-preview">
                    <svg viewBox="0 0 200 70" width="200" height="70"><polygon points="100,2 198,35 100,68 2,35" fill="#F4C842" stroke="#7A5418" stroke-width="2"/><text x="100" y="40" text-anchor="middle" font-family="Consolas" font-size="14">If</text></svg>
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.condition'))}</label>
                    <input type="text" id="fld-condition" value="${escapeHtml(node.condition)}" placeholder="x &gt; 0">
                    <div class="dialog-field-help">${escapeHtml(t('fld.condHelp'))}</div>
                </div>`;
            break;
        case 'while':
        case 'do':
            dlgTitle = node.type === 'while' ? t('dlg.while') : t('dlg.do');
            html = `
                <div class="dialog-shape-preview">
                    <svg viewBox="0 0 200 50" width="200" height="50"><polygon points="20,2 180,2 198,25 180,48 20,48 2,25" fill="#E87FB4" stroke="#7A2954" stroke-width="2"/><text x="100" y="30" text-anchor="middle" font-family="Consolas" font-size="14">${node.type === 'while' ? 'While' : 'Do'}</text></svg>
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.condition'))}</label>
                    <input type="text" id="fld-condition" value="${escapeHtml(node.condition)}">
                    <div class="dialog-field-help">${escapeHtml(t('fld.condHelp'))}</div>
                </div>`;
            break;
        case 'for':
            dlgTitle = t('dlg.for');
            html = `
                <div class="dialog-shape-preview">
                    <svg viewBox="0 0 200 50" width="200" height="50"><polygon points="20,2 180,2 198,25 180,48 20,48 2,25" fill="#E87FB4" stroke="#7A2954" stroke-width="2"/><text x="100" y="30" text-anchor="middle" font-family="Consolas" font-size="14">For</text></svg>
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.variable'))}</label>
                    <input type="text" id="fld-variable" value="${escapeHtml(node.variable)}">
                </div>
                <div class="dialog-field row">
                    <div><label>${escapeHtml(t('fld.from'))}</label><input type="text" id="fld-start" value="${escapeHtml(node.start)}"></div>
                    <div><label>${escapeHtml(t('fld.to'))}</label><input type="text" id="fld-end" value="${escapeHtml(node.end)}"></div>
                    <div><label>${escapeHtml(t('fld.step'))}</label><input type="text" id="fld-step" value="${escapeHtml(node.step)}"></div>
                </div>
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.direction'))}</label>
                    <select id="fld-direction">
                        <option value="up" ${node.direction==='up'?'selected':''}>${escapeHtml(t('fld.dirUp'))}</option>
                        <option value="down" ${node.direction==='down'?'selected':''}>${escapeHtml(t('fld.dirDown'))}</option>
                    </select>
                </div>`;
            break;
        case 'call':
            dlgTitle = t('dlg.call');
            html = `
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.call'))}</label>
                    <input type="text" id="fld-expression" value="${escapeHtml(node.expression)}" placeholder="funzione(x, y)">
                </div>`;
            break;
        case 'comment':
            dlgTitle = t('dlg.comment');
            html = `
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.text'))}</label>
                    <textarea id="fld-text" rows="3" style="font-family:inherit;">${escapeHtml(node.text)}</textarea>
                </div>`;
            break;
        case 'breakpoint':
            dlgTitle = t('dlg.breakpoint');
            html = `
                <div class="dialog-field">
                    <label>${escapeHtml(t('fld.bpcond'))}</label>
                    <input type="text" id="fld-condition" value="${escapeHtml(node.condition)}" placeholder="">
                </div>`;
            break;
    }
    
    title.textContent = dlgTitle;
    body.innerHTML = html;
    document.getElementById('editDialog').classList.add('visible');
    
    // Focus first input
    setTimeout(() => {
        const first = body.querySelector('input, textarea, select');
        if (first) { first.focus(); first.select && first.select(); }
    }, 50);
    
    // Special: array checkbox toggles size field
    const arrayCb = document.getElementById('fld-isarray');
    if (arrayCb) {
        arrayCb.addEventListener('change', () => {
            document.getElementById('size-field').style.display = arrayCb.checked ? '' : 'none';
        });
    }
}

function saveDialog() {
    if (!state.editingShape) return;
    const node = state.editingShape;
    const get = id => document.getElementById(id) ? document.getElementById(id).value : '';
    const getCb = id => document.getElementById(id) ? document.getElementById(id).checked : false;
    
    switch (node.type) {
        case 'assign':
            node.variable = get('fld-variable').trim() || 'x';
            node.expression = get('fld-expression').trim() || '0';
            break;
        case 'declare':
            node.name = get('fld-name').trim() || 'x';
            node.varType = get('fld-vartype');
            node.isArray = getCb('fld-isarray');
            node.size = get('fld-size').trim();
            break;
        case 'input':
            node.variable = get('fld-variable').trim() || 'x';
            break;
        case 'output':
            node.expression = get('fld-expression').trim() || '""';
            node.newLine = getCb('fld-newline');
            break;
        case 'if':
            node.condition = get('fld-condition').trim() || 'true';
            break;
        case 'while':
        case 'do':
            node.condition = get('fld-condition').trim() || 'true';
            break;
        case 'for':
            node.variable = get('fld-variable').trim() || 'i';
            node.start = get('fld-start').trim() || '1';
            node.end = get('fld-end').trim() || '10';
            node.step = get('fld-step').trim() || '1';
            node.direction = get('fld-direction');
            break;
        case 'call':
            node.expression = get('fld-expression').trim() || 'funzione()';
            break;
        case 'comment':
            node.text = get('fld-text').trim() || '';
            break;
        case 'breakpoint':
            node.condition = get('fld-condition').trim();
            break;
    }
    closeDialog();
    render();
}

function closeDialog() {
    document.getElementById('editDialog').classList.remove('visible');
    state.editingShape = null;
}

document.getElementById('dialogOk').addEventListener('click', saveDialog);
document.getElementById('dialogCancel').addEventListener('click', closeDialog);

// ============ ABOUT WINDOW ============
function showAbout() {
    const aboutWin = document.getElementById('aboutWindow');
    aboutWin.style.display = 'flex';
}

function closeAbout() {
    document.getElementById('aboutWindow').style.display = 'none';
}

document.getElementById('aboutClose').addEventListener('click', closeAbout);
document.getElementById('aboutOk').addEventListener('click', closeAbout);

// ============ MODAL WINDOWS ============
function showModalWindow(title, content) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.display = 'flex';
    
    overlay.innerHTML = `
        <div class="dialog-window">
            <div class="dialog-titlebar">
                <span>${title}</span>
                <button class="dialog-close">✕</button>
            </div>
            <div class="dialog-body">
                ${content}
            </div>
            <div class="dialog-footer">
                <button class="dialog-btn primary">OK</button>
                <button class="dialog-btn">Annulla</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const closeBtn = overlay.querySelector('.dialog-close');
    const okBtn = overlay.querySelector('.dialog-btn.primary');
    const cancelBtn = overlay.querySelectorAll('.dialog-btn')[1];
    
    function close() {
        overlay.remove();
    }
    
    closeBtn.addEventListener('click', close);
    okBtn.addEventListener('click', close);
    cancelBtn.addEventListener('click', close);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });
}

function showColorSchemeWindow() {
    const styles = [
        'Classic', 'IBM', 'SDL', 'Modern', 'Minimal', 'Colorful',
        'Dark', 'Light', 'High Contrast', 'Pastel'
    ];
    
    let html = '<p>Seleziona lo stile del flowchart:</p><div style="margin-top:10px;">';
    styles.forEach((s, i) => {
        html += `<label style="display:block; margin:6px 0;"><input type="radio" name="style" value="${s}" ${i===0?'checked':''}> ${s}</label>`;
    });
    html += '</div>';
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.display = 'flex';
    
    overlay.innerHTML = `
        <div class="dialog-window">
            <div class="dialog-titlebar">
                <span>Stile Flowchart</span>
                <button class="dialog-close">✕</button>
            </div>
            <div class="dialog-body">
                ${html}
            </div>
            <div class="dialog-footer">
                <button class="dialog-btn primary">OK</button>
                <button class="dialog-btn">Annulla</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const closeBtn = overlay.querySelector('.dialog-close');
    const okBtn = overlay.querySelector('.dialog-btn.primary');
    const cancelBtn = overlay.querySelectorAll('.dialog-btn')[1];
    
    function close() { overlay.remove(); }
    
    closeBtn.addEventListener('click', close);
    cancelBtn.addEventListener('click', close);
    okBtn.addEventListener('click', close);
}

function showFlowchartStyleWindow() {
    // Implementazione reale del cambio stile (cambio classe CSS sulla root)
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.display = 'flex';
    
    let options = '';
    ['Classic', 'IBM', 'SDL', 'Modern', 'Minimal', 'Colorful', 'Dark', 'Light'].forEach(s => {
        options += `<option value="${s.toLowerCase()}">${s}</option>`;
    });
    
    overlay.innerHTML = `
        <div class="dialog-window">
            <div class="dialog-titlebar">
                <span>Stile Flowchart</span>
                <button class="dialog-close">✕</button>
            </div>
            <div class="dialog-body">
                <p>Seleziona lo stile:</p>
                <select id="styleSelector" style="width:100%; padding:8px;">${options}</select>
            </div>
            <div class="dialog-footer">
                <button class="dialog-btn primary" id="applyStyle">Applica</button>
                <button class="dialog-btn" id="cancelStyle">Annulla</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    overlay.querySelector('.dialog-close').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#cancelStyle').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#applyStyle').addEventListener('click', () => {
        const style = document.getElementById('styleSelector').value;
        document.documentElement.className = document.documentElement.className
            .split(' ')
            .filter(c => !c.startsWith('style-'))
            .join(' ');
        document.documentElement.classList.add('style-' + style);
        state.flowchartStyle = style;
        try { localStorage.setItem('flowgorithm_style', style); } catch(e) {}
        overlay.remove();
    });
}

function showLanguageWindow() {
    showModalWindow('Cambia Lingua', `
        <p>Seleziona la lingua dell'interfaccia:</p>
        <select style="width:100%; padding:8px; margin-top:10px;">
            <option value="it">Italiano</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
        </select>
    `);
}

function showFunctionManagerWindow() {
    showModalWindow('Gestione Funzioni', `
        <p>Elenco delle funzioni definite:</p>
        <div style="margin-top:10px; padding:10px; background:#F5F5F5; border:1px solid #CCC; min-height:100px;">
            <div>Main (principale)</div>
        </div>
        <div style="margin-top:10px;">
            <button class="dialog-btn">Aggiungi Funzione</button>
            <button class="dialog-btn">Rimuovi</button>
        </div>
    `);
}

function showAttributesWindow() {
    showModalWindow('Attributi Programma', `
        <div class="dialog-field">
            <label>Nome Programma:</label>
            <input type="text" value="Untitled" style="width:100%; padding:6px; margin-top:4px;">
        </div>
        <div class="dialog-field">
            <label>Autore:</label>
            <input type="text" value="" style="width:100%; padding:6px; margin-top:4px;">
        </div>
        <div class="dialog-field">
            <label>Descrizione:</label>
            <textarea rows="3" style="width:100%; padding:6px; margin-top:4px;"></textarea>
        </div>
    `);
}

function showPrintWindow() {
    showModalWindow('Stampa Flowchart', `
        <p>Seleziona le opzioni di stampa:</p>
        <div style="margin-top:10px;">
            <label><input type="checkbox" checked> Stampa intestazione</label><br>
            <label><input type="checkbox" checked> Stampa piè di pagina</label><br>
            <label><input type="checkbox"> Stampa griglia</label>
        </div>
        <div class="dialog-field" style="margin-top:15px;">
            <label>Scala:</label>
            <select style="width:100%; padding:6px; margin-top:4px;">
                <option>100%</option>
                <option>75%</option>
                <option>50%</option>
                <option>Fit to Page</option>
            </select>
        </div>
    `);
}

function showLayoutWindows() {
    const consoleW = document.getElementById('consoleWindow');
    const varW = document.getElementById('variablesWindow');
    const srcW = document.getElementById('sourceWindow');
    
    consoleW.style.display = 'flex';
    varW.style.display = 'flex';
    srcW.style.display = 'flex';
    
    // Posizionamento
    consoleW.style.left = ''; consoleW.style.right = '30px';
    consoleW.style.top = ''; consoleW.style.bottom = '30px';
    varW.style.left = '30px'; varW.style.right = '';
    varW.style.top = ''; varW.style.bottom = '30px';
    srcW.style.left = ''; srcW.style.right = '30px';
    srcW.style.top = '100px'; srcW.style.bottom = '';
    
    updateVariablesUI();
    renderSourceCode();
}

function showExportImageWindow() {
    showModalWindow('Esporta Immagine', `
        <p>Esporta il flowchart come immagine PNG.</p>
        <div class="dialog-field" style="margin-top:15px;">
            <label>Qualità:</label>
            <select style="width:100%; padding:6px; margin-top:4px;">
                <option>Alta (300 DPI)</option>
                <option>Media (150 DPI)</option>
                <option>Bassa (72 DPI)</option>
            </select>
        </div>
        <div class="dialog-field">
            <label><input type="checkbox" checked> Includi sfondo bianco</label>
        </div>
        <button class="dialog-btn primary" onclick="exportFlowchartAsImage()">Salva Immagine</button>
    `);
}

function exportFlowchartAsImage() {
    const source = document.getElementById('flowchartContent');
    if (!source) return;

    const clone = source.cloneNode(true);
    clone.querySelectorAll('.shape-delete').forEach(el => el.remove());
    clone.querySelectorAll('.insertion-dot').forEach(el => { el.style.opacity = '0'; });

    const width = Math.max(900, source.scrollWidth + 80);
    const height = Math.max(1200, source.scrollHeight + 80);
    const html = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
            <foreignObject width="100%" height="100%">
                <div xmlns="http://www.w3.org/1999/xhtml" style="background:white;width:${width}px;min-height:${height}px;padding:40px;font-family:Segoe UI,Arial,sans-serif;">
                    ${clone.outerHTML}
                </div>
            </foreignObject>
        </svg>`;

    const svgBlob = new Blob([html], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        canvas.toBlob(blob => {
            const pngUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'flowchart.png';
            link.href = pngUrl;
            link.click();
            setTimeout(() => URL.revokeObjectURL(pngUrl), 1000);
        }, 'image/png');
    };
    img.onerror = () => {
        URL.revokeObjectURL(url);
        const fallback = document.createElement('a');
        fallback.download = 'flowchart.svg';
        fallback.href = URL.createObjectURL(svgBlob);
        fallback.click();
    };
    img.src = url;
}

function showExportVectorWindow() {
    showModalWindow('Esporta Vettoriale', `
        <p>Esporta il flowchart come file SVG.</p>
        <div class="dialog-field" style="margin-top:15px;">
            <label>Formato:</label>
            <select style="width:100%; padding:6px; margin-top:4px;">
                <option>SVG</option>
                <option>PDF</option>
                <option>EPS</option>
            </select>
        </div>
    `);
}

function showSpeedWindow() {
    const speeds = [
        { value: 'full', label: 'Full (Immediato)' },
        { value: 'fast', label: 'Fast (Veloce)' },
        { value: 'medium', label: 'Medium (Medio)' },
        { value: 'slow', label: 'Slow (Lento)' }
    ];
    
    let html = '<p>Seleziona la velocità di esecuzione:</p><div style="margin-top:10px;">';
    speeds.forEach(s => {
        const checked = state.speed === s.value ? 'checked' : '';
        html += `<label style="display:block; margin:8px 0;"><input type="radio" name="speed" value="${s.value}" ${checked}> ${s.label}</label>`;
    });
    html += '</div>';
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.display = 'flex';
    
    overlay.innerHTML = `
        <div class="dialog-window">
            <div class="dialog-titlebar">
                <span>Velocità Esecuzione</span>
                <button class="dialog-close">✕</button>
            </div>
            <div class="dialog-body">
                ${html}
            </div>
            <div class="dialog-footer">
                <button class="dialog-btn primary">OK</button>
                <button class="dialog-btn">Annulla</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const closeBtn = overlay.querySelector('.dialog-close');
    const okBtn = overlay.querySelector('.dialog-btn.primary');
    const cancelBtn = overlay.querySelectorAll('.dialog-btn')[1];
    
    function close() { overlay.remove(); }
    
    closeBtn.addEventListener('click', close);
    cancelBtn.addEventListener('click', close);
    okBtn.addEventListener('click', () => {
        const selected = overlay.querySelector('input[name="speed"]:checked');
        if (selected) state.speed = selected.value;
        close();
    });
}

// Aggiorna il testo dei bottoni OK/Annulla dopo il cambio lingua
function updateDialogButtons() {
    const okBtn = document.getElementById('dialogOk');
    const cancelBtn = document.getElementById('dialogCancel');
    if (okBtn) okBtn.textContent = t('dlg.ok');
    if (cancelBtn) cancelBtn.textContent = t('dlg.cancel');
}

// Aggiorna le etichette dei branch True/False nei blocchi if
function updateBranchLabels() {
    document.querySelectorAll('.branch-label.true-label').forEach(el => {
        el.textContent = t('flow.true');
    });
    document.querySelectorAll('.branch-label.false-label').forEach(el => {
        el.textContent = t('flow.false');
    });
    // Aggiorna anche le etichette dei loop
    document.querySelectorAll('[data-loop-label="while"]').forEach(el => {
        const node = findNodeById(state.program, el.closest('[data-id]')?.dataset.id);
        if (node) el.textContent = t('flow.while') + ' ' + node.condition;
    });
    document.querySelectorAll('[data-loop-label="do"]').forEach(el => {
        const node = findNodeById(state.program, el.closest('[data-id]')?.dataset.id);
        if (node) el.textContent = t('flow.do') + ' ' + node.condition;
    });
    document.querySelectorAll('[data-loop-label="for"]').forEach(el => {
        const node = findNodeById(state.program, el.closest('[data-id]')?.dataset.id);
        if (node) el.textContent = t('flow.for') + ' ' + node.variable + ' = ' + node.start + ' ' + t('flow.to') + ' ' + node.end + ' (' + node.step + ')';
    });
}

// Trova un nodo per ID (ricorsivo)
function findNodeById(block, id) {
    if (!block) return null;
    for (const node of block) {
        if (node.id === id) return node;
        if (node.type === 'if') {
            const r = findNodeById(node.trueBranch, id) || findNodeById(node.falseBranch, id);
            if (r) return r;
        } else if (node.body) {
            const r = findNodeById(node.body, id);
            if (r) return r;
        }
    }
    return null;
}

// Controlla se una finestra è visibile
function isWindowVisible(id) {
    const win = document.getElementById(id);
    if (!win) return false;
    const display = win.style.display;
    // display vuoto o 'none' => nascosta; qualsiasi altro valore (flex, block, '') e offsetHeight > 0 => visibile
    return display !== 'none' && win.offsetHeight > 0;
}

// Aggiorna tutte le finestre aperte
function refreshWindows() {
    if (isWindowVisible('variablesWindow')) {
        updateVariablesUI();
    }
    if (isWindowVisible('sourceWindow')) {
        renderSourceCode();
    }
    if (isWindowVisible('consoleWindow')) {
        const body = document.getElementById('consoleBody');
        if (body) body.scrollTop = body.scrollHeight;
    }
}
document.getElementById('dialogClose').addEventListener('click', closeDialog);
document.getElementById('editDialog').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') saveDialog();
    if (e.key === 'Escape') closeDialog();
});

// ============ EXPRESSION EVALUATION ============
function evalExpression(expr) {
    if (expr === '' || expr == null) return '';
    
    const jsStrings = [];
    // Sostituisce stringhe con placeholder, da ripristinare alla fine
    let js = expr.replace(/"((?:[^"\\]|\\.)*)"/g, (m) => '__STR' + (jsStrings.push(m) - 1) + '__');
    
    // Prima sostituiamo & singolo (concatenazione) con + (NON tocca && )
    js = js.replace(/(?<!&)&(?!&)/g, '+');
    
    // Poi gli operatori logici e di confronto
    js = js
        .replace(/\bAND\b/gi, '&&')
        .replace(/\bOR\b/gi, '||')
        .replace(/\bNOT\b/gi, '!')
        .replace(/\bTRUE\b/gi, 'true')
        .replace(/\bFALSE\b/gi, 'false')
        .replace(/\bmod\b/gi, '%')
        .replace(/\bdiv\b/gi, '/')
        .replace(/<>/g, '!=')
        .replace(/(?<![<>=!])=(?!=)/g, '==');
    
    // Funzioni built-in
    js = js
        .replace(/\bsqrt\s*\(/gi, 'Math.sqrt(')
        .replace(/\babs\s*\(/gi, 'Math.abs(')
        .replace(/\bsin\s*\(/gi, 'Math.sin(')
        .replace(/\bcos\s*\(/gi, 'Math.cos(')
        .replace(/\btan\s*\(/gi, 'Math.tan(')
        .replace(/\bpow\s*\(/gi, 'Math.pow(')
        .replace(/\blog\s*\(/gi, 'Math.log(')
        .replace(/\bint\s*\(/gi, 'Math.floor(')
        .replace(/\brandom\s*\(\s*\)/gi, 'Math.random()')
        .replace(/\blen\s*\(/gi, '__len(')
        .replace(/\bsize\s*\(/gi, '__len(')
        .replace(/\btoupper\s*\(/gi, '__upper(')
        .replace(/\btolower\s*\(/gi, '__lower(');
    
    // Ripristina stringhe
    js = js.replace(/__STR(\d+)__/g, (_, i) => jsStrings[+i]);
    
    // Variabili sostituite con accesso allo state
    try {
        const varsCtx = {};
        for (const k in state.variables) varsCtx[k] = state.variables[k].value;
        const fn = new Function('__vars', '__len', '__upper', '__lower', 
            'with(__vars) { return (' + js + '); }');
        return fn(varsCtx, 
            (v) => String(v).length, 
            (v) => String(v).toUpperCase(),
            (v) => String(v).toLowerCase());
    } catch (e) {
        throw new Error('Espressione non valida: ' + expr + ' (' + e.message + ')');
    }
}

// ============ INTERPRETER ============
async function highlightShape(id, dur) {
    const el = document.querySelector(`[data-id="${id}"]`);
    if (!el) return;
    const target = el.classList.contains('shape-if') 
        ? el.querySelector('.diamond-shape')
        : el.classList.contains('shape-loop')
        ? el.querySelector('.hexagon-shape')
        : el;
    target.classList.add('executing');
    await wait(dur || speedDelay());
    target.classList.remove('executing');
    
    if (state.stepMode) {
        await waitForResume();
    }
}

function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

function waitForResume() {
    return new Promise((resolve) => {
        const check = setInterval(() => {
            if (!state.paused || !state.running) {
                clearInterval(check);
                resolve();
            }
        }, 100);
    });
}

async function execBlock(block) {
    for (const node of block) {
        if (!state.running) return;
        while (state.paused && state.running) await wait(100);
        await execNode(node);
    }
}

async function execNode(node) {
    await highlightShape(node.id);
    
    switch (node.type) {
        case 'declare':
            declareVariable(node);
            break;
        case 'assign':
            assignVariable(node);
            break;
        case 'input':
            await readInput(node);
            break;
        case 'output':
            doOutput(node);
            break;
        case 'if':
            await execIf(node);
            break;
        case 'while':
            await execWhile(node);
            break;
        case 'do':
            await execDo(node);
            break;
        case 'for':
            await execFor(node);
            break;
        case 'call':
            evalExpression(node.expression);
            break;
        case 'comment':
            // niente
            break;
        case 'breakpoint':
            const cond = node.condition ? !!evalExpression(node.condition) : true;
            if (cond) {
                state.paused = true;
                addConsoleMessage(t('msg.breakpoint'), 'info');
                await waitForResume();
            }
            break;
    }
    updateVariablesUI();
}

function declareVariable(node) {
    const initValue = {
        Integer: 0,
        Real: 0.0,
        String: '',
        Boolean: false
    }[node.varType];
    
    if (node.isArray) {
        const size = parseInt(evalExpression(node.size)) || 10;
        const arr = new Array(size).fill(initValue);
        state.variables[node.name] = { value: arr, type: node.varType + ' Array', changed: true };
    } else {
        state.variables[node.name] = { value: initValue, type: node.varType, changed: true };
    }
}

function assignVariable(node) {
    const value = evalExpression(node.expression);
    // Supporto per array: var[idx]
    const m = node.variable.match(/^(\w+)\s*\[\s*(.+)\s*\]$/);
    if (m) {
        const idx = parseInt(evalExpression(m[2]));
        if (!state.variables[m[1]]) throw new Error(t('msg.undeclared') + m[1]);
        state.variables[m[1]].value[idx] = value;
        state.variables[m[1]].changed = true;
    } else {
        if (!state.variables[node.variable]) {
            // Auto-declare basato sul tipo del valore
            const tp = typeof value === 'number' ? (Number.isInteger(value) ? 'Integer' : 'Real') :
                      typeof value === 'boolean' ? 'Boolean' : 'String';
            state.variables[node.variable] = { value: value, type: tp, changed: true };
        } else {
            state.variables[node.variable].value = value;
            state.variables[node.variable].changed = true;
        }
    }
    // Aggiorna automaticamente la finestra variabili se aperta
    refreshWindows();
}

async function readInput(node) {
    return new Promise((resolve) => {
        showConsole();
        const inputArea = document.getElementById('consoleInputArea');
        inputArea.style.display = 'flex';
        const inp = document.getElementById('consoleInput');
        inp.value = '';
        inp.focus();
        
        const submitBtn = document.getElementById('consoleSubmit');
        
        const handle = () => {
            const val = inp.value;
            inputArea.style.display = 'none';
            const v = state.variables[node.variable];
            let parsed = val;
            if (v) {
                if (v.type === 'Integer') parsed = parseInt(val);
                else if (v.type === 'Real') parsed = parseFloat(val);
                else if (v.type === 'Boolean') parsed = /^(true|1|si|sì|yes)$/i.test(val);
                v.value = parsed;
                v.changed = true;
            } else {
                // Auto-declare String
                const num = parseFloat(val);
                if (!isNaN(num) && String(num) === val.trim()) {
                    state.variables[node.variable] = { 
                        value: num, 
                        type: Number.isInteger(num) ? 'Integer' : 'Real', 
                        changed: true 
                    };
                } else {
                    state.variables[node.variable] = { value: val, type: 'String', changed: true };
                }
            }
            addConsoleMessage(val, 'input');
            submitBtn.removeEventListener('click', handle);
            inp.removeEventListener('keydown', keyHandle);
            resolve();
        };
        
        const keyHandle = (e) => {
            if (e.key === 'Enter') { e.preventDefault(); handle(); }
        };
        
        submitBtn.addEventListener('click', handle);
        inp.addEventListener('keydown', keyHandle);
    });
}

function doOutput(node) {
    showConsole();
    const result = evalExpression(node.expression);
    let text = result;
    if (typeof result === 'number') {
        text = Number.isInteger(result) ? String(result) : String(result);
    }
    addConsoleMessage(String(text), 'output');
}

async function execIf(node) {
    const cond = !!evalExpression(node.condition);
    if (cond) {
        await execBlock(node.trueBranch);
    } else {
        await execBlock(node.falseBranch);
    }
}

async function execWhile(node) {
    let iter = 0;
    while (state.running && evalExpression(node.condition)) {
        if (++iter > 100000) throw new Error(t('msg.infinite'));
        await highlightShape(node.id);
        await execBlock(node.body);
    }
}

async function execDo(node) {
    let iter = 0;
    do {
        if (++iter > 100000) throw new Error(t('msg.infinite'));
        if (!state.running) return;
        await execBlock(node.body);
        await highlightShape(node.id);
    } while (state.running && evalExpression(node.condition));
}

async function execFor(node) {
    const start = parseFloat(evalExpression(node.start));
    const end = parseFloat(evalExpression(node.end));
    const step = parseFloat(evalExpression(node.step));
    const dir = node.direction;
    
    if (!state.variables[node.variable]) {
        state.variables[node.variable] = { value: start, type: 'Integer', changed: true };
    }
    state.variables[node.variable].value = start;
    state.variables[node.variable].changed = true;
    
    let iter = 0;
    while (state.running) {
        if (++iter > 100000) throw new Error(t('msg.infinite'));
        const v = state.variables[node.variable].value;
        if (dir === 'up' ? v > end : v < end) break;
        await highlightShape(node.id);
        await execBlock(node.body);
        if (!state.variables[node.variable]) break;
        state.variables[node.variable].value += (dir === 'up' ? step : -step);
        state.variables[node.variable].changed = true;
    }
}

// ============ RUN CONTROL ============
async function runProgram(stepMode = false) {
    if (state.running) return;
    state.running = true;
    state.paused = false;
    state.stepMode = stepMode;
    state.variables = {};
    showConsole();
    clearConsole();
    addConsoleMessage(t('msg.started'), 'info');
    updateVariablesUI();
    if (document.getElementById('statusMessage')) {
        document.getElementById('statusMessage').textContent = '▶ ' + t('menu.run');
    }
    
    try {
        await execBlock(state.program);
        if (state.running) addConsoleMessage(t('msg.terminated'), 'info');
    } catch (e) {
        addConsoleMessage(t('msg.error') + e.message, 'error');
    }
    state.running = false;
    state.paused = false;
    state.stepMode = false;
    if (document.getElementById('statusMessage')) {
        document.getElementById('statusMessage').textContent = t('msg.ready');
    }
}

function pauseProgram() {
    if (state.running) state.paused = !state.paused;
}

function stopProgram() {
    state.running = false;
    state.paused = false;
    document.querySelectorAll('.executing').forEach(e => e.classList.remove('executing'));
    addConsoleMessage(t('msg.stopped'), 'info');
    if (document.getElementById('statusMessage')) {
        document.getElementById('statusMessage').textContent = t('msg.ready');
    }
}

// ============ CONSOLE WINDOW ============
function showConsole() {
    document.getElementById('consoleWindow').style.display = 'flex';
}

function addConsoleMessage(text, type) {
    const body = document.getElementById('consoleBody');
    const div = document.createElement('div');
    div.className = 'chat-bubble ' + type;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function clearConsole() {
    document.getElementById('consoleBody').innerHTML = '';
}

// ============ VARIABLES WINDOW ============
function updateVariablesUI() {
    const tbody = document.getElementById('variablesBody');
    if (!tbody) return;
    const keys = Object.keys(state.variables);
    if (keys.length === 0) {
        tbody.innerHTML = `<tr class="empty-row"><td colspan="3">${escapeHtml(t('var.empty'))}</td></tr>`;
        return;
    }
    tbody.innerHTML = '';
    keys.forEach(k => {
        const v = state.variables[k];
        const tr = document.createElement('tr');
        if (v.changed) {
            tr.classList.add('var-changed');
            setTimeout(() => v.changed = false, 100);
        }
        const baseType = v.type.replace(' Array', '');
        tr.innerHTML = `
            <td>${escapeHtml(k)}</td>
            <td class="var-type-${baseType}">${escapeHtml(v.type)}</td>
            <td>${escapeHtml(Array.isArray(v.value) ? '[' + v.value.join(', ') + ']' : String(v.value))}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ============ SOURCE CODE GENERATOR ============
function renderSourceCode() {
    const lang = document.getElementById('languageSelect').value;
    const code = generateCode(state.program, lang, 0);
    const wrapper = document.getElementById('sourceCode');
    
    let full = '';
    if (lang === 'python') {
        full = code;
    } else if (lang === 'java' || lang === 'csharp' || lang === 'cpp' || lang === 'c') {
        full = wrapMain(code, lang);
    } else if (lang === 'javascript') {
        full = '// Programma Flowgorithm\nfunction main() {\n' + code + '}\nmain();';
    } else if (lang === 'vb') {
        full = 'Module Main\n  Sub Main()\n' + code + '  End Sub\nEnd Module';
    } else {
        // Auto pseudocode
        full = 'Inizio Main\n' + code + 'Fine Main';
    }
    
    wrapper.textContent = full;
}

function wrapMain(body, lang) {
    if (lang === 'java') {
        return 'public class Main {\n  public static void main(String[] args) {\n' + body + '  }\n}';
    } else if (lang === 'csharp') {
        return 'using System;\n\nclass Program {\n  static void Main() {\n' + body + '  }\n}';
    } else if (lang === 'cpp') {
        return '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n' + body + '  return 0;\n}';
    } else if (lang === 'c') {
        return '#include <stdio.h>\n\nint main() {\n' + body + '  return 0;\n}';
    }
    return body;
}

function generateCode(block, lang, indent) {
    let code = '';
    const ind = '  '.repeat(indent + 1);
    for (const node of block) {
        code += generateNode(node, lang, indent + 1);
    }
    return code;
}

function generateNode(node, lang, indent) {
    const ind = '  '.repeat(indent);
    switch (node.type) {
        case 'declare':
            return ind + genDeclare(node, lang) + '\n';
        case 'assign':
            return ind + genAssign(node, lang) + '\n';
        case 'input':
            return ind + genInput(node, lang) + '\n';
        case 'output':
            return ind + genOutput(node, lang) + '\n';
        case 'if':
            return genIf(node, lang, indent);
        case 'while':
            return genWhile(node, lang, indent);
        case 'do':
            return genDo(node, lang, indent);
        case 'for':
            return genFor(node, lang, indent);
        case 'call':
            return ind + node.expression + (lang === 'python' ? '' : ';') + '\n';
        case 'comment':
            const c = { python: '#', vb: "'", auto: '//' }[lang] || '//';
            return ind + c + ' ' + node.text + '\n';
        case 'breakpoint':
            return ind + '// BREAKPOINT\n';
    }
    return '';
}

function genDeclare(node, lang) {
    const types = {
        c: { Integer: 'int', Real: 'double', String: 'char[100]', Boolean: 'int' },
        cpp: { Integer: 'int', Real: 'double', String: 'string', Boolean: 'bool' },
        csharp: { Integer: 'int', Real: 'double', String: 'string', Boolean: 'bool' },
        java: { Integer: 'int', Real: 'double', String: 'String', Boolean: 'boolean' },
        javascript: { Integer: 'let', Real: 'let', String: 'let', Boolean: 'let' },
        vb: { Integer: 'Integer', Real: 'Double', String: 'String', Boolean: 'Boolean' },
        auto: { Integer: 'Intero', Real: 'Reale', String: 'Stringa', Boolean: 'Booleano' },
    };
    if (lang === 'python') {
        const init = { Integer: '0', Real: '0.0', String: '""', Boolean: 'False' }[node.varType];
        return node.isArray ? `${node.name} = [${init}] * ${node.size}` : `${node.name} = ${init}`;
    }
    if (lang === 'vb') {
        return `Dim ${node.name} As ${types.vb[node.varType]}`;
    }
    if (lang === 'javascript') {
        return node.isArray ? `let ${node.name} = new Array(${node.size});` : `let ${node.name};`;
    }
    if (lang === 'auto') {
        return node.isArray 
            ? `Dichiara ${node.name}[${node.size}] di tipo ${types.auto[node.varType]}` 
            : `Dichiara ${node.name} di tipo ${types.auto[node.varType]}`;
    }
    const t = (types[lang] || types.java)[node.varType];
    return node.isArray ? `${t} ${node.name}[${node.size}];` : `${t} ${node.name};`;
}

function genAssign(node, lang) {
    const e = convertExpr(node.expression, lang);
    const semi = (lang === 'python' || lang === 'vb') ? '' : ';';
    return `${node.variable} = ${e}${semi}`;
}

function genInput(node, lang) {
    if (lang === 'python') return `${node.variable} = input()`;
    if (lang === 'java') return `${node.variable} = sc.nextLine();`;
    if (lang === 'csharp') return `${node.variable} = Console.ReadLine();`;
    if (lang === 'cpp') return `cin >> ${node.variable};`;
    if (lang === 'c') return `scanf("%d", &${node.variable});`;
    if (lang === 'javascript') return `${node.variable} = prompt();`;
    if (lang === 'vb') return `${node.variable} = Console.ReadLine()`;
    return `Leggi ${node.variable}`;
}

function genOutput(node, lang) {
    const e = convertExpr(node.expression, lang);
    if (lang === 'python') return `print(${e})`;
    if (lang === 'java') return `System.out.println(${e});`;
    if (lang === 'csharp') return `Console.WriteLine(${e});`;
    if (lang === 'cpp') return `cout << ${e} << endl;`;
    if (lang === 'c') return `printf("%s\\n", ${e});`;
    if (lang === 'javascript') return `console.log(${e});`;
    if (lang === 'vb') return `Console.WriteLine(${e})`;
    return `Scrivi ${e}`;
}

function genIf(node, lang, indent) {
    const ind = '  '.repeat(indent);
    const cond = convertExpr(node.condition, lang);
    let code = '';
    if (lang === 'python') {
        code = `${ind}if ${cond}:\n` + generateCode(node.trueBranch, lang, indent);
        if (node.falseBranch.length) code += `${ind}else:\n` + generateCode(node.falseBranch, lang, indent);
    } else if (lang === 'vb') {
        code = `${ind}If ${cond} Then\n` + generateCode(node.trueBranch, lang, indent);
        if (node.falseBranch.length) code += `${ind}Else\n` + generateCode(node.falseBranch, lang, indent);
        code += `${ind}End If\n`;
    } else if (lang === 'auto') {
        code = `${ind}Se ${cond} Allora\n` + generateCode(node.trueBranch, lang, indent);
        if (node.falseBranch.length) code += `${ind}Altrimenti\n` + generateCode(node.falseBranch, lang, indent);
        code += `${ind}Fine Se\n`;
    } else {
        code = `${ind}if (${cond}) {\n` + generateCode(node.trueBranch, lang, indent) + `${ind}}`;
        if (node.falseBranch.length) code += ` else {\n` + generateCode(node.falseBranch, lang, indent) + `${ind}}`;
        code += '\n';
    }
    return code;
}

function genWhile(node, lang, indent) {
    const ind = '  '.repeat(indent);
    const cond = convertExpr(node.condition, lang);
    if (lang === 'python') return `${ind}while ${cond}:\n` + generateCode(node.body, lang, indent);
    if (lang === 'vb') return `${ind}While ${cond}\n` + generateCode(node.body, lang, indent) + `${ind}End While\n`;
    if (lang === 'auto') return `${ind}Mentre ${cond} Esegui\n` + generateCode(node.body, lang, indent) + `${ind}Fine Mentre\n`;
    return `${ind}while (${cond}) {\n` + generateCode(node.body, lang, indent) + `${ind}}\n`;
}

function genDo(node, lang, indent) {
    const ind = '  '.repeat(indent);
    const cond = convertExpr(node.condition, lang);
    if (lang === 'python') return `${ind}while True:\n` + generateCode(node.body, lang, indent) + `${ind}  if not (${cond}): break\n`;
    if (lang === 'vb') return `${ind}Do\n` + generateCode(node.body, lang, indent) + `${ind}Loop While ${cond}\n`;
    if (lang === 'auto') return `${ind}Esegui\n` + generateCode(node.body, lang, indent) + `${ind}Mentre ${cond}\n`;
    return `${ind}do {\n` + generateCode(node.body, lang, indent) + `${ind}} while (${cond});\n`;
}

function genFor(node, lang, indent) {
    const ind = '  '.repeat(indent);
    if (lang === 'python') {
        return `${ind}for ${node.variable} in range(${node.start}, ${node.end}+1, ${node.step}):\n` + generateCode(node.body, lang, indent);
    }
    if (lang === 'vb') {
        return `${ind}For ${node.variable} = ${node.start} To ${node.end} Step ${node.step}\n` + generateCode(node.body, lang, indent) + `${ind}Next\n`;
    }
    if (lang === 'auto') {
        return `${ind}Per ${node.variable} da ${node.start} a ${node.end} con passo ${node.step}\n` + generateCode(node.body, lang, indent) + `${ind}Fine Per\n`;
    }
    const op = node.direction === 'up' ? '<=' : '>=';
    const inc = node.direction === 'up' ? '+=' : '-=';
    return `${ind}for (${node.variable} = ${node.start}; ${node.variable} ${op} ${node.end}; ${node.variable} ${inc} ${node.step}) {\n` 
        + generateCode(node.body, lang, indent) + `${ind}}\n`;
}

function convertExpr(expr, lang) {
    let r = expr;
    if (lang === 'python') {
        r = r.replace(/\bAND\b/gi, 'and').replace(/\bOR\b/gi, 'or').replace(/\bNOT\b/gi, 'not ');
        r = r.replace(/&/g, '+');
    } else if (lang === 'vb' || lang === 'auto') {
        // keep as-is for AND/OR/NOT
    } else {
        r = r.replace(/\bAND\b/gi, '&&').replace(/\bOR\b/gi, '||').replace(/\bNOT\b/gi, '!');
    }
    return r;
}

// ============ TOOLBAR ACTIONS ============
document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => handleAction(btn.dataset.tool));
});

document.querySelectorAll('.menu-option').forEach(opt => {
    opt.addEventListener('click', () => {
        handleAction(opt.dataset.action);
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    });
});

function handleAction(action) {
    switch (action) {
        case 'new':
            if (confirm(t('msg.newConfirm'))) {
                state.program = [];
                state.variables = {};
                state.nextId = 1;
                render();
                clearConsole();
                updateVariablesUI();
            }
            break;
        case 'open':
            const fi = document.createElement('input');
            fi.type = 'file';
            fi.accept = '.json,.fprg';
            fi.onchange = (e) => {
                const f = e.target.files[0];
                if (!f) return;
                const r = new FileReader();
                r.onload = (ev) => {
                    try {
                        const content = ev.target.result;
                        if (f.name.endsWith('.fprg')) {
                            // Prova a caricare come XML Flowgorithm (semplificato)
                            // Per ora, carichiamo solo il formato JSON interno
                            // Il formato .fprg nativo richiede il software Flowgorithm
                            alert('Il formato .fprg nativo di Flowgorithm non è completamente supportato.\nCaricamento come JSON...');
                            state.program = JSON.parse(content);
                        } else {
                            state.program = JSON.parse(content);
                        }
                        render();
                    } catch(err) { 
                        alert(t('msg.invalidFile') + '\n' + err.message); 
                    }
                };
                r.readAsText(f);
            };
            fi.click();
            break;
        case 'save':
        case 'saveas':
            // Salva in formato JSON compatibile (può essere rinominato in .fprg)
            const jsonContent = JSON.stringify(state.program, null, 2);
            const jsonBlob = new Blob([jsonContent], {type:'application/json'});
            const jsonUrl = URL.createObjectURL(jsonBlob);
            const jsonA = document.createElement('a');
            jsonA.href = jsonUrl; 
            jsonA.download = 'programma.fprg.json'; 
            jsonA.click();
            URL.revokeObjectURL(jsonUrl);
            break;
        case 'run':
            runProgram(false);
            break;
        case 'step':
            runProgram(true);
            break;
        case 'pause':
            pauseProgram();
            break;
        case 'stop':
            stopProgram();
            break;
        case 'speed':
            showSpeedWindow();
            break;
        case 'zoomin':
            state.zoom = Math.min(200, state.zoom + 10);
            document.getElementById('flowchartContent').style.transform = `scale(${state.zoom/100})`;
            document.getElementById('flowchartContent').style.transformOrigin = 'top center';
            updateStatus();
            break;
        case 'zoomout':
            state.zoom = Math.max(50, state.zoom - 10);
            document.getElementById('flowchartContent').style.transform = `scale(${state.zoom/100})`;
            document.getElementById('flowchartContent').style.transformOrigin = 'top center';
            updateStatus();
            break;
        case 'style':
            showFlowchartStyleWindow();
            break;
        case 'console': {
            const cw = document.getElementById('consoleWindow');
            const isHidden = cw.style.display === 'none';
            cw.style.display = isHidden ? 'flex' : 'none';
            if (isHidden) {
                // Porta la finestra in primo piano e scrolla in fondo
                const body = document.getElementById('consoleBody');
                if (body) body.scrollTop = body.scrollHeight;
            }
            break;
        }
        case 'variables': {
            const vw = document.getElementById('variablesWindow');
            const isHidden = vw.style.display === 'none';
            vw.style.display = isHidden ? 'flex' : 'none';
            if (isHidden) {
                // Forza aggiornamento quando la si apre
                updateVariablesUI();
            }
            break;
        }
        case 'sourceview': {
            const sw = document.getElementById('sourceWindow');
            const isHidden = sw.style.display === 'none';
            sw.style.display = isHidden ? 'flex' : 'none';
            if (isHidden) {
                renderSourceCode();
            }
            break;
        }
        case 'layout': {
            // Mostra tutte le finestre contemporaneamente
            const consoleW = document.getElementById('consoleWindow');
            const varW = document.getElementById('variablesWindow');
            const srcW = document.getElementById('sourceWindow');
            consoleW.style.display = 'flex';
            varW.style.display = 'flex';
            srcW.style.display = 'flex';
            // Posizionamento standard
            consoleW.style.left = ''; consoleW.style.right = '30px';
            consoleW.style.top = ''; consoleW.style.bottom = '30px';
            varW.style.left = '30px'; varW.style.right = '';
            varW.style.top = ''; varW.style.bottom = '30px';
            srcW.style.left = ''; srcW.style.right = '30px';
            srcW.style.top = '100px'; srcW.style.bottom = '';
            updateVariablesUI();
            renderSourceCode();
            break;
        }
        case 'about':
            showAbout();
            break;
        case 'colorscheme':
            showColorSchemeWindow();
            break;
        case 'language':
            showLanguageWindow();
            break;
        case 'functions':
            showFunctionManagerWindow();
            break;
        case 'attributes':
            showAttributesWindow();
            break;
        case 'print':
            showPrintWindow();
            break;
        case 'layout':
            showLayoutWindows();
            break;
        case 'exportimg':
            showExportImageWindow();
            break;
        case 'exportvec':
            showExportVectorWindow();
            break;
        default:
            // ignore
    }
}

// ============ MENU BAR INTERACTION ============
document.querySelectorAll('.menu-bar > .menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
    });
    item.addEventListener('mouseenter', () => {
        const anyActive = document.querySelector('.menu-item.active');
        if (anyActive) {
            document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
            item.classList.add('active');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-item')) {
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    }
});

// ============ FLOATING WINDOW CONTROLS ============
document.getElementById('consoleClose').addEventListener('click', () => {
    document.getElementById('consoleWindow').style.display = 'none';
});
document.getElementById('consoleClear').addEventListener('click', clearConsole);
document.getElementById('variablesClose').addEventListener('click', () => {
    document.getElementById('variablesWindow').style.display = 'none';
});
document.getElementById('sourceClose').addEventListener('click', () => {
    document.getElementById('sourceWindow').style.display = 'none';
});
document.getElementById('languageSelect').addEventListener('change', renderSourceCode);

// Drag floating windows
function makeDraggable(win) {
    const titleBar = win.querySelector('.floating-titlebar');
    let dragging = false, offX = 0, offY = 0;
    titleBar.addEventListener('mousedown', (e) => {
        if (e.target.closest('button')) return;
        dragging = true;
        const rect = win.getBoundingClientRect();
        offX = e.clientX - rect.left;
        offY = e.clientY - rect.top;
        win.style.right = 'auto';
        win.style.bottom = 'auto';
    });
    document.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        win.style.left = (e.clientX - offX) + 'px';
        win.style.top = (e.clientY - offY) + 'px';
    });
    document.addEventListener('mouseup', () => dragging = false);
}

makeDraggable(document.getElementById('consoleWindow'));
makeDraggable(document.getElementById('variablesWindow'));
makeDraggable(document.getElementById('sourceWindow'));

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
    if (document.getElementById('editDialog').classList.contains('visible')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    if (e.key === 'F5') { e.preventDefault(); runProgram(false); }
    else if (e.key === 'F6') { e.preventDefault(); runProgram(true); }
    else if (e.key === 'F7') { e.preventDefault(); pauseProgram(); }
    else if (e.key === 'F8') { e.preventDefault(); stopProgram(); }
    else if (e.ctrlKey && e.key === 's') { e.preventDefault(); handleAction('save'); }
    else if (e.ctrlKey && e.key === 'o') { e.preventDefault(); handleAction('open'); }
    else if (e.ctrlKey && e.key === 'n') { e.preventDefault(); handleAction('new'); }
    else if (e.ctrlKey && (e.key === '+' || e.key === '=')) { e.preventDefault(); handleAction('zoomin'); }
    else if (e.ctrlKey && e.key === '-') { e.preventDefault(); handleAction('zoomout'); }
});

// ============ BOOT ============
window.addEventListener('DOMContentLoaded', () => {
    // Carica lingua preferita
    let savedLang = 'it';
    try { savedLang = localStorage.getItem('flowgorithm_lang') || 'it'; } catch(e) {}
    const sel = document.getElementById('languageSelector');
    if (sel) {
        sel.value = savedLang;
        sel.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
    }
    try {
        const savedStyle = localStorage.getItem('flowgorithm_style');
        if (savedStyle) {
            document.documentElement.classList.add('style-' + savedStyle);
            state.flowchartStyle = savedStyle;
        }
    } catch(e) {}
    
    // Applica lingua (renderizza anche il flowchart)
    applyLanguage(savedLang);
    updateStatus();
});

// Click su forma per selezione
document.getElementById('flowchartCanvas').addEventListener('click', (e) => {
    document.querySelectorAll('.selected').forEach(s => s.classList.remove('selected'));
    if (e.target.closest('.shape-delete')) return;
    if (e.target.closest('.insertion-line')) return;
    const shape = e.target.closest('.flow-shape, .diamond-shape, .hexagon-shape');
    if (shape) {
        shape.classList.add('selected');
    }
});
