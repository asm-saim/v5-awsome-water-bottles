// import React from 'react';
import { use } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { useState } from "react";
import { addStoreCart, getStoreCart, removeFromLS } from "../../utilities/localStorage";
import { useEffect } from "react";
import SavedCart from "../SavedCart/SavedCart";

const Bottles = ({ loadData }) => {
    const loadBottles = use(loadData)
    console.log(loadBottles)

    // state declare:
    const [purchase, setPurchase] = useState([])

    //event handler declare:
    const handlePurchase = (bottle) => {
        // console.log("I am from bottles", bottle)
        const newCart = [...purchase, bottle]
        setPurchase(newCart)

        //save the id to the Local storage
        addStoreCart(bottle.id)
    }

    //useEffect:
    useEffect(() => {
        const storedCardIDs = getStoreCart()
        // console.log(storedCardIDs, loadBottles);

        const storedData = []
        for (const id of storedCardIDs) {
            // console.log(id);
            const cartBottle = loadBottles.find(bottle => bottle.id === id)
            if (cartBottle) {
                storedData.push(cartBottle)
            }
        }
        console.log("added cart", storedData)
        setPurchase(storedData)
    }, [loadBottles])

    //remove id from the cart:
    const handleRemoveIDFromCart = (id) => {
        console.log("remove", id)
        const remove = purchase.filter(bottle => bottle.id !== id)
        setPurchase(remove)

        //remove from local storage also.
        removeFromLS(id)
    }
    return (
        <div>
            <h3>Total Bottles: {loadBottles.length}</h3>
            <h3>Cart Added: {purchase.length}</h3>
            <SavedCart purchase={purchase}
                handleRemoveIDFromCart={handleRemoveIDFromCart}>
            </SavedCart>
            <div className="bottles-container">
                {
                    loadBottles.map(bottle => <Bottle handlePurchase={handlePurchase}
                        key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;