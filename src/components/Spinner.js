import React, { Component } from "react";
//import spin from '../spin.gif';
import { ThreeDots } from 'react-loader-spinner'
export class Spinner extends Component {
    render() {
        return (
            <div style={{
                display:"grid",
                placeItems: "center", 
                height: "80vh",
    }
}>
    <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="white"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
            </div >
        )
    }
}

export default Spinner;
