import img1 from "../assets/ru-1.jpg";
import img2 from "../assets/bog-1.jpg";
import img3 from "../assets/ca3-1.jpg";
import img4 from "../assets/ca-4.jpg";
import img5 from "../assets/ju-1.jpg";

let countId = 1;

export const dataItem = [
  {
    id: countId,
    Image: img5,
    name: "Diamond-encrusted mobile phone case.",
    price:
      "The image case is priced at 300 Baht, and a diamond-encrusted case is provided for free. If you want to add racing design, there will be an additional charge of 150 Baht.",
    defultprice: 300,
    Requirements:
      "The customer can provide a maximum of 6 desired images for the racing car design, as well as the names of the animals if you want to add them.",
    star: 5,
    select: [
      ["diamond particles", 0, 0],
      ["Enter the name of the pet", 0, 1],
      ["racing", 150, 2],
    ],
    forSellItem: 0,
  },
  {
    id: ++countId,
    Image: img4,
    name: "Mobile phone cases can be designed with the desired images.",
    currency: "฿",
    price: 300,
    defultprice: 300,
    Requirements:
      "The customer wants a maximum of 6 images and the names of animals in case you want to add more.",
    star: 5,
    select: [
      ["No pet name provided", 0, 0],
      ["Enter the name of the pet", 0, 1],
    ],
    forSellItem: 0,
  },
  {
    id: ++countId,
    Image: img1,
    name: "Brooches can be designed using a single image.",
    currency: "฿",
    price: 89,
    defultprice: 89,
    Requirements: "Customer's desired image, quantity: 1 image.",
    star: 3.5,
    forSellItem: 0,
  },
  {
    id: ++countId,
    Image: img2,
    name: "Griptok can be designed using a single image.",
    currency: "฿",
    price: 89,
    defultprice: 89,
    Requirements: "Customer's desired image, quantity: 1 image.",
    star: 5,
    forSellItem: 0,
  },
  {
    id: ++countId,
    Image: img3,
    name: "Brooches and Griptok can be designed using a variety of images.",
    price: "One image for designing at a price of 89 Baht.",
    defultprice: 89,
    Requirements:
      "The number of images will be according to the customer's desired quantity.",
    star: 2.3,
    forSellItem: 0,
  },
];
