import React, { Component } from "react";
import axios from "axios";
import "../style/deletePhone.css";
//Delete phone from main page with delete api
class DeletePhone extends Component {
  state = {
    phoneId: "",
  };

  componentDidMount() {
    this.setState({
      phoneId: this.props.id,
    });
  }

  handleDelete = (event) => {
    axios.delete(`api/phones/${this.state.phoneId}`);
    this.props.getAllPhones();
  };

  render() {
    return (
      <i onClick={this.handleDelete} className="material-icons deletePhone">
        delete
      </i>
    );
  }
}

export default DeletePhone;
