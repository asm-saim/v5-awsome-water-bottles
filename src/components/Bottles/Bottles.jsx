// import React from 'react';
import { use } from "react";

const Bottles = ({ loadData }) => {
    const loadPromise = use(loadData)
    console.log(loadPromise)
    return (
        <div>

        </div>
    );
};

export default Bottles;