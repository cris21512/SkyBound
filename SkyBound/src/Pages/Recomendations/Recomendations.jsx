import React from "react";
import './Recomendations.css';

import InfiniteMovingCardsDemo from '../../Components/components/infinite-moving-cards';



const Recomendations = () => {
    return(
        <div className="Recomendations-style">
            <h3 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
            </h3>
            <InfiniteMovingCardsDemo />
        </div>
    )
}

export default Recomendations;
