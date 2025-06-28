import React, { useEffect } from "react";

import "./Services.css";

import FocusCardsDemo from "../../Components/components/focus-cards";
import TracingBeamDemo from "../../Components/components/tracing-beam";

import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return ( 
        <>
        <div className="Services-style">
            <h1 style={{fontSize: "4rem"}} data-aos="fade-up">We different class for you</h1>
            <FocusCardsDemo />
            <TracingBeamDemo />
        </div>
        </>
    )
}

export default Services;