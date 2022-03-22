import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Polo Tshirt",
    brand: "Allen Solly",
    price: "800",
    imgurl: "https://rukminim2.flixcart.com/image/714/857/k0h12fk0/t-shirt/v/t/v/m-askporgfe35420-allen-solly-original-imafk8s5wnqwygff.jpeg?q=50",
    categoryName: "Mens clothing",
  },
  {
    _id: uuid(),
    title: "High waist Jeans",
    brand: "Levis",
    price: "1800",
    imgurl: "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw1a8d10a2/images/hi-res/A14960000/A14960000_01_Front.jpg?sw=451&sh=600",
    categoryName: "Womens clothing",
  },
  {
    _id: uuid(),
    title: "Teal Frock",
    brand: "Little Kangaroo",
    price: "1200",
    imgurl: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9340270a.webp",
    categoryName: "Kids clothing",
  },
];
