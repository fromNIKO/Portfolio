import React from 'react';

const Contact = () => {
    return (
        <>
        <main>
            <section id='contact'>
                <div className="container-contact">
                    <h2>Contactez-moi</h2>
                    <div className="hr-contact"></div>
                    <div className="end-contact">
                        <div className="left-part">
                            <h4>Par mail</h4>
                            <a href="mailto:nicodevfs@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                        </div>

                        <div className="middle-part">
                            <h4>Sur linkedin</h4>
                            <a href="https://www.linkedin.com/in/nicolas-torres-a72355218/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>

                        <div className="right-part">
                            <h4>Par téléphone</h4>
                            <a href="tel:0683680716"><i className="fa-solid fa-mobile-screen-button"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            </main>
        </>
    );
};

export default Contact;