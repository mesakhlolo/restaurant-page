// Import gambar-gambar
import saksangImage from "./image/saksang.jpg";
import babiPanggangImage from "./image/babi-panggang.jpg";
import arsikImage from "./image/arsik-ikan-mas.jpg";

export default function loadMenuPage() {
  const menuContent = document.createElement("div");

  const menuTitle = document.createElement("h1");
  menuTitle.innerText = "Menu Lapo Batak Bahari";

  // bikin function untuk create element masing masing menu
  function createMenuItem(title, imagePath, description) {
    const itemContainer = document.createElement("div");

    const itemTitle = document.createElement("h3");
    itemTitle.innerText = title;

    const itemImage = document.createElement("img");
    itemImage.src = imagePath;
    itemImage.alt = title;

    const itemDescription = document.createElement("p");
    itemDescription.innerText = description;

    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemDescription);

    return itemContainer;
  }

  const saksangBabi = createMenuItem(
    "Saksang Babi",
    saksangImage,
    "Masakan tradisional Batak dari daging babi yang dicincang dan dimasakdengan darah, santan, serta rempah-rempah khas seperti andaliman danserai. Rasanya gurih, pedas, dan kaya aroma rempah."
  );
  const babiPanggang = createMenuItem(
    "Babi Panggang",
    babiPanggangImage,
    "Potongan daging babi dipanggang hingga garing di luar dan empuk di dalam,disajikan dengan sambal andaliman dan saus darah (sambal rias) sebagaipelengkap. Menu ini sangat populer di Lapo Batak."
  );
  const arsikIkanMas = createMenuItem(
    "Arsik Ikan Mas",
    arsikImage,
    "Ikan mas dimasak dengan bumbu kuning khas Batak yang terdiri dari bawang,kunyit, kemiri, andaliman, dan asam cikala. Cita rasanya asam, gurih, dan sedikit pedas dengan aroma yang kuat."
  );

  menuContent.appendChild(menuTitle);
  menuContent.appendChild(saksangBabi);
  menuContent.appendChild(babiPanggang);
  menuContent.appendChild(arsikIkanMas);

  return menuContent;
}
