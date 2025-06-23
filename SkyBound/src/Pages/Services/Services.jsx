import React from "react";

import "./Services.css";

import FocusCardsDemo from "../../Components/components/focus-cards";
import TracingBeamDemo from "../../Components/components/tracing-beam";

const Services = () => {
    return ( 
        <>
        <div className="Services-style">
            <h1 style={{fontSize: "4rem"}}>We different class for you</h1>
            <FocusCardsDemo />
            <TracingBeamDemo />
        </div>
        </>
    )
}

export default Services;