import { clearScreen } from "./clearScreen";
export function generateHomePage(){
    const contentDiv=document.querySelector("#content");
    const contentParagraph=document.createElement("p");

    const textContent=`Welcome to Moon Restaurant, your celestial destination for an extraordinary dining experience! Located in
                the heart of the city, our inviting atmosphere and enchanting decor are designed to transport you to a
                world of culinary delight. At Moon Restaurant, we believe in celebrating the art of food by bringing you
                dishes crafted from the freshest local ingredients, each one thoughtfully prepared to honor both
                tradition and innovation. Our menu features a diverse array of options, from delectable appetizers to
                exquisite entrees, ensuring there's something for everyone. Enjoy the perfect pairing of our fine wines
                or signature cocktails as our friendly staff caters to your every need. Ideal for romantic dinners,
                family gatherings, or special celebrations, we strive to create memorable moments that linger long after
                the last bite. Join us as we take your taste buds on a journey through flavors that are as captivating
                as the night sky. Discover the magic of Moon Restaurant, where every meal is a celebration of life's
                most delicious moments!`;
    clearScreen();
    contentParagraph.textContent=textContent;
    contentDiv.appendChild(contentParagraph);

    

}