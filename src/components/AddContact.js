import React from 'react'

class AddContact extends React.Component{
  state ={
    name:"",
    email:"",
  };
  add=(e)=>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"", email:""});
  }
  render(){
    return ( 
      <div>
          <h2>Add Contact</h2>
          <form className="ui form" onSubmit={this.add}>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder='Name' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
              </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" className="form-control" placeholder='Email'value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
              </div>
              <button type="button" className="btn btn-primary">Add</button>
          </form>
      </div>
    )
  }
}

export default AddContact;