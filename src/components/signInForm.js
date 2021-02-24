import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./form.css";
const SignIn = () => {
    const history = useHistory();

    const [userName_, setUsername] = useState("");
    const [password_, setPassword] = useState("");
    const handleLogIn = (event) => {
        const { userName, password } = JSON.parse(localStorage.getItem("userDetails"));

        if (userName === userName_&& password===password_) {
            alert("LogIn successfuly");
            history.push("/dashboard");
         }
        else {
            alert("Invalid credentials")

        }




    }
    return (<div>
        <div className="container">
            <section id="content">
                <form onSubmit={(e) => handleLogIn(e)}>
                    <h1>Login Form</h1>
                    <div>
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required="" id="username" />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required="" id="password" />
                    </div>
                    <div>
                        <input type="submit" value="Log in" />

                        <a href="/sign-up" >Register</a>
                    </div>
                </form>

            </section>
        </div>
    </div>);
}

export default SignIn;