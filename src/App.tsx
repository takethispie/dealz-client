import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonSplitPane
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { flaskOutline, personOutline, logOutOutline, logOut } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Deals from "./pages/Deals";
import MyDeals from "./pages/MyDeals";
import Account from "./pages/Account";
import { RootState } from "stores/root.reducer";
import { connect } from "react-redux";
import { ConnectedProps } from "react-redux";
import Menu from "components/Menu";
import { ThunkLogout } from "stores/authReducer/auth.thunk";

const mapState = (state: RootState) => ({
  currentUser: state.authReducer.ConnectedUser,
  showAuthModal: state.authReducer.IsOpen
});

const mapDispatch = {
  logout: ThunkLogout
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const App: React.FC<Props> = ({ currentUser, logout }) => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu selectedPage={selectedPage} />
          <IonRouterOutlet id="main">
            <Route
              path="/deals"
              render={props => {
                setSelectedPage("deals");
                return <Deals/>;
              }}
              exact={true}
            />
            <Route
              path="/disconnect"
              render={props => {
                setSelectedPage("deals");
                logout();
                return <Deals/>;
              }}
              exact={true}
            />
            {currentUser != undefined? (
              <Route
                path="/mydeals"
                render={props => {
                  setSelectedPage('mydeals');
                  return <MyDeals/>;
                }}
                exact={true}
              />
            ) : (
              <></>
            )}
            <Route
              path="/"
              render={() => <Redirect to="/deals" />}
              exact={true}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default connector(App);
