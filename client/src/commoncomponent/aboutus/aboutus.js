import React from 'react';
import Navbar from '../navbar';
import emailjs from "emailjs-com";
import Footer from '../footer/footer1';
const Aboutus = () => {
    function onFormSubmit(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_p5ff6vb',
            'template_ydofbeq',
            e.target,
            "PIOhpIvW-4RUu5A5a"
        )
            .then(res => {
                console.log(res);
                alert("Your feedback successfully Submitted..!!!")
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <Navbar />
            <br />
            <div className="">
                <box className="container" style={{ display: 'flex', justifyContent: 'center', alignitems: "center" }}>
                    <div style={{ marginRight: '30px' }}>
                        <p>NGO Volunteers is first-of-its-kind volunteer match platform in NGO mangement. It is a free platform where the non-profit organizations can post volunteer opportunities and where passionate, skilled volunteers can find the right opportunity to lend their talent and time.

In addition to matching volunteers and recruiters, the platform provides both parties with tools and resources to help enhance their community engagement programs.
A NGO management platform  designed to streamline the process of recruiting, coordinating, and managing volunteers for various organizations and events. These systems provide a centralized platform where organizations can post volunteer opportunities, communicate with volunteers, track volunteer hours, and manage volunteer data efficiently.
Implementing a volunteer management system can help organizations save time, improve communication, and better engage their volunteer base, ultimately enhancing their ability to achieve their mission and goals.</p>
                       </div>
                    <form style={{ marginLeft: '100px' }} onSubmit={onFormSubmit}>
                    </form>
                </box>
            </div>
            <Footer/>

        </>
    );
};

export default Aboutus;