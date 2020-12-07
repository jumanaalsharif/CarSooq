import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import NaveBar from "./components/profile.jsx";
import Header from "./header.jsx";
import $ from "jquery";

export default class addcar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: "", year: "", colour: "", price: "" };
  }

  onChangeBrandHandler(event) {
    this.setState(
      {
        brand: event.target.value,
      },
      () => {
        this.props.onSubmit(this.state);
      },
    );
  }

  onChangeYearHandler(event) {
    this.setState(
      {
        year: event.target.value,
      },
      () => {
        this.props.onSubmit(this.state);
      },
    );
  }

  onChangeColourHandler(event) {
    this.setState(
      {
        colour: event.target.value,
      },
      () => {
        this.props.onSubmit(this.state);
      },
    );
  }

  onChangePriceHandler(event) {
    this.setState(
      {
        price: event.target.value,
      },
      () => {
        this.props.onSubmit(this.state);
      },
    );
  }

render() {
    return (
      <p>Hello</p>
{/* <DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
) */}
    }
  }