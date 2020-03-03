import React from "react";
import Titles from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "6d4a8e50c5982fd7e008b1702ff5bc69";

class App extends React.Component {
    state = {
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        icon: "",
        error: ""
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                error: ""
            });
        }else {
            this.setState({
                temperature: "",
                city: "",
                country: "",
                humidity: "",
                description: "",
                icon: "",
                error: "PLEASE enter the values... 😿"
            });
        }
    }
    render (){
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather} />
                                    <Weather 
                                    temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    icon={this.state.icon}
                                    error={this.state.error}
                                    />
                                </div>
                            </div>  
                        </div>  
                    </div>  
                </div>
            </div>
        )
    }
};





export default App;