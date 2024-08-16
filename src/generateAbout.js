import { clearScreen } from "./clearScreen";

export function generateAbout(){
    const contentDiv=document.querySelector("#content");
    const contentParagraph=document.createElement("p");
    
    const textContent=`Welcome to Moon Restaurant, where the culinary arts meet the mysteries of the cosmos. Nestled in the heart of the city, Moon Restaurant offers a unique dining experience that transcends the ordinary, taking you on a gastronomic journey through the stars.
    Our chefs draw inspiration from the universe, crafting dishes that are as visually stunning as they are delicious. Every meal is an adventure, with flavors that are out of this world. From our Lunar Salad to our Asteroid Burger, each dish is carefully curated to provide a taste of the cosmos, blending earthly ingredients with a touch of interstellar magic.
    At Moon Restaurant, we believe that dining should be an experience to remember. Our ambiance reflects the serene beauty of the night sky, with soft lighting and celestial decor that create an atmosphere of tranquility and wonder. Whether you're here for a romantic dinner, a special celebration, or just a quiet night out, Moon Restaurant is the perfect destination for those who seek something extraordinary.
    Join us under the stars and let Moon Restaurant take you on a culinary voyage that you will never forget. Our team is dedicated to providing you with an exceptional dining experience, combining world-class cuisine with impeccable service in an environment that feels both luxurious and inviting.
    Discover the magic of the universe on your plate, only at Moon Restaurant.`;
    clearScreen();
    contentParagraph.textContent=textContent;
    contentDiv.appendChild(contentParagraph);

}