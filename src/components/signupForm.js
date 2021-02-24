import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./form.css";
const SignUp = () => {
    const history = useHistory();

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (userName && password && phoneNumber && email) {
            console.log(userName, password, phoneNumber, email)
        alert("User registered Successfuly")
        alert("your Username and Password is " + JSON.stringify({ userName, password }))
        localStorage.setItem("userDetails", JSON.stringify({ userName, password, phoneNumber, email }))
            history.push("/")

        }
        else {
            alert("fill all the details")
        }

    }





    return (<div>
        <div className="container">
            <section id="content">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h1>SignUp Form</h1>
                    <div>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" required="" id="username" />
                    </div>
                    <div>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" required="" id="email" />
                    </div>
                    <div>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="" id="password" />
                    </div>
                    <div>
                        <input type="number" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required="" id="phone" />
                    </div>
                    <div>
                        <input type="submit" value="Sign up" />

                        <a href="/" >Log In</a>
                    </div>
                </form>

            </section>
        </div>

    </div>);
}

export default SignUp;