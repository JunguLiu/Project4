import React from "react";
import { Spin, Alert, Button } from "antd";
export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      isloading: true,
    };
  }

  componentWillMount() {
    const data = require("../data/all.json");
    const found = data.movie_results.find(
      (e) => e.imdb_id == this.props.match.params.id
    );

    setTimeout(() => {
      this.setState({
        info: found,
        isloading: false,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.goBack}>
          Return to Movie Page
        </Button>
        {this.renderInfo()}
      </div>
    );
  }

  goBack = () => {
    this.props.history.go(-1);
  };
  renderInfo() {
    if (this.state.isloading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="Loading"
            description="We're working very Hard .... Really"
            type="info"
          />
        </Spin>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>{this.state.info.title}</h2>
          <img
            src={this.state.info.image}
            style={{ width: "300px", height: "420px" }}
          />
          <h1>{this.state.info.year}</h1>
        </div>
      );
    }
  }
}
