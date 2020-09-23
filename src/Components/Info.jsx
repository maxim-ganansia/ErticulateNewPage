import React, { Component, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../App.css';



function Info() {

    return (
        <div class="carousel-wrapper">
            <Carousel>
                <div className="caroussel-div">
                    <div className="caroussel-content">
                        <img style={{ width: "20%" }} src="../Moi.png" />
                        <h5 className="name">Maxim Gnansia</h5>
                        <a className="mail" href="mailto:m.gnansia@gmail.com"> Email me<i class="far fa-envelope"></i></a>
                        <p className="phone"><i>Phone Number : </i>058-516-0191</p>
                        <button>Open chat<i style={{ width: "110%" }} class="far fa-comments"></i></button>
                    </div>
                </div>
                <div className="caroussel-div">
                    <img style={{ width: "20%" }} src="../Ben.jpg" />
                    <h5 className="name">Ben Szuchmacher</h5>
                    <a className="mail" href="mailto:BSzuchmacher@gmail.com">Email me<i class="far fa-envelope"></i></a>
                    <p className="phone"><i>Phone Number : </i>058-403-7429</p>
                    <button>Open chat<i style={{ width: "110%" }} class="far fa-comments"></i></button>
                </div>
                <div className="caroussel-div">
                    <img style={{ width: "20%" }} src="../bibi.jpg" />
                    <h5 className="name">Benyamin Netenyahu</h5>
                    <a className="mail" href="mailto:bibi.likoud@gmail.com"> Email me <i class="far fa-envelope"></i></a>
                    <p className="phone"><i>Phone Number : </i>058-555-5555</p>
                    <button>Open chat<i style={{ width: "110%" }} class="far fa-comments"></i></button>
                </div>
            </Carousel>


        </div>
    );
    // return (
    //     <div className="info-div">
    //         <img className="max-picture" src={MaxPicture} />
    //         <h5 className="name">Maxim Gnansia</h5>
    //         <a className="mail" href="mailto:m.gnansia@gmail.com"> Email me <i class="far fa-envelope"></i></a>
    //         <p className="phone"><i>Phone Number : </i>058-516-0191</p>
    //     </div>
    // )
}

export default Info