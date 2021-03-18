# Nook's Online Summer Camp

<img src="https://media.giphy.com/media/h8ISB2nUVITEWjVgGo/giphy.gif"  width="75%">

## :shipit: Mission

This is a group assignment called "Event Invitation" where my Web Dev class have been coupled with the IP Graphical Production & Form class.
Our mission is to create an event invitation that communicates with targeted visitors through multiple channels.
We get to decide ourselves which company/organization and what kind of event to create.
The event can be either ficticious or something reoccuring.

Me and Josefin (from IP20) decided to go with Animal Crossing and the publishing company Nintendo.
Our idea is to create an event based off of Tom Nook's company and the static members of the island.
We are thinking K.K. will be there to throw a concert and a selected few will recieve QR invitations and goodie bags etc.

<details><summary> :love_letter: <b> Project requirements:</b></summary>

- Create a landing page that follows the same graphical style as the chosen company.
- The site has to be mobile first and follow the [WCAG](https://www.a11yproject.com/checklist/) standard.
- The site should have at least five animations of which one has to be a so called "in animation".
- The site should have a CTA where the visitors of the site can register to a form. The form only needs to be shown visually.
- The landing page should be personalized by a specific link that is sent out by [query parameters](https://davidwalsh.name/query-string-javascript). Suggestions on how to go about this could be for example through names, countries, images, jobs etc.
- The site should be built statically through CSS, HTML and JavaScript.
- The landing page should from day one be pushed up to a public repo on GitHub.
- The landing page should be uploaded through a hosting such as Netlify, Vercel or GitHub Pages.
- The landing page should be optimized and have the highest score possible at https://web.dev/​
- Every group should leave a review to another pre-selected group the day before presentations. Code reviews are to be sent through pull requests.

</details>

[![Netlify Status](https://api.netlify.com/api/v1/badges/cafdded0-d687-45e1-9e15-568bd5528825/deploy-status)](https://app.netlify.com/sites/event-invitation/deploys)

## :octocat: Instructions

_Option 1 - The fun way:_ Use this following fictional invite card's QR code to access the project to see the applied URL query parameters in action:
<img src="/public/assets/img/leifs-invite.png" alt="Ficticious e-vite with qr code on it, that takes you to the website." width="75%">

<br>

_Option 2 - The easy way:_ See the project hosted live on [this link](https://nooks-online-summer-camp.netlify.app/).

<br>

_Option 3 - The trickier way:_
1. Clone this repository onto your computer. 
2. In your CLI type: `git clone https://github.com/mogrim-91/Nooks-Online-Summer-Camp.git`
3. Type `cd Nooks-Online-Summer-Camp/`
4. Followed by these three commands: `npm install`, `npm run build` and lastly `npm run dev`
6. Your CLI should now have given you a localhost to access the project from. Type it in your url on your local browser and access the project from there.

## :mag: Code Review

By [Joakim Sjögren](https://github.com/JoakimSjogren):

- Great structure with the files!
- preloader.js #5, Index.js #5: You have added eventlisteners but not added anything in them.
- Well done with adding comments throughout the project, makes it easy to understand.
- You have some images that go out of frame. There for, a horizontal scrollbar at the bottom appears.
  Maybe you can solve this by using: (overflow-x: hidden).
- index.html #113: I would have used a p tag here instead of a span.
  but i would have kept the span tag on line #114.

> Great job! :)

## :man_technologist: Creators

- [Dante Mogrim](https://github.com/mogrim-91)
- [Josefin Eldh (IP20)](https://josefineldh.com)

## :blue_car: License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
