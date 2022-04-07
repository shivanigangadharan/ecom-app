import React, { useState } from 'react';
import './productList.css';
import Filter from '../../components/filter/filter';
import ProductCard from '../../components/productCard/productCard';
import { products } from '../../backend/db/products';
import { useFilter } from '../../context/filterContext';
import { sortData, ratingData, priceFilter, categoryFilter } from '../../services/filterFunctions';

export default function ProductList() {

    const { state } = useFilter();
    const sortedData = sortData([...state.product], state.sortBy);
    const ratingSorted = ratingData(sortedData, state.rating);
    const priceLimitFiltered = priceFilter(ratingSorted, state.priceLimit);
    const categoryFiltered = categoryFilter(priceLimitFiltered, state.category);

    return (
        <div>
            <Filter />
            <div className="products-page">
                <span className="bold">Showing {categoryFiltered.length} products</span>

                <div className="products-grid">
                    {categoryFiltered.map((product) => {
                        return <ProductCard product={product} key={product.id} />
                    })}
                </div>

            </div>
        </div>
    )
}