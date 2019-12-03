import React, { Component } from "react";
import "./App.css";
import useForm from "react-hook-form";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: "", password: "" };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   };

//   handleSubmit(event) {
//     console.log(
//       "username: " + this.state.username + " password: " + this.state.password
//     );

//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form className="form-login" onSubmit={this.handleSubmit} noValidate>
//         <label className="form-login-label-username" htmlFor="username">
//           Username:
//         </label>
//         <input
//           className="form-login-input-username"
//           type="text"
//           name="username"
//           required
//           value={this.state.username}
//           onChange={this.handleChange}
//         />

//         <label className="form-login-label-password" htmlFor="password">
//           Password:
//         </label>
//         <input
//           className="form-login-input-password"
//           type="password"
//           name="password"
//           required
//           value={this.state.password}
//           onChange={this.handleChange}
//         />
//         <input className="form-login-submit" type="submit" value="Log in" />
//       </form>
//     );
//   }
// }
// export default Login;

export default function Login() {
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="login-container">
      <form className="form-login-container" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          placeholder="Username"
          ref={register({
            required: "This is a required",
            minLength: {
              value: 3,
              message: "Min length is 3"
            },
            maxLength: {
              value: 10,
              message: "Max length is 10"
            }
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          name="password"
          placeholder="password"
          ref={register({
            required: "This is required",
            pattern: {
              value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
              message:
                "Must contain: one number, one uppercase and lowercase letter, at least 8 characters"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input className="form-login-submit" type="submit" />
      </form>
    </div>
  );
}
