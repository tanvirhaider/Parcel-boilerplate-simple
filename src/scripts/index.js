


import '../styles/main.scss'                // importing scss file
import { dude } from './dude'               // importing a test javascript module
import { TweenMax } from 'gsap';            // importing gsap animation engine 
import ScrollMagic from 'scrollmagic';      // importing scroll magic for parallax functionality 


document.querySelector('h1').textContent = dude(`hey Joffrey`);