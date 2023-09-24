import React from "react";
import {render} from "react-dom";

const Popup = () => {
    console.log("Rifat Muhtasim")

    return(
        <div>
            <h1>Hello World</h1>
            <p>Chief Technological Officer at WASITAV LIMITED</p>
        </div>
    )
}

render(<Popup />, document.getElementById("react-target"))