export default function loadMenuPage() {
  const menuContent = document.createElement("div");

  const testContent = document.createElement("p");
  testContent.innerText = "MENU";

  menuContent.appendChild(testContent);

  return menuContent;
}
