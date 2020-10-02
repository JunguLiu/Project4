import React from "react";

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          border: "2px solid #ddd",
          textAlign: "center",
          width: "170px",
          margin: "5px",
          boxShadow: "0 0 6px #ddd",
          padding: "4px",
        }}
        onClick={this.goDetail}
      >
        <img
          src={this.props.image}
          style={{ width: "100px", height: "140px" }}
        />
        <h4>title:{this.props.title}</h4>
        <h4>year:{this.props.year}</h4>
      </div>
    );
  }

  goDetail = () => {
    this.props.history.push("/movie/detail/" + this.props.imdb_id);
  };
}
