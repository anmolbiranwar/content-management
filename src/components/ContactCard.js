import React from 'react';
import user from "../images/user.png";

const ContactCard = (props) => {
  const {id, name, email}= props.contact;
  return (
    <div className="row" style={{marginTop:'20px'}}>
      <img  src={user} alt='userImage' style={{width:'80px'}}/>
         <div className="col-sm-5">
            <dt>{name}</dt>
            <dd>{email}</dd>
         </div>
         <i className="col-sm-5 text-end bi bi-trash fa-lg" style={{color:'red'}}></i>
         <hr />
        </div>
  );
};

export default ContactCard;