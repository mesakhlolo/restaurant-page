import loadHomepage from "./homepage";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

// select button
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

// select div content
const content = document.getElementById("content");

content.appendChild(loadHomepage());
