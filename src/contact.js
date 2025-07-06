export default function loadContactPage() {
  const pageContent = document.createElement("div");

  const testContent = document.createElement("p");
  testContent.innerText = "ini dummy untuk page content contact";

  pageContent.appendChild(testContent);

  return pageContent;
}
