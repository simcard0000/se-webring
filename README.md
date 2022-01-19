 
![active development](https://img.shields.io/badge/active%20dev-yes-brightgreen.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/simcard0000/se-webring.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d0372fe9-b593-49b5-a586-48bd279d11b7/deploy-status)](https://app.netlify.com/sites/eager-mccarthy-ee07e5/deploys)
# se-webring
<img alt="se-webring icon" src="https://github.com/simcard0000/se-webring/blob/main/assets/logo/logo_bg_b.png" width="100" height="100">
💜A webring for Software Engineering (SE) students at the University of Waterloo.

### What's a webring?
A webring is a group of websites linked together in a circular manner, centered around a common theme. They were a big thing in the 90s, as they were used as a sort of search engine optimization technique. The idea behind the [SE Webring](https://se-webring.xyz/) is to have a central place list all websites (personal sites/portfolios) of current and prior SE students and make them more discoverable/increase traffic.

### How do I join?
To add your site to the webring, you must be a current student or an alum of the [undergraduate Software Engineering program at the University of Waterloo](https://uwaterloo.ca/future-students/programs/software-engineering) (Waterloo, ON, Canada). You must also open a [pull request](https://github.com/simcard0000/se-webring/pulls) on this repo and include the information specified in the pull request template (full name, cohort year, full website URL, link to another profile to verify identity), and add your site entry to the end of the `allSites` array in the `se-webring.js` file (name, year, personal website). Add the `add site` label to your pull request, and assign as a reviewer either @simcard0000 or @janakitti. 

Your pull request will only be approved if you meet all requirements. After approval, you will have a deadline of 7 days (one week) henceforth to add a mention of the webring to your submitted site. This can either be a link back to the main site ([se-webring.xyz](https://se-webring.xyz/)), a link to the next person in the webring, or a link to both the previous and next person. For the latter two options, regarding the next person this might involve linking back to the first person in the ring and/or waiting for another pull request to be approved within those 7 days and linking to that new site instead. Feel free to use the images/icons in `se-webring/assets/logo` on your website.

### Credits 
Logo designs were made with [Figma](https://www.figma.com), and the search bar icon is from an icon library provided by [Blueprint.js](https://blueprintjs.com/docs/#icons). The fuzzy search implementation is from [Fuse.js](https://fusejs.io/), and the animated torus is made using [Three.js](https://threejs.org/). The website font is DM Mono (Colophon Foundry) via [Google Fonts](https://fonts.google.com/specimen/DM+Mono). 

~

Authors: Simran Thind (@simcard0000) and Janakitti Ratana-Rueangsri (@janakitti)
