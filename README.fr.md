# :cook: Bienvenue sur le dépôt de Villa Rosa ! :bouquet:
🚀 Version 1.0 ([English](https://github.com/axel-lgt/villa-rosa/blob/master/README.md), [Français](https://github.com/axel-lgt/villa-rosa/blob/master/README.fr.md))

<p align="center"><img src="https://media.giphy.com/media/LVPILwcWdXs32Zq1vN/giphy.gif"></img></p>

Villa Rosa est un petit projet de site vitrine one page d'un faux restaurant que j'ai imaginé. Ce projet créé avec **React** va droit au but et a été imaginé comme un moyen pour promouvoir un restaurant appelé Villa Rosa. Le site est divisé en trois catégories: Home, Services et Contact. Il utilise aussi un carousel **SwiperJS** et peut être navigué via un header.

### Accédez au site [ici](https://villarosa.netlify.app)

![Size](https://github-size-badge.herokuapp.com/axel-lgt/museek.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Technologies
Afin de pouvoir créer ce projet, j'ai utilisé les technologies suivantes:


### Front-end
- React
- React Scroll
- HTML
- CSS
- SASS
- SwiperJS
- JavaScript

## Hiérarchie des fichiers
Le site a été déployé sur [Netlify](https://villarosa.netlify.app).

### Front-end

Afin d'arriver à mon but de site one page, j'ai séparé chaque catégorie (Home, Services et Contact) en composants avec une hauteur de 100vh. J'ai aussi utilisé le module **React Scroll** pour gérer le header et le défilement fluide vers les catégories.

Dans le composant Home, j'ai utilisé **SwiperJS** pour créer un carousel empilé avec des images que j'ai trouvées sur **Unsplash**.

Dans le composant Services, j'ai fait une gille responsive avec les icônes des services du restaurant. Quand une icône est cliquée, un onglet s'ouvre avec le nom et la description du service. De plus, j'ai créé un hook custom dans **useOutsideClick.js** afin de fermer l'onglet quand un autre est cliqué ou si l'utilisateur clique en dehors de la grille.

Merci d'avoir regardé mon travail, bon appétit! :cook:
