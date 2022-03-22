import React, { useState } from 'react';
import './productList.css';
import Filter from '../../components/filter/filter';
import ProductCard from '../../components/productCard/productCard';
import { products } from '../../backend/db/products';
import { useFilter, FilterProvider } from '../../context/filterContext';
import { sortData, ratingData, priceFilter } from '../../services/sortData';

export default function ProductList() {

    const { state } = useFilter();
    const sortedData = sortData([...state.product], state.sortBy);
    const ratingSorted = ratingData(sortedData, state.rating);
    const priceLimitFiltered = priceFilter(ratingSorted, state.priceLimit);

    return (
        <div>
            <Filter />
            <div class="products-page">
                <span class="bold">Showing all products</span>
                ({priceLimitFiltered.length} products)
                <div class="products-grid">
                    {priceLimitFiltered.map((product) => {
                        return <ProductCard product={product} />
                    })}
                </div>

            </div>
        </div>
    )
}