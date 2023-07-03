# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
- [My process](#my-process)
  - [Design](#design)
  - [Development](#development)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

This project is a simple user feedback system that allows users to rate their support experience. Built with HTML, CSS, and JavaScript, the system takes a numerical input (1 through 5) from the user and displays a personalized thank you message along with the rating they provided.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![](images/interactive-rating-component-1.jpg)
![](images/interactive-rating-component-2.jpg)

## My process

### Design

I was provided with a design for this project from Frontend Mentor. The design was clear and user-friendly. I had to recreate this design and bring it to life using HTML, CSS, and JavaScript.

### Development
I began by structuring my HTML, using semantic elements where possible for better readability and accessibility. I used CSS for styling, taking advantage of CSS variables for uniformity in colors. I decided to use JavaScript for the interactive parts of the project, as it provided sufficient functionality for the task at hand. I kept my code DRY (Don't Repeat Yourself) by creating a single click event handler for all the rating buttons, and dynamically updating the rating in the Thank You section.

I made use of the DOM manipulation abilities of JavaScript, using the `querySelectorAll` and `getElementById` methods to select elements and dynamically change their properties based on user interactions. This allowed me to create a smooth and interactive user experience without the need for page reloads.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This project was an excellent opportunity to apply basic web development principles in a real-world scenario. It helped strengthen my understanding of DOM manipulation and event handling in JavaScript.





