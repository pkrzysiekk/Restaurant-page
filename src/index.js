import "./styles.css";
import { generateHomePage } from "./generateHome";
console.log("Hello!");
const homeButton=document.querySelector("#home");
homeButton.addEventListener("click",generateHomePage);
