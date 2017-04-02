import React, { Component } from "react";
import { connect } from 'react-redux'


class Hello extends Component {

  render() {
    console.log()
    return <h3>Hello React!</h3>;
  }
}

function mapStateToProps(state) {
  return {
    example: state.example
  }
}

export default connect(mapStateToProps, null)(Hello);
