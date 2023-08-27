import React from 'react'


const ContactList = (props) => {
  const renderContactList=props.contacts.map((contact)=>{
    return(
        <div className="row">
         <div className="col-sm-3">
            <dt>{contact.name}</dt>
            <dd>{contact.email}</dd>
         </div>
         <div className="col-sm-9 text-end">
            <h3><i className="bi bi-trash fa-lg "></i></h3>
         </div>
         <hr></hr>
        </div>
    );
  });
  return (
    <div>{renderContactList}</div>
  )
}

export default ContactList;