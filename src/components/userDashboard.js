import React, { useEffect, useState } from 'react';
import "./userDashboard.css";
const UserDashboard = () => {
    
    const [userName, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        const { userName,email,phoneNumber } = JSON.parse(localStorage.getItem("userDetails"));
       setPhoneNumber(phoneNumber);
       setUsername(userName);
       setEmail(email);
    },[]);

       


    return (<div className="w3-light-grey">
        <div className="w3-content w3-margin-top" >
            <div className="w3-row-padding">
                <div className="w3-third">

                    <div className="w3-white w3-text-grey w3-card-4">
                        <div className="w3-display-container">
                            
                            
                        </div>
                        <div className="w3-container">
                        <div className="w3-display-bottomleft w3-container w3-text-black">
                                <h2>{userName}</h2>
                            </div>
                            {/* <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>N/A</p>
                            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p> */}
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{email}</p>
                            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{phoneNumber}</p>
                            <hr/>

                                {/* <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                                <p>Adobe Photoshop</p> */}
                            </div>

                        </div>
                    </div>

                </div>


            </div>






        </div>);
}

export default UserDashboard;