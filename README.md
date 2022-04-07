
# Style Kart

An e-commerce store to shop for the latest clothes in fashion. Please go through the following document to understand the use and functioning of the app.

## Installation
To run this app in your local, clone this repository and navigate to the folder containing it and run the following commands.

`npm install`

`npm start`

## Deployed link
https://stylekart.netlify.app/

## Features of the app
- Auth
    - Sign up
    - Login
    - Logout

- ### Homepage
    Has three categories, clicking on which, user will be directed to the product listing page having products of only those categories
    
![image](https://user-images.githubusercontent.com/30795425/162257939-4d553b8d-e61e-4cf9-bc62-57115281b884.png)

- ### Product listing page
    This page shows all the products available. It also has a filter component having the following functions :
    - Filter by price (using a slider)
    - Filter by category (using checkboxes)
    - Filter by rating (radio buttons)
    - Sort by price (low to high/high to low)
    - Clear all filters

    Then the product cards in this page can also be used to add the product to the wishlist or to the cart.

![image](https://user-images.githubusercontent.com/30795425/162258094-3cba2d7b-8887-4868-9da2-8a65a6ccb848.png)

- ### Wishlist page
    Shows all the products in the wishlist. From here, user can also add item to cart or remove from wishlist.

![image](https://user-images.githubusercontent.com/30795425/162258175-f7f07f37-1e89-4fde-9bc0-f10c22ea9143.png)

- ### Cart page
    Shows all the products present in the cart along with the bill for checkout. Items from here can be removed as well as moved to wishlist.

![image](https://user-images.githubusercontent.com/30795425/162258246-3ee7f13e-0c2d-4c66-bc21-bed2227e6b0c.png)
