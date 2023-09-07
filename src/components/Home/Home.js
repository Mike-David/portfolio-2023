import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import ImageGallery from '../ImageGallery/ImageGallery';
import Projects from '../Projects/Projects';


function Home() {
    return (
    <section>
        <Hero />
        <ImageGallery />
        <Services />
        <Projects />
    </section>
    )
}

export default Home;