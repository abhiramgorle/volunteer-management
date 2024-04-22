import React from 'react';
import Navbar from '../navbar';
import emailjs from "emailjs-com";
import Footer from '../footer/footer1';
const Help = () => {
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
                        <p>Thank you for choosing NGO management to manage your volunteer activities! Whether you're an organization looking to recruit volunteers or an individual eager to make a difference, this help center is designed to assist you every step of the way.</p>
<h6>Getting Started:</h6>
<p>Organizations: Click on the "Sign Up" button on the homepage and follow the prompts to create your organization profile.
Volunteers: Sign up as a volunteer by filling out the registration form with your details and interests.</p>
<h6>Logging In:</h6>
<p>Use your registered email address and password to log in to your account.</p>
<h6>Dashboard Overview::</h6>
<p>Upon logging in, you'll land on your dashboard where you can access all platform features.
Navigate through the menu options on the sidebar to explore various sections.</p>
<h6>Menu Options:</h6>
<p>Explore "Volunteer Opportunities" to find opportunities matching your interests.
Manage your profile and settings under "My Profile."
Organizations can create and manage volunteer opportunities in the "Manage Opportunities" section.</p>
<h6>Finding Volunteer Opportunities:</h6>
<p>Search and Filters:

Use the search bar to find opportunities by keyword, location, or category.
Refine your search results using filters such as date, time, and skill requirements.
Opportunity Details:

Click on an opportunity to view detailed information including description, requirements, and schedule.</p>
                       </div>
                    <form style={{ marginLeft: '100px' }} onSubmit={onFormSubmit}>
                    </form>
                </box>
            </div>
            <Footer/>

        </>
    );
};

export default Help;