import React from "react"
import Titles from "./Title"





class About extends React.Component {
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
                              <p class="contact-text"> This Weather App is free to use, and will never blackmail you in exchange for personal
                                 information.
                              </p>
                     
                         </div>
                     </div>  
                 </div>  
             </div>  
         </div>
     </div>

        )
    }
}

    



export default About