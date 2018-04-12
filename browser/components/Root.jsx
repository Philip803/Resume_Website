import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Rotue, Redirect } from "react-router-dom";

export function Root() {
  return <div>Hello World</div>;
}

const mapState = null;

export default connect(mapState)(Root);
