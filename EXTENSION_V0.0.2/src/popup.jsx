import React from "react";
import {render} from "react-dom";

const Popup = () => {
    console.log("Rifat Muhtasim")

    return(
        <div>
            <h1>Hello World</h1>
            <p>Chief Executive Officer at Wasiname Corporation</p>
        </div>
    )
}

render(<Popup />, document.getElementById("react-target"))