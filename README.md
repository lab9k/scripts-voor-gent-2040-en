# Vier scripts voor Gent 2040

## To do: 

* Add color to chapter titles
* If you click on next (volgende) while you are at page 'Vier scripts voor Gent' => do not jump from intentlevel 2 to intentlevel 3 but to 2
* E.g if you are at page 'Giganten Lift', only show its sub niveaus and hide the other
* ~~Add favicon~~

## Known bugs:

* ~~Position of menu icon on mobile~~

## To deploy:

* Clone this repository
* Navigate to that directory using the terminal / command line
* Make sure you have Ruby installed
* Install the Bundler gem:

``` shell
## Windows
gem install bundler

## Mac OSX
sudo gem install bundler
```

* Install the Jekyll gem:

``` shell
## Windows
gem install bundler jekyll

## Mac OSX
sudo gem install bundler jekyll
```

* To install bundle:
``` shell
bundle install
```


* To serve the project locally:

``` shell
bundle exec jekyll serve
```

or

``` shell
bundle exec jekyll serve --watch
```

to build as changes are being made.

## Gebruik:

Om pagina's bij te werken of toe te voegen navigeer je naar "chapters" en klik je het correcte hoofdstuk aan.

### Pagina's bijwerken

Het correcte hoofdstuk aanklikken en de tekst aanpassen. Dit project maakt gebruik Markdown (Kramdown).

### Pagina's bijmaken

Een pagina's bijmaken gebeurt zo:
1. Maak een nieuw bestand aan in chapters. Volg deze naamgeving: "chapter-NUMMER-part-NUMMER".
2. In de hoofding van het nieuwe bestand, maak een front matter aan. Dit gebeurt aan de hand van 3 streepjes boven en onder (zie andere chapters)
3. Pagina's hebben ten minste volgende variabelen nodig:
* layout (Altijd "chapter". Bepaald de styling van de pagina)
* title (Wordt gebruikt als titel bovenaan de pagina, als titel van het tabblad in de browser en in de breadcrumb)
* chapter (Wordt gebruikt voor breadcrumb)
* permalink (Wordt gebruikt als URL)
* part (Wordt gebruikt voor breadcrumb)
* indentlevel (1 - 4. Bepaald hoeveel het hoofdstuk inspringt in de navigatie)
4. Let wel: De volgorde van de bestanden in "chapters" is de volgorde waarin ze worden meegegeven in de navigatie

### Download knop
Op de voorpagina van de site kan men de PDF downloaden. Om een nieuwe versie van de PDF ter beschikking te stellen drop je deze nieuwe versie in de "download" map en commit je deze naar Github. Zorg er wel voor dat de benaming identiek is aan de vorige versie.


## Github pages

View this project on Github Pages: https://lab9k.gent/scripts-voor-gent-2040/

To update the project on Github Pages, simply push changes to the master branch.