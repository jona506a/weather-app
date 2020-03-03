import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City"></input>
        <input type="text" name="country" placeholder="Country"></input>
        <button>Get Weather</button>
    </form>
);  

export default Form;