import React from "react";
import { render } from "react-dom";

const Popup = () => {
    console.log("Rifat Muhtasim")

    return (
        <div>
            <h1>Non Fungible Domain</h1>
            <p>Chief Technical Officer at Wasitav Limited</p>
        </div>
    )
}

render(<Popup />, document.getElementById("react-target"))