# :cook: Welcome to the Villa Rosa repository! :bouquet:
🚀 Version 1.0 ([English](https://github.com/axel-lgt/villa-rosa/blob/master/README.md), [Français](https://github.com/axel-lgt/villa-rosa/blob/master/README.fr.md))

<p align="center"><img src="https://media.giphy.com/media/LVPILwcWdXs32Zq1vN/giphy.gif"></img></p>

Villa Rosa is a small project for a one page mock restaurant showcase website that I imagined. This straight forward project was made in **React** and was imagined as a way to promote a restaurant called Villa Rosa. The website is divided in three categories: Home, Services and Contact. It also uses a **SwiperJS** carousel and can be browsed with a header.

### Check the website [here](https://villarosa.netlify.app)

![Size](https://github-size-badge.herokuapp.com/axel-lgt/museek.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Technologies
In order to make this project, I used the following technologies:


### Front-end
- React
- React Scroll
- HTML
- CSS
- SASS
- SwiperJS
- JavaScript

## File hierarchy
The wesbite was deployed on [Netlify](https://villarosa.netlify.app).

### Front-end
In order to achieve my goal of making a one page website, I seperated each category (Home, Services and Contact) in a component with a height of 100vh. I also used a module called **React Scroll** to handle the header and the smooth scrolling to the categories.

In the Home component, I used **SwiperJS** to create a stacked carousel with images I found on **Unsplash**.

In the Services component, I made a responsive grid with the restaurant's services icons. When an icon is clicked, a tab opens with the name and description of the service. Moreover, I made a custom hook in **useOutsideClick.js** to close the tab when another one is clicked or if the user clicks outside the grid.

Thank you for checking out my work, bon appétit! :cook:
