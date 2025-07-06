export default function loadMenuPage() {
  const menuContent = document.createElement("div");

  const testContent = document.createElement("p");
  testContent.innerText = "ini dummy untuk page content menu";

  menuContent.appendChild(testContent);

  return menuContent;
}
