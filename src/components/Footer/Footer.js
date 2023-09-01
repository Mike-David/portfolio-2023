import React from 'react';


function FooterNav() {
    return (
    <div className="services__section">
    <div className="main__service--container">
        <h2 className="service__heading--two">Ready to start? Lets connect<span className="period">.</span></h2>
        <hr className="footer__hr" />   
        {/* <hr className="footer__hr"> */}
        <div className="footer__content">
            <div className="footer__content--col-one col">
                <h3 className="footer__content--heading">hello@mdz.com</h3>
            </div>
            <div className="footer__content--col-two col">
                <div className="footer__content--inner">
                    <h4 className="footer__content--inner-heading"> Socials</h4>
                    <p className="footer__content--inner-paragraph">LinkedIn</p>
                    <p className="footer__content--inner-paragraph">Github</p>
                    <p className="footer__content--inner-paragraph">Instagram</p>
                </div>
            </div>
            <div className="footer_-contern--col-three col">
                <h4 className="footer__content--inner-heading">Menu</h4>
                <p className="footer__content--inner-paragraph">About</p>
                <p className="footer__content--inner-paragraph">Blog</p>
                <p className="footer__content--inner-paragraph">Projects</p>
            </div>
        </div>
    </div>
</div>
)
}
export default FooterNav;