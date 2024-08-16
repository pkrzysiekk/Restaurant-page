import "./styles.css";
import { generateHomePage } from "./generateHome";
import { generateMenu } from "./generateMenu";
import { generateAbout } from "./generateAbout";
console.log("Hello!");
const homeButton=document.querySelector("#home");
const menuButton=document.querySelector("#menu");
const aboutButton=document.querySelector("#about");


homeButton.addEventListener("click",generateHomePage);
menuButton.addEventListener("click",generateMenu);
aboutButton.addEventListener("click",generateAbout);


