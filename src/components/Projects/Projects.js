import React from 'react';
import { Link } from "react-router-dom";
import Glamnetic from '../../assets/images/glamnetic.jpg';
import Buck  from '../../assets/images/buck.jpg';
import INH from '../../assets/images/inh.jpg';


function Projects() {
    return (
        <section className="projects__grid">
            <h1 className="project_text">Projects<span class="text-[#01ac6a]">.</span></h1>
                <div className="grid__item">
                    <div className="grey__box"></div>
                        <div className="image__box--one">
                            <img src={Glamnetic} />
                        </div>
                    <div className="text__box--one">
                        <h2 className="project_text">Glam<span className="text-white">netic</span></h2>
                    </div>
                    <div className="image__box--two">
                        <img src={Buck} />
                    </div>
                    
                    <div className="text__box--two">
                    <Link to="/">
                        <h2 className="project_text">Buck Mason</h2>
                    </ Link>
                    </div>
                   
                    <div className="image__box--three">
                        <img src={INH} />
                    </div>
                    <div className="text__box--three">
                    <Link to="/insertNameHere/InsertNameHere">
                        <h2 className="project_text">INH Hair</h2>
                    </Link>
                    </div>
                    <div className="grey__box__bottom"></div>
                </div>
        </section>
    )
}

export default Projects;