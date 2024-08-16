import "./styles.css";
import { generateHomePage } from "./generateHome";
import { generateMenu } from "./generateMenu";
console.log("Hello!");
const homeButton=document.querySelector("#home");
const menuButton=document.querySelector("#menu");

homeButton.addEventListener("click",generateHomePage);
menuButton.addEventListener("click",generateMenu);


