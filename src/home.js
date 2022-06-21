// import HomeBg from './images/netflix-img.png';
function home(){
    return(
        <>
        <section className="section-home">
            <div className="containerr">
                <div className='bg-image'>
                </div>

                <div className="text-om-img">
                    <h1>
                        Unlimited movies , TV shows and many more.
                    </h1>
                    <h3>Watch anywhere. Cancel anytime</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="email_content">
                        <input type="email" placeholder="Email address" name="email " className="email_txt"></input>
                        <input type="submit" name="Email address" className="email-btn" value="Get Started >"></input>
                    </div>
                </div>
            </div>
        </section>

        <h3 className="card-heading">Netflix Series</h3>
        <p className="card-para">Most viewed series with highest rating</p>
        </>
    );
}

export default home;