import React, {useEffect} from "react";
import {getAllusers} from "../services/userApi";

function LoginPage() {

    useEffect( () => {
        getAllusers().then(
         res => console.log(res)
        );
    }, []);

    return(
        <div>
            Login Page
        </div>
    )

}

export default LoginPage