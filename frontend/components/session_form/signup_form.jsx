import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      gender: "",
      birth_year: "2021",
      birth_month: "6",
      birth_day: "1",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      const { birth_year, birth_month, birth_day } = user;
      user.birth_date = `${birth_year}-${birth_month.padStart(2, '0')}-${birth_day.padStart(2, '0')}`;
      console.log(user)
      this.props.processForm(user);
  }

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form-fullname">
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
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="New password"
          />
          <div>
            <div>Birthday</div>
            <select defaultValue="6" onChange={this.update("birth_month")}>
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
            <select defaultValue="1" onChange={this.update("birth_day")}>
              <option value="0" disabled>Day</option>
              {[...Array(31).keys()].map(i => <option key={i+1} value={`${i+1}`}>{i+1}</option>)}
            </select>
            <select defaultValue="2021" onChange={this.update("birth_year")}>
              <option value="0" disabled>Year</option>
              {[...Array(117).keys()].map(i => <option key={2021-i} value={`${2021-i}`}>{2021-i}</option>)}
            </select>
          </div>
          <div>
            <div>Gender</div>
            <div>
              <label>
                <input type="radio" name="gender" value="Female" onChange={this.update("gender")}></input>
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="Male" onChange={this.update("gender")}></input>
                Male
              </label>
            </div>
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}