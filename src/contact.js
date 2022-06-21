
function contact(){
    return(
        <>
            <section class="section section-contact">
        <div class="container"> 
            <h2 class="contact-heading">Contact Us</h2>
        </div>
        <div class="section-contact-main contact-container">
            <form action="#">
                <div class="grid grid-two-column contact-div">
                    <div>
                        <label for="username"></label>
                        <input type="text" name="username" placeholder="Username" id="username" />
                    </div>

                    <div>
                        <label for="email"></label>
                        <input type="email" name="email" placeholder="Email" id="email" />
                    </div>
                </div>
                <div>
                    <input type="text" name="subject" placeholder="Subject" id="" />
                </div>
                <div>
                    <label for="textarea"></label>
                    <textarea name="textarea" id="textarea" cols="30" rows="7 "></textarea>
                </div>
                <div>
                    <input type="submit" name="submit" className='btn-send' id="submit" value="SEND MESSAGE" />
                </div>
            </form>
        </div>
    </section>
        </>
    );
}

export default contact;