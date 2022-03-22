import React, { useState } from 'react';
import './productList.css';
import Filter from '../../components/filter/filter';
import ProductCard from '../../components/productCard/productCard';
import { products } from '../../backend/db/products';
import { useFilter, FilterProvider } from '../../context/filterContext';

export default function ProductList() {

    const { state } = useFilter();
    return (
        <div>
            <Filter />
            <div class="products-page">
                <span class="bold">Showing all products</span>
                ({state.product.length} products)
                <div class="products-grid">
                    {state.product.map((product) => {
                        return <ProductCard product={product} />
                    })}
                </div>

            </div>
        </div>
    )
}