import React from 'react';

import './Footer.css'; // Import your CSS file for the footer

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="text-light">
                            Latest Update: 14 Oct 2023
                            <br />
                            Have questions or want to connect?
                            <br />
                            Email me at <a href="mailto:ashwani786dubey@gmail.com" className="text-light">ashwani786dubey@gmail.com</a>
                          
                            <marquee  behavior="scroll" direction="left">If you have any doubt or you want to know more about me ping me ashwani786dubey@gmail.com</marquee>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
