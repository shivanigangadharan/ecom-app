import React from 'react';
import './filter.css';
import { useFilter } from '../../context/filterContext';

const STARS = [4, 3, 2, 1];

export default function Filter() {

    const { state, dispatch } = useFilter();
    const toggleCheckbox = (e) => {
        e.checked ?
            dispatch({ type: "ADD_FILTER_BY_CATEGORY", payload: e.value }) :
            dispatch({ type: "REMOVE_FILTER_BY_CATEGORY", payload: e.value })
    }

    return (
        <div>
            <div class="container-filters">
                <h3 class="filter-top" onClick={(e) => { dispatch({ type: "CLEAR", payload: "" }) }}>
                    <b class="bold"> Filters</b>
                    <u>Clear</u>
                </h3>
                <h3 class="bold">Price</h3>
                <input value={state.clear == true ? 1000 : undefined} min="500" max="1500" onClick={(e) => { dispatch({ type: "FILTER_BY_PRICE", payload: e.target.value }) }} class="pricerange" type="range" list="pricerange" />
                {/*  */}
                <datalist id="pricerange">
                    <option value="500" label="500"></option>
                    <option value="1000" label="1000"></option>
                    <option value="1500" label="1500"></option>
                </datalist>
                <h3 class="bold">Category</h3>
                <div class="cateory">
                    <div>
                        <input checked={state.clear == true ? false : undefined} onClick={(e) => { toggleCheckbox(e.target) }} class="checkbox" value="womens clothing" type="checkbox" />
                        <label for="womens clothing">Womens clothing</label>
                    </div>
                    <div>
                        <input checked={state.clear == true ? false : undefined} onClick={(e) => { toggleCheckbox(e.target) }} class="checkbox" value="mens clothing" type="checkbox" />
                        <label for="mens clothing">Mens clothing</label>
                    </div>
                    <div>
                        <input checked={state.clear == true ? false : undefined} onClick={(e) => { toggleCheckbox(e.target) }} class="checkbox" value="kids clothing" type="checkbox" />
                        <label for="kids clothing">Kids clothing</label>
                    </div>
                </div>
                <h3 class="bold">Rating</h3>
                {STARS.map((star, index) => {
                    return (
                        <div>
                            <input checked={state.clear == true ? false : undefined} onClick={(e) => { dispatch({ type: "FILTER_BY_RATING", payload: star }) }} type="radio" id="4+" name="rating" />
                            <label for="{star}"> {star} stars and above</label>
                        </div>
                    )
                })}

                <h3 class="bold">Sort by</h3>
                <div>
                    <input checked={state.clear == true ? false : undefined} onClick={(e) => { dispatch({ type: "SORT_BY_PRICE", payload: e.target.id }) }} type="radio" id="low-high" name="sortby" />
                    <label for="low-high">Price - Low to High</label>
                </div>
                <div>
                    <input checked={state.clear == true ? false : undefined} onClick={(e) => { dispatch({ type: "SORT_BY_PRICE", payload: e.target.id }) }} type="radio" id="high-low" name="sortby" />
                    <label for="high-low">Price - High to Low</label>
                </div>
            </div>
        </div >
    )
}
