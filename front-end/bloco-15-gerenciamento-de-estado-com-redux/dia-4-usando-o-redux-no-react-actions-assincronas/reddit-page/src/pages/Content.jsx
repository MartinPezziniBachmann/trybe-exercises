// import PropTypes from 'prop-types'
import React, { Component } from "react";
import { connect } from "react-redux";

export class Content extends Component {
  render() {
    // const { posts } = this.props;
    return (
      <main>
        <h1>Posts:</h1>
        <ol>
          {/* {posts.map((post) => (
            <li>post</li>
          ))} */}
        </ol>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.reddit.posts,
});

export default connect(mapStateToProps)(Content);
