import React from 'react';
import img1 from './images/card-img-1.jpg';
import img2 from './images/card-img-2.jpg';
import img3 from './images/card-img-3.jpg';
import img4 from './images/card-img-4.jpg';
import img5 from './images/card-img-5.jpg';
import img6 from './images/card-img-6.jpg';
function Card1(){
    return(
        <>
                    <div className='container section grid grid-three-column card-images'>
                        <div className="img-overlay p-btn--1">
                            <img src={img1} alt="mywork"/>
                            <div className="overlay">
                                <h3>Marvels</h3>
                            </div>
                        </div>

                        <div className="img-overlay p-btn--1">
                            <img src={img2} alt="mywork"/>
                            <div className="overlay">
                                <h3>Oxygen</h3>
                            </div>
                        </div>

                        <div className="img-overlay p-btn--1">
                            <img src={img3} alt="mywork"/>
                            <div className="overlay">
                                <h3>Stranger <br/>
                                    Things</h3>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="img-overlay p-btn--1">
                            <img src={img4} alt="mywork"/>
                            <div className="overlay">
                                <h3>Dasvi</h3>
                            </div>
                        </div>

                        <div className="img-overlay p-btn--1">
                            <img src={img5} alt="mywork"/>
                            <div className="overlay">
                                <h3>Kabir <br/>Singh</h3>
                            </div>
                        </div>

                        <div className="img-overlay p-btn--1">
                            <img src={img6} alt="mywork"/>
                            <div className="overlay">
                                <h3>Arrival</h3>
                            </div>
                        </div>

                    </div>
                    
    </>
    );
}

export default Card1;
