import React from "react";
import Titles from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "6d4a8e50c5982fd7e008b1702ff5bc69";

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/
        weather?q=London,uk&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
    }
    render (){
        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather />
            </div>
        )
    }
};

export default App;