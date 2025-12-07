# Project Title

Random User Generator

## Description
This project generate a random user profile from external api
* Each Profile has 5 parts:
1. Username
2. Date of Birth
3. Email
4. Phone no
5. Location
* When the user clicks the button:
1. The details appear 

## Features
1. Button hover
2. Button loading + disabled state
3. Responsive layout for mobile and big screens
4. Dynamic User Profile fetch from api
5. Clean and modular Javascript structure  

## Tech Stack
* HTML
* CSS
  1. Media queries
  2. Hover effect
* Javascript
  1. DOM manupulation
  2. Fetch API
  3. Async/await
  4. Error handling
* Random user api

## Project Structure 
* index.html → UI structure
* style.css → animations, responsive design, theme
* script.js → DOM manipulation, button logic
* api.js → API request, try/catch, base URL + endpoints

## How It Works
* When the user clicks the button, JavaScript receives the event using getElementById().
* data() is imported from api.js.
* api.js sends a request using:
1. BASE_URL
2. ENDPOINT
3. fetch()
* If response.ok is false → error is thrown and a fallback joke is returned.
* If successful:
1. the API data is converted to JSON
2. returned back to script.js
* script.js updates the DOM with:
1. first name , last name
2. Age
3. email
4. phone
5. city , country

## API Used
 BASE_URL = "https://randomuser.me";
 ENDPOINT = "/api/?gender=male";

## Link of project
  https://aquamarine-truffle-1b19a0.netlify.app/

## What I Learned
* JavaScript DOM manipulation
* JavaScript array and object
* Fetch API
* API request handling
* CSS hover effect
* CSS responsive design
* File/module structuring

## Author
Yash Paresh Shah

Actively learning Data Structures & Algorithms and Software Engineering principles.