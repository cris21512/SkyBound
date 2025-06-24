import React from "react";
import './Recomendations.css';

import InfiniteMovingCardsDemo from '../../Components/components/infinite-moving-cards';



const Recomendations = () => {
    return(
        <div className="Recomendations-style">
            <div className="recomendations-center">
            <h3 style={{fontSize: "5rem"}} className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Trusted by 12,500+ happy users
            </h3>
            <InfiniteMovingCardsDemo />
            </div>
        </div>
    )
}

export default Recomendations;
