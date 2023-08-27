import React from 'react'

const AddContact = () => {
  return (
    <div>
        <h2>Add Contact</h2>
        <form className="ui form">
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" placeholder='Name'/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="text" className="form-control" placeholder='Email'/>
            </div>
            <button type="button" class="btn btn-primary">Add</button>
        </form>
    </div>
  )
}

export default AddContact;