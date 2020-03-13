import React from "react"
import Titles from "./Title"





class Contact extends React.Component {
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
                              <p class="contact-text"> Contact us here: weatherapp@gmail.com
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

export default Contact