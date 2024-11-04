import React from "react";

const Home = () => {

    const googleLogin = () => {
        window.location.href="http://localhost:8080/oauth2/authorization/google";
     }
    const gitHubLogin = () => {
        window.location.href="http://localhost:8080/oauth2/authorization/github";
     }

    return (
        <div>
            <h2>Welcome to OAuth Demo</h2>
            <div>
           <button onClick={googleLogin}><h3>Login with Google</h3></button>
            <button onClick={gitHubLogin}><h3>Login with GitHub</h3></button>
            </div>

        </div>
    );
}
export default Home;