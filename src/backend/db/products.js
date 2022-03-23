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
    price: 800,
    imgurl: "https://rukminim2.flixcart.com/image/714/857/k0h12fk0/t-shirt/v/t/v/m-askporgfe35420-allen-solly-original-imafk8s5wnqwygff.jpeg?q=50",
    category: "mens clothing",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "High waist Jeans",
    brand: "Levis",
    price: 1800,
    imgurl: "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw1a8d10a2/images/hi-res/A14960000/A14960000_01_Front.jpg?sw=451&sh=600",
    category: "womens clothing",
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "Teal Frock",
    brand: "Little Kangaroo",
    price: 1200,
    imgurl: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9340270a.webp",
    category: "kids clothing",
    rating: 4.3,
  },
  {
    _id: uuid(),
    title: "Womens High Neck Puffer jacket",
    brand: "Allen Solly",
    price: 2500,
    imgurl: "https://allensolly.imgix.net/img/app/product/2/220051-727357.jpg?auto=format",
    category: "womens clothing",
    rating: 3.8,
  },
  {
    _id: uuid(),
    title: "Mens Cotton Casual trousers",
    brand: "Raymond",
    price: 1700,
    imgurl: "https://m.media-amazon.com/images/I/71JjjVSH+5L._UY550_.jpg",
    category: "mens clothing",
    rating: 4.2,
  },
  {
    _id: uuid(),
    title: "Unisex cotton Tshirt",
    brand: "Powerpuff",
    price: 250,
    imgurl: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9340270a.webp",
    category: "kids clothing",
    rating: 3.9,
  },
  {
    _id: uuid(),
    title: "Checked collar top",
    brand: "Marks & Spencer",
    price: 690,
    imgurl: "https://asset1.cxnmarksandspencer.com/is/image/mands/OD_01_T43_3219K_F4_X_EC_0?$Intl_PDP_Tab$",
    category: "womens clothing",
    rating: 4.7
  },
];
