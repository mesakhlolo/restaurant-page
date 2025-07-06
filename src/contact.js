export default function loadContactPage() {
  const pageContent = document.createElement("div");

  const testContent = document.createElement("p");
  testContent.innerText = "CONTACT";

  pageContent.appendChild(testContent);

  return pageContent;
}
