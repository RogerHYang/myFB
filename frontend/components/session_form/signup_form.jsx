import React from "react";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      gender: "",
      birth_month: "",
      birth_date: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => <li key={error}>{error}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div>Create a New Account</div>
        <div>It’s quick and easy.</div>
        <form onSubmit={this.handleSubmit}>          
          {this.renderErrors()}
          <div id="reg_form_box">
            <div id="fullname_field">
              <input type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                placeholder="First name"
              />            
              <input type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                placeholder="Last name"
              />
            </div>       
            <input type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Mobile number or email"
            />
            <div id="password_field">
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="New password"
              />
            </div>
            <div>
              <div>Birthday</div>
              <select defaultValue="6" onChange={this.update("birthday_month")}>
                <option value="0" disabled>Month</option>                  
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>                  
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select defaultValue="1" onChange={this.update("birthday_day")}>
                <option value="0" disabled>Day</option>
                {[...Array(31).keys()].map(i => <option key={i+1} value={`${i+1}`}>{i+1}</option>)}
              </select>
              <select defaultValue="2021" onChange={this.update("birthday_year")}>
                <option value="0" disabled>Year</option>
                {[...Array(117).keys()].map(i => <option key={2021-i} value={`${2021-i}`}>{2021-i}</option>)}
              </select>
            </div>
            <div>
              <div>Gender</div>
              <span data-type="radio" data-name="gender_wrapper">
                <label>
                  <input type="radio" name="gender" value="1"></input>
                  Female
                </label>
                <label>
                  <input type="radio" name="gender" value="2"></input>
                  Male
                </label>
              </span>
            </div>
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }
}