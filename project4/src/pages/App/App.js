import React, { Component } from "react";
import "../../index.css";
import { Link, Route } from "react-router-dom";
import Movie from "../../components/movie/Movie";
import Home from "../../components/home/Home";
import { Layout, Menu } from "antd";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import userService from "../../utils/userService";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <Layout className="layout" style={{ height: "100%" }}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[window.location.pathname]}
          >
            <Menu.Item key="/home">
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="/movie">
              <Link to="/movie/in_theaters/1">Movie</Link>
            </Menu.Item>
            <Menu.Item key="/login">
              <Link to="/login">Log in</Link>
            </Menu.Item>
            <Menu.Item key="/signup">
              <Link to="/signup">Sign up</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Route path="/home" component={Home}></Route>
        <Route path="/movie" component={Movie}></Route>
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
      </Layout>
    );
  }
}

export default App;
