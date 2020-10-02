import React from "react";
import MovieItem from "./MovieItem";
import { Spin, Alert, Pagination } from "antd";
import Item from "antd/lib/list/Item";
export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nowPage: parseInt(props.match.params.page) || 1,
      pageSize: 12,
      total: 0,
      isloading: true,
      movieType: props.match.params.type,
    };
  }
  componentWillMount() {
    this.loadMovieListByTypeAndPage();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match);
    this.setState(
      {
        isloading: true,
        nowPage: parseInt(nextProps.match.params.page) || 1,
        movieType: nextProps.match.params.type,
      },
      function () {
        this.loadMovieListByTypeAndPage();
      }
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
  }

  loadMovieListByTypeAndPage = () => {
    const data = require(`../data/${this.state.movieType}.json`);
    setTimeout(() => {
      this.setState({
        isloading: false,
        movies: data.movie_results.slice(
          this.state.nowPage * 12 - 12,
          this.state.nowPage * 12
        ),
        total: data.results,
      });
    }, 1000);
  };

  renderList = () => {
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
        <div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {this.state.movies.map((item) => {
              return (
                <MovieItem
                  {...item}
                  key={item.imdb_id}
                  history={this.props.history}
                ></MovieItem>
              );
            })}
          </div>

          <Pagination
            defaultCurrent={this.state.nowPage}
            pageSize={this.state.pageSize}
            total={this.state.total}
            onChange={this.pageChanged}
          />
        </div>
      );
    }
  };

  pageChanged = (page) => {
    this.props.history.push("/movie/" + this.state.movieType + "/" + page);
  };
}
