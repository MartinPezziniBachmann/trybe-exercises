// import PropTypes from 'prop-types'
import React, { Component } from "react";
import { connect } from "react-redux";
import { vaiAction } from "../redux/actions";
import store from "../redux/store";

export class Header extends Component {
  state = {
    button: "oi",
  };

  render() {
    console.log(store.getState());
    const { subreddit, time, dispatch } = this.props;
    console.log(this.props);
    const { button } = this.state;
    return (
      <header>
        <h1>Reddit Selected Pages</h1>
        <h2>{`Selected: ${subreddit}`}</h2>
        <p>{button}</p>
        <div>
          <label htmlFor="selectSubreddit">Choose a subreddit:</label>
          <select name="selectSubreddit" id="selectSubreddit">
            <option value="reactjs">reactjs</option>
            <option value="frontend">frontend</option>
          </select>
        </div>
        <p>{`Last updated at ${time}`}</p>
        <button type="button" onClick={() => dispatch(vaiAction())}>
          Refresh
        </button>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  subreddit: state.reddit.subreddit,
  time: state.reddit.time,
});

export default connect(mapStateToProps)(Header);
