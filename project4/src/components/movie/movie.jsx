import React from "react";
import "../../index.css";
import { Link, Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
const {} = Menu;
const { Content, Sider } = Layout;

const Movie = (props) => (
  <Layout style={{ height: "100%" }}>
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        <Menu.Item key="1">
          <Link to="/movie/in_theaters/1">In theaters</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/movie/coming_soon/1">Coming soon</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ paddingLeft: "1px" }}>
      <Content style={{ padding: "0 50px", padding: 10, flex: 1 }}>
        <Switch>
          <Route path="/movie/detail/:id" component={MovieDetail}></Route>
          <Route path="/movie/:type/:page" component={MovieList}></Route>
        </Switch>
      </Content>
    </Layout>
  </Layout>
);

export default Movie;
