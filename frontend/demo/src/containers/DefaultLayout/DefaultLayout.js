import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container, Nav, NavItem } from "reactstrap";
import "./DefaultLayout.css";

import {
  AppFooter,
  AppHeader,
  AppNavbarBrand,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
  AppSidebarToggler
} from "../../../../src";
// sidebar nav config
import navigation from "../../_nav.js";
// routes config
import routes from "../../routes.js";

import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";
import { logout } from "../../services/Auth.js";

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <AppNavbarBrand
              full={{ src: logo, width: 150, height: 50, alt: "Unilever" }}
              minimized={{ src: sygnet, width: 80, height: 40, alt: "Unilever" }}
            />
          <AppSidebarToggler className="d-md-down-none" display="lg" />
          <Nav className="ml-auto" navbar>
            <NavItem className="d-md-down-none mr-4">
              Seja bem vindo,<b>{` ${localStorage.getItem("username")}`}</b>
            </NavItem>
          </Nav>
          <a
            href="#"
            onClick={() => {
              logout();
              this.props.history.push("/login");
            }}
            style={{ textDecoration: "none", marginTop: "4px" }}
          >
            <i className="cui-account-logout" />
          </a>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav
              navConfig={navigation}
              {...this.props}
              router={router}
            />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Container fluid style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 30}}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={true}
                      name={route.name}
                      render={props => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/Error" />
              </Switch>
            </Container>
          </main>
        </div>
        <AppFooter>
          <span>
            <a href="https://coreui.io">TSE</a> &copy; 2019
          </span>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
