import React from "react";
import { CTABtn} from '../buttons/actionButtons';

function HeroBanner(){
    return (
        <section className="hero-banner">
            <div className="hero-banner__content">
                <div className="hero-banner__content--inner">
                <h1>
                    <span className="code-text">Hello folks,</span><br/> 
                    I´m Arturo Miranda.
                </h1>
                <p>
                A software engineer that develop stunning digital<br/>
                experiences who help´s business and people to stand out.
                </p>
                <CTABtn text=" Know my path " src="/files/Resume.pdf"/>
                </div>
            </div>
        </section>
    );
}

export {HeroBanner};