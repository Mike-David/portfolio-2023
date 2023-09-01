import React from 'react';
import '../ImageGallery/ImageGallery.css'
import Coffee from '../../assets/images/cofeee.jpg';
import GetInTouch from '../../assets/images/getintouch.jpg';
import Web from '../../assets/images/webV2.jpg';


function ImageGallery() {
    return (
        <section className="image__gallery">
        <div className="home__column home__column--first">
            <div className="home__column--item home__column--item--first">
                <img src={Coffee} />
                <div className="home__overlay"></div>
                <div className="home__column--content">
                    <p className="home__column--title">
                        Follow my journey <br /> as a self-taught developer.
                    </p>
                    <a href="#" className="button__link link" tabindex="0">
                        <span className="link__text">View Blog</span>
                    </a>
                </div>
            </div>
            <div className="home__column--item home__column--item--third">
                <img src={GetInTouch} />
                <div className="home__overlay"></div>
                <div className="home__column--content">
                    <p className="home__column--title">
                        I would love to hear <br /> more about your project. Let's connect!
                    </p>
                    <a href="#" className="button__link link" tabindex="0">
                        <span className="link__text">Contact Me</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="home__column home__column--second">
            <div className="home__column--item home__column--item--second">
                <img src={Web} />
                <div className="home__overlay"></div>
                <div className="home__column--content">
                    <p className="home__column--title">
                        Get to know more about<br /> how I can assit your business.
                    </p>
                    <a href="#" className="button__link link" tabindex="0">
                        <span className="link__text">View Services</span>
                    </a>
                </div>

            </div>

        </div>
    </section>
    )
}

export default ImageGallery;