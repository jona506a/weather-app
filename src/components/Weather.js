import React from "react";

const Weather = props => (
        <div className="weather_info">
        { 
            props.city && props.country && <p className="weather_key">Location: 
                    <span className="weather_value"> { props.city }, { props.country }</span>
                </p>
        }
        { 
            props.temperature && <p className="weather_key">Temperature: 
                    <span className="weather_value"> { props.temperature }</span>
                </p> 
        }
        { 
            props.humidity && <p className="weather_key">Humidity: 
                    <span className="weather_value"> { props.humidity }</span>
                </p> 
        }
        { 
            props.description && <p className="weather_key">Conditions: 
                    <span className="weather_value"> { props.description }</span>
                </p> 
        }
        { 
            props.icon && <img src ={`http://openweathermap.org/img/w/${props.icon}.png`} alt="wthr img" />
        
        }
        {
            props.error && <p className="weather_error">Error: {props.error}</p>
        }

        </div>
);  


export default Weather;