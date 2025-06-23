import React from "react";
import './Header.css';
import NavbarDemo from "../../Components/components/navbar-fix";
import SparklesPreview from "../../Components/components/Sparkles";
import { AnimatedModalDemo } from "../../Components/components/animated-cards";




const Header = () => {
    return(
        <section className="Header-style">
            <NavbarDemo/>
            <div className="Blur-header"/>
            <div className="Center-header">
            <SparklesPreview/>
            <AnimatedModalDemo/>
            </div>
        </section>
    )
}

export default Header;
