export function sortData(product, sortBy) {
    if (sortBy == "low-high") {
        return [...product].sort((a, b) => { return a.price - b.price })
    }
    if (sortBy == "high-low") {
        return [...product].sort((a, b) => { return b.price - a.price })
    }
    return [...product];
}

export function ratingData(product, rating) {
    if (rating) {
        return [...product].filter((prod) => prod.rating >= rating);
    }
    return [...product];
}

export function priceFilter(product, priceLimit) {
    if (priceLimit > 0) {
        return [...product].filter((prod) => prod.price <= priceLimit);
    }
    return [...product];
}

export function categoryFilter(product, category) {
    if (category.length == 0) {
        console.log("not filtering by cat");
        return [...product];
    }
    else {
        console.log("filtering by cat", category);
        return [...product].filter((prod) => category.includes(prod.category));
    }
}