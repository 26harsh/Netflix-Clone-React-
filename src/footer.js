
function footer(){
    return(
        <>
            <footer class="section section-footer">
        <div class="container grid grid-three-column footer-div">
            <div class="f-about">
                <h3>About</h3>
                <p>
                    We have tested a number of registry fix and clean utilities and present our top 3 
                    list on our site for your convenience. Hope you like it.
                </p>
            </div>
            <div className="seperate-div grid grid-two-column">
            <div class="f-links">
                <h3>Links</h3>
                    <ul>
                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">home</a>
                        </li>

                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">about</a>
                        </li>

                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">services</a>
                        </li>

                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">portfolio</a>
                        </li>

                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">contact</a>
                        </li>
                    </ul>
            </div>
            <div class="f-services">
                <h3>Services</h3>
                    <ul>
                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">web design</a>
                        </li>

                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">web development</a>
                        </li>

                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">Mern project</a>
                        </li>

                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">online classes</a>
                        </li>

                        <li>
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <a href="#">youtube courses</a>
                        </li>
                    </ul>
            </div>
            </div>
            <div class="f-address">
                <h3>Have a Questions?</h3>
                <address>
                    <div>
                        <p>
                            <span><ion-icon name="location-outline"></ion-icon></span>
                            Mumbai, India
                        </p>
                    </div>
                
                
                    <div>
                        <p>
                            <span><ion-icon name="call-outline"></ion-icon></span>
                            <a href="tel:+919029124666"> +91 9029124666 </a>
                        </p>
                    </div>
               
                    <div>
                        <p>
                            <span><ion-icon name="mail-outline"></ion-icon></span>
                            <a href="mailto:harshchotaliya@269gmail.com">
                                harsh269@gmail.com
                            </a>
                        </p>
                    </div>
                </address>
            </div>
        </div>
        <div class="container">
            <div class="f-social-icons">
                <a href="" target="_blank">
                    <ion-icon class="icons" name="logo-instagram" classname=".f-social-icons"></ion-icon>
                </a>

                <a href="" target="_blank">
                    <ion-icon class="icons" name="logo-youtube"></ion-icon>
                </a>

                <a href="" target="_blank">
                    <ion-icon  class="icons" name="logo-facebook"></ion-icon>
                </a> 
            </div>
            <div class="f-credits">
                <p>
                    Copyright ©2022 All rights reserved | This templeted is made by 🤍Harsh Chotaliya
                </p>
            </div>
        </div>
    </footer>
        </>
    );
}

export default footer;