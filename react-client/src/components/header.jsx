import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { styled } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const MyButton = styled(Button)({
  border: 0,
  borderRadius: 3,
  padding: "20px 20px",
  margin: "auto",
  fontStyle: "normal",
  fontWeight: "200px",
  fontSize: "18px",
  color: "#0A194F",
});

const MyToolbar = styled(Toolbar)({
  padding: "1px"
});

const MyTypography = styled(Typography)({
  color: "#0A194F",
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  //checking if there's a token for the person who's pressing on the account icon
  handlePersonIconClick(e) {
    e.preventDefault();
    console.log("Person Icon clicked.");
    if (localStorage.length > 0) {
      window.location = "http://localhost:3000/profile";
    } else {
      window.location = "http://localhost:3000/signup";
    }
  }

  //rendering the header that contains the pages, each redirected to its path
  render() {
    return (
      <div>
        <Grid>
          <AppBar color="white">
            <MyToolbar>
              <Grid container direction="row" justify="space-between">
                <img
                  src="https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"
                  width="150"
                  height="70" ></img>

                <Link to="/" style={{ textDecoration: "none" }}>
                  <MyButton color="inherit">
                    <b>HOME</b>
                  </MyButton>
                </Link>
                <Link to="/inventory" style={{ textDecoration: "none" }}>
                  <MyButton color="inherit">
                    <b>INVENTORY</b>
                  </MyButton>
                </Link>
                <Link to="/addcar" style={{ textDecoration: "none" }}>
                  <MyButton color="inherit">
                    <b>Add Car</b>
                  </MyButton>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <MyButton color="inherit">
                    <b>ABOUT US</b>
                  </MyButton>
                </Link>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <MyButton color="inherit">
                    <b>REGISTER</b>
                  </MyButton>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <MyButton color="inherit">
                    <b>LOG IN</b>
                  </MyButton>
                </Link>
                <IconButton>
                  <PersonIcon onClick={this.handlePersonIconClick.bind(this)} />
                </IconButton>
              </Grid>
            </MyToolbar>
          </AppBar>
        </Grid>
      </div>
    );
  }
}
