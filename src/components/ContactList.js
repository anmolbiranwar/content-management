import React from 'react'

const ContactList = (props) => {
  const renderContactList=props.contacts.map((contact)=>{
    return(
      <div>
        <dt>{contact.name}</dt>
        <dd>{contact.email}</dd>
        <div>
        <i className="bi bi-trash"></i>
        </div>
      </div>
    )
  })
  return (
    <div>{renderContactList}</div>
  )
}

export default ContactList;