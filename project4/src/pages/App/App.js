import React from "react";
import "../../index.css";
import { Link, Route } from "react-router-dom";
import Movie from "../../components/movie/movie";
import Home from "../../components/home/home";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
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
            <Link to="/movie">Movie</Link>
          </Menu.Item>
          <Menu.Item key="/login">
            <Link to="/login">Log in</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", height: "100%" }}>
        <Route path="/home" component={Home}></Route>
        <Route path="/movie" component={Movie}></Route>
      </Content>
    </Layout>
  );
}

export default App;
