import React from 'react';
import Navigation from '../Navigation/Navigation';


function Hero() {
    return (
    <section>
        <div className="grid ">
        <Navigation />
            {/* <!-- text --> */}
            <div className="flex flex-col m-auto h-[85vh] justify-center">
                <h2 className="homepage-text">Hello, I'm Mike.</h2>
                <h2 className="homepage-text">Developer and designer for a</h2>
                <h2 className="homepage-text">digital-first world<span class="text-[#01ac6a]">.</span></h2>
            </div>
        </div>
    </section>
    )
}

export default Hero;