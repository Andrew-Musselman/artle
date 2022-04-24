## ARTLE

Welcome to Artle! A game where you guess the artist based on six pieces of art by that artist
When the page loads you will see a random piece of art
Every time you guess incorrectly you will be able to see another piece of art
If you guess correctly, or if you run out of guesses there will be some information about the artist

<img width="1437" alt="Screen Shot 2022-04-24 at 5 37 41 PM" src="https://user-images.githubusercontent.com/92277979/165001472-e13bc425-9e90-4f16-b2f1-54c7d57e42fb.png">

<img width="976" alt="Screen Shot 2022-04-24 at 5 37 54 PM" src="https://user-images.githubusercontent.com/92277979/165001485-fb165925-41ce-4d19-9e6b-a79f49244425.png">

<img width="922" alt="Screen Shot 2022-04-24 at 5 38 02 PM" src="https://user-images.githubusercontent.com/92277979/165001492-be3d3c5d-ad6f-4a04-b75c-1006ef41840b.png">

<img width="566" alt="Screen Shot 2022-04-24 at 5 38 34 PM" src="https://user-images.githubusercontent.com/92277979/165001493-ee01730d-270f-42f7-880d-a1ddc55dcdb6.png">




## Contributors
- [Andrew Musselman](https://github.com/Andrew-Musselman)


## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%purple)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting Started
To get a local copy up and running follow these simple steps.

## Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:Andrew-Musselman/artle.git
   ```
2. `cd` into that directory
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server
   ```sh
   npm start
   ``` 

##  Wins 
- Creating complex game logic making a playable game
- Using React hooks
- utilizing async/await for fetch API

## Challenges
- Stubbing network requests in cypress testing - because some requests were done within a for loop the stubbing logic was a challenge
- The endpoints for the database did not work as I expected but I did not realize until nearing the end of the project, so I had to get a little creative
- Error handling with try/catch for network requests - lots of trial and error here


## Future State
- Creating my own database so I could have more control over the images and information the user can see
- Implementing functionality that only allows users to play the game once per day - similar to other games of this nature i.e Wordle
- Utilizing local storage to store game stats - and include other stats like win streak, win percent

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

