// import React from 'react';
import { use } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = ({ loadData }) => {
    const loadBottles = use(loadData)
    console.log(loadBottles)
    return (
        <div>
            <h3>Total Bottles: {loadBottles.length}</h3>
            {
                loadBottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;