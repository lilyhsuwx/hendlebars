import cafe from "./cafe.json";
import cafeTamplate from "./cafe.tamlate.hbs"




const listRef = document.querySelector(".cafe-list");

listRef.innerHTML = cafeTamplate({cafe})