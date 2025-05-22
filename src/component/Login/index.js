import { Component } from "react";
import Cookies from "js-cookie";
import ThemeContext from "../Contexts/ThemeContext";
// import { withRouter } from 'react-router-dom';

import {
  LoginContainer,
  LoginForm,
  Logo,
  InputLabel,
  InputField,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  ErrorMsg,
  LoginButton,
} from "./styledComponent";

class Login extends Component {
  state = {
    showPassword: false,
    username: "",
    password: "",
    error: false,
  };

  onToggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = {
      username,
      password,
    };
    console.log(userDetails);
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      const jwtToken = data.jwt_token;
      console.log(this.props);
      console.log(jwtToken);
      Cookies.set("jwt_token", jwtToken, { expires: 30 });
      const { history } = this.props;
      history.replace("/"); // Redirect to the home page
    } else {
      this.setState({ error: true });
    }
    // Add your login logic here
  };

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { showPassword, error } = this.state;

    const { history } = this.props;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      history.replace("/");
    }

    return (
      <ThemeContext.Consumer>
        {({ isDarkTheme }) => {
          const logoUrl = isDarkTheme
            ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png";
          return (
            <LoginContainer $isDarkTheme={isDarkTheme}>
              <LoginForm
                onSubmit={this.onSubmitForm}
                $isDarkTheme={isDarkTheme}
              >
                <Logo src={logoUrl} alt="website logo" />
                <InputLabel htmlFor="username" $isDarkTheme={isDarkTheme}>
                  Username
                </InputLabel>
                <InputField
                  type="text"
                  id="username"
                  name="username"
                  required
                  onChange={this.handleUsername}
                />
                <InputLabel htmlFor="password" $isDarkTheme={isDarkTheme}>
                  Password
                </InputLabel>
                <InputField
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  onChange={this.handlePassword}
                />
                <CheckboxContainer>
                  <Checkbox
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    checked={showPassword}
                    onChange={this.onToggleShowPassword}
                  />
                  <CheckboxLabel
                    htmlFor="remember-me"
                    $isDarkTheme={isDarkTheme}
                  >
                    Show password
                  </CheckboxLabel>
                </CheckboxContainer>

                <LoginButton type="submit">Login</LoginButton>
                {error && <ErrorMsg>Invalid username or password</ErrorMsg>}
              </LoginForm>
            </LoginContainer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default Login;
