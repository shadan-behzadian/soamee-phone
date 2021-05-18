import React, { Component } from "react";
import axios from "axios";
import PhoneDetails from "./PhoneDetails";
import PhoneNotFound from "./PhoneNotFound";
import Loading from "./Loading";
import "../style/phoneList.css";
import DeletePhone from "./DeletePhone";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    phones: [],
    search: "",
    selectedPhone: "",
  };
  //handle search
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  componentDidMount() {
    this.getAllPhones();
  }

  getAllPhones = () => {
    axios.get("/api/phones").then((res) =>
      this.setState({
        phones: res.data,
      })
    );
  };

  toggleInfo = (phoneId) => {
    this.setState({
      selectedPhone: phoneId,
    });
  };

  render() {
    //added for earch bar
    let filteredPhones = this.state.phones.filter((thePhone) => {
      return (
        thePhone.name.toUpperCase().indexOf(this.state.search.toUpperCase()) !==
        -1
      );
    });

    if (this.state.phones.length !== 0) {
      if (filteredPhones.length !== 0) {
        return (
          <div className="mainPage">
            <label>
              Search phones:
              <input
                type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder="e.g. Iphone 11"
              />
            </label>
            <div className="allPhones">
              {filteredPhones.map((phone) => (
                <div key={phone._id} className="individualPhone">
                  <img
                    src={phone.imageFileName}
                    alt="phone"
                    onClick={() => this.toggleInfo(phone._id)}
                  />
                  <DeletePhone
                    id={phone._id}
                    getAllPhones={this.getAllPhones}
                  />
                  <PhoneDetails
                    detail={phone}
                    isVisible={this.state.selectedPhone === phone._id}
                  />
                </div>
              ))}
            </div>
            <Link to={`/createphone`}>
              <i className="large material-icons addBtn">add_circle_outline</i>
            </Link>
          </div>
        );
      } else {
        return (
          <div className="mainPage">
            <label>
              Search phones:
              <input
                type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder="e.g. Iphone 11"
              />
            </label>
            <PhoneNotFound />
          </div>
        );
      }
    } else {
      return <Loading />;
    }
  }
}

export default Home;
