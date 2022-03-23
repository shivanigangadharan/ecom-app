const sortData = (product, sortBy) => {
    if (sortBy == "low-high") {
        return product.sort((a, b) => { return a.price - b.price })
    }
    if (sortBy == "high-low") {
        return product.sort((a, b) => { return b.price - a.price })
    }
    return product;
}

const ratingData = (product, rating) => {
    if (rating) {
        return product.filter((prod) => prod.rating >= rating);
    }
    return product;
}

const priceFilter = (product, priceLimit) => {
    if (priceLimit > 0) {
        return product.filter((prod) => prod.price <= priceLimit);
    }
    return product;
}

const categoryFilter = (product, category) => {
    if (category.length == 0) {
        return product;
    }
    else {
        return product.filter((prod) => category.includes(prod.category));
    }
}
export { sortData, ratingData, priceFilter, categoryFilter }