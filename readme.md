# MediaStream plus - a simple media website in Vue and Vite
Site pour parcourir une liste de differents media

## Fonctionnalité principales
- Liste de film
- Liste de serie
- Recupere les media via une API

## Configuration requise
- node.js v21
- npm

## Instruction d'installation

### Via source

- cloner le dépot : `git clone https://github.com/Vivien-Parsis/vue-project && cd vue-project`
- dans le repertoire, pour installer les dependances : `npm i`
- pour le lancer le serveur : `npm run dev`

### Via dockerFile

- cloner le dépot : `git clone https://github.com/Vivien-Parsis/vue-project && cd vue-project`
- build l'image : `docker build -t vite_app .`
- lancer l'image : `docker run -p 8000:8000 --name vite_app vite_app`

## Adresse

`http://localhost:8000`

## Exemple d'utilisation

### Avoir la liste de films

`http://localhost:8000/film`

### Avoir la liste de series

`http://localhost:8000/serie`

## lien vers les apis utilisées

- [API media](https://vue-project-api-57ap.onrender.com)

## Auteur

- [Vivien PARSIS](https://github.com/Vivien-Parsis)