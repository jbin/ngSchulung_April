# Angular CLI Kurzreferenz

Ein Überblick über die wichtigsten Kommandos im CLI.
Für weitergehende Optionen empfiehlt sich die exzellente Dokumentation auf Github: (https://github.com/angular/angular-cli/wiki/) 

## Neues Projekt anlegen

`ng new <pr­oje­ct-­nam­e> [options]`

	
### Opti­onen:
`--dry-run` (Führt das Kommando aus, aber ohne Files wirklich zu schreiben)  
`--verbose` (Output all the things­)  
`--skip-install` (Überspringt die npm Installation der Dependencies nach Anlegen der App)  
`--skip-git` (Überspringt die git Initialisierung)  
`--dire­ctory` (Expliziter Ordner, in dem die App generiert werden soll)  
`--prefix` (Angabe eines Applikationsweiten Prefixes für Komponenten)  
`--ng4` (Initialisiert das Projekt mit Angular Version 4)
`--style` (Definiert welcher Dateityp für styles verwendet werden soll z.B. css/scss/less)  

Beispiele:
```
ng new MyProject
ng new MyProject --dire­ctory c:/Rep­os/­Ang­ular --prefix stm
ng init MyProject --skip­-git
```

## Code generieren
`ng generate <ty­pe> [options]` (alias: `ng g`)

### Typen (Blueprints)

- class 
- component (Alias: c)
- directive
- enum
- guard
- interface
- module (Alias: m)
- pipe 
- service (Alias: s)

**Anwendung**
`ng g <blueprint> <pa­th/­nam­e> [options]`
	
Beispiele:
```
ng generate component MyComp­onent --flat --export
ng g service app/se­rvi­ces­/My­Ser­vice
```

## Workflow Tasks

#### `ng doc <ke­ywo­rd>`
	
Öffnet eine Suche in der Angular API Referenz im Browser


#### `ng serve`
	
Baut die Applikation und stellt sie via dev-server zur Verfügung (Live-Relod etc.)

Optionen:  
--port 


#### `ng test [options]`
	
Führt die Unittests mit Karma aus.

Optionen:  
`--code-coverage` Erstellt einen Code-Coverage Report im Projekt


#### `ng e2e`
	
Führt alle End-to-End Testsuiten mit Protractor aus.

#### `ng build`
	
Führt den Build durch und legt ihn im /dist Ordner ab.

Opti­onen:  
`--prod` (Kompiliert im Production Modus -> Optimierungen)  
`--env=<environment>` Spezifiziert, welche environment Konfiguration verwendet werden soll
