// import React from 'react';
import { use } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { useState } from "react";

const Bottles = ({ loadData }) => {
    const loadBottles = use(loadData)
    console.log(loadBottles)

    // state declare:
    const [purchase, setPurchase] = useState([])
    //event handler declare:
    const handlePurchase = (bottle) => {
        console.log("I am from bottles", bottle)
    }

    return (
        <div>
            <h3>Total Bottles: {loadBottles.length}</h3>
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