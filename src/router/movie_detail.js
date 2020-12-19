import React from "react";

class movie_detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log("실행됨");
    if (location.state) {
      return <span>{location.state.title} hihi</span>;
    } else {
      return null;
    }
  }
}

export default movie_detail;
