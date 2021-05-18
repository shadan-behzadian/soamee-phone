import React, { Component } from "react";
import axios from "axios";
import "../style/createPhone.css";
import { Link } from "react-router-dom";
//form to add phone to main page with post api
class CreatePhone extends Component {
  state = {
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: "",
    imageFileName: "",
    screen: "",
    processor: "",
    ram: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.manufacturer]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.color]: e.target.value,
      [e.target.price]: e.target.value,
      [e.target.imageFileName]: e.target.value,
      [e.target.screen]: e.target.value,
      [e.target.processor]: e.target.value,
      [e.target.ram]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const phone = {
      name: this.state.name,
      manufacturer: this.state.manufacturer,
      description: this.state.description,
      color: this.state.color,
      price: this.state.price,
      imageFileName: this.state.imageFileName,
      screen: this.state.screen,
      processor: this.state.processor,
      ram: this.state.ram,
    };
    axios
      .post("/api/phones", { phone })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="createPhone">
          <label>
            Phone name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>

          <label>
            Manufacturer:
            <input
              type="text"
              name="manufacturer"
              value={this.state.manufacturer}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>

          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>

          <label>
            Color:
            <input
              type="text"
              name="color"
              value={this.state.color}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>

          <label>
            Image link:
            <input
              type="url"
              name="imageFileName"
              value={this.state.imageFileName}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>

          <label>
            Screen:
            <input
              type="text"
              name="screen"
              value={this.state.screen}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>

          <label>
            Processor:
            <input
              type="text"
              name="processor"
              value={this.state.processor}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>

          <label>
            Ram:
            <input
              type="text"
              value={this.state.ram}
              name="ram"
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
          <Link to={"/"}>
            <button className="btn waves-effect waves-light">
              <i className="material-icons right">home</i>
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreatePhone;
