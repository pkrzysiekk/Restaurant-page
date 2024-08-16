import { clearScreen } from "./clearScreen";
import { menu } from "./menu";
export function generateMenu(){

    const contentDiv=document.querySelector("#content");
    const contentParagraph=document.createElement("p");
    const menuList=document.createElement("ul");
    clearScreen();
    menu.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.name}</strong> - ${item.description} <em>($${item.price.toFixed(2)})</em>`;
        menuList.appendChild(li);
    });
    contentParagraph.appendChild(menuList);
    contentDiv.appendChild(contentParagraph);
}