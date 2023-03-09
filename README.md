# <p align = "center"> NTT Data Movies </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/178094665-f46c6a55-c821-42a0-bb9c-d5dd5f2d69fa.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-lucaslafere-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/lucaslafere/nttdata-challenge-client?color=4dae71&style=flat-square" />
</p>

## :clipboard: Description

NTT Data Movies is a small project aimed towards consuming an API, to retrieve data from movies listed on a 3rd party API, using my own API, which is in another repository.

## How does it work? Step-by-step (with screenshots)

<br>
<details>
  <summary>Click here to show the screenshots!</summary>

### This is the default view you get when opening the app:

<br>

## ![default view](/public/default-view.jpeg)

<br>

### After that, simply search a movie in the input field provided, an click the Search button, which will get you some info:

<br>

![desktop search](/public/desktop-search.jpeg)

### You can also use it on mobile, which looks like this:

![mobile search](/public/mobile-search.jpeg)
![mobile body](/public//mobile-search-2.jpeg)

</details>

<br>
## :computer: Technologies and Concepts

- React
- Redux
- UI5 Web Components
- SCSS
- User-friendly UI

---

## 🏁 Running the app

This project was initialized with [Create React App](https://github.com/facebook/create-react-app), so make sure you've got the latest stable version of both [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository in your machine:

```
git clone https://github.com/lucaslafere/nttdata-challenge-client
```

Then, inside the cloned folder, run the following command to install the dependencies:

```
npm install
```

Then, create a .env file in the root folder, the same directory as the ".env.example" file. Use it to setup your API URL, which I provided in .env.example for the sake of easier testing.

When finished, just start the server, using the following command:

```
npm run start
```

## :stop_sign: Don't forget to follow the steps mentioned above with the back-end [repository](https://github.com/lucaslafere/nttdata-challenge-server) to run the API locally, so you can get the full experience.
