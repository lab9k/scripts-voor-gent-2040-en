# Vier scripts voor Gent 2040

## To do: 

* Add color to chapter titles
* Add favicon

## To deploy:

* Clone this repository
* Navigate to that directory using the terminal / command line
* Make sure you have Ruby installed
* Install the Bundler gem:

``` shell
gem install bundler
```

* Install the Jekyll gem:

``` shell
gem install bundler jekyll
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
Het correcte hoofdstuk aanklikken en de tekst aanpassen. Gebruik Markdown (Kramdown).

### Pagina's bijmaken
Een pagina's bijmaken gebeurt zo:
1. Maak een nieuw bestand aan in chapters. Volg deze naamgeving: "chapter-NUMMER-part-NUMMER".
2. In de hoofding van het nieuwe bestand, maak een front matter aan. Dit gebeurt aan de hand van 3 streepjes boven en onder (zie andere chapters)
3. Pagina's hebben ten minste volgende variabelen nodig:
* layout (Altijd "chapter". Bepaald de styling van de pagina)
* title (Wordt gebruikt als titel bovenaan de pagina, als titel van het tabblad in de browser en in de breadcrumb)
* chapter (Wordt gebruik voor breadcrumb)
* permalink (Wordt gebruikt als URL)
* part (Wordt gebruikt voor breadcrumb)
* indentlevel (1 - 4. Bepaald hoeveel het hoofdstuk inspringt in de navigatie)
4. Let wel: De volgorde van de bestanden in "chapters" is de volgorde waarin ze worden meegegeven in de navigatie


## Github pages

View this project on Github Pages: https://lab9k.gent/scripts-voor-gent-2040/

To update the project on Github Pages, simply push changes to the master branch.