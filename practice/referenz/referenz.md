# Lösungsreferenz

Sie finden hier mögliche Ansätze für die Lösung der Übungen.
Für jede Aufgabe existiert ein Code-Stand im referenz Ordner.

## Aufgabe 1

Generierung der App.
`ng new Stones` 

Generierung des Moduls.
```bash
cd Stones
ng generate module Product
```

Starten der App.
`ng serve`

## Aufgabe 2

### Aufgabe 2.1

```
cd src/app/product/
ng g component product
```

Siehe Änderungen in 
- src/app/product/product.ts
- src/app/product/product.module.ts
- src/app/product/product/**
- src/app/app.component.html


### Aufgabe 2.2/3

vgl. Änderungen im app-Ordner

## Aufgabe 3



## Aufgabe 4

Siehe Änderungen in
- app.component.html
- utils/**
- product.module.ts

Generierung des Moduls "Utils" und der Pipe "Brutto"

```bash
cd src/app
ng g m Utils
cd utils
ng g p Brutto
```

Vergessen Sie nicht die Pipe im neuen Modul zu exportieren und das Utils-Modul im Produkt-Modul zu importieren.

## Aufgabe 5

```bash
npm install --save @angular/material
```

Die wesentlichen Änderungen befinden sich in 
- index.html
- app.component.html
- product.component.html
- product.module.ts (Import des Moduls)
- app.module.ts (Import des Moduls)

## Aufgabe 6

Sie Änderungen im reference Ordner. (v.a. product-form* und product-mdform*)

