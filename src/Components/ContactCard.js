import React from "react";
import ContactImage from "./contactimage.png";

const ContactCard = (props) => {
console.log(props);
   const {name, email, id}= props.contact;
   return(
    <div className="item">
        <img className="ui avatar image" src={ContactImage} alt="user" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
         </div>
         <i className="trash alternate outline icon" 
         style={{ color:"red"}}
         onClick={() => props.clickHandler(id)}
         ></i>
   </div>
   );
};

export default ContactCard;