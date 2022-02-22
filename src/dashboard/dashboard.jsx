import React from "react";
import { MenuAppBar } from "../components/appbar/appbar";
import SidebarMenu from "../components/sidebar/sidebarMenu";
import {
  AppbarContainer,
  Container1,
  DashboardContainer,
  PagesContainer,
  SidebarContainer,
} from "./dashbboardElements";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import AllAdmin from "../pages/members/membersAll";
import Clients from "../pages/members/clients";
import Administrateurs from "../pages/members/admin";
import Managers from "../pages/members/manager";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <AppbarContainer>
        <MenuAppBar />
      </AppbarContainer>

      <Container1>
        <SidebarContainer>
          <SidebarMenu />
        </SidebarContainer>
        <PagesContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/members" component={AllAdmin} />
            <Route path="/clients" component={Clients} />
            <Route path="/admins" component={Administrateurs} />
            <Route path="/managers" component={Managers} />
          </Switch>
        </PagesContainer>
      </Container1>
    </DashboardContainer>
  );
};

export default Dashboard;