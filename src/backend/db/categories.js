import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "womens clothing",
    description:
      "A wide variety of clothing for women ranging from casuals, traditionals to formal wear from top quality brands.",
  },
  {
    _id: uuid(),
    categoryName: "mens clothing",
    description:
      "Exclusive clothing collection for men comprising of comfortable and latest trending formal, casual wear and more.",
  },
  {
    _id: uuid(),
    categoryName: "kids clothing",
    description:
      "Range of comfortable and skin friendly wear for children in the age group of 4 to 12 years.",
  },
];
