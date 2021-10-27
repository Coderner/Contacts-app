import React from "react";
import contactimage from "./contactimage.png";

const ContactCard = (props) => {
console.log(props);
   const {name, email}= props.contact;
   return(
    <div className="item">
        <div className="user image" src={contactimage} alt="user" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
         </div>
        <i className="trash alternate outline icon" style={{ color:"red", marginTop:"7px"}}></i>
   </div>
   );
};

export default ContactCard;