import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { flaskOutline, personOutline, logOutOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Deals from './pages/Deals';
import MyDeals from './pages/MyDeals';
import Account from './pages/Account';
import Login from 'pages/Login';
import { RootState } from 'stores/root.reducer';
import { connect } from 'react-redux';
import { ConnectedProps } from 'react-redux';
import { ThunkLogin } from 'stores/authReducer/auth.thunk';

const mapState = (state: RootState) => ({
  currentUser: state.authReducer.ConnectedUser,
  showAuthModal: state.authReducer.IsOpen
});

const mapDispatch = {
  login: ThunkLogin
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const App: React.FC<Props>= ({ currentUser, showAuthModal, login }) => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* {
            currentUser === undefined ? (
              <Route path="*" component={Login}></Route>
            ) : (<></>)
          } */}
          <Route path="/tab1" component={Deals} exact={true} />
          <Route path="/tab2" component={MyDeals} exact={true} />
          <Route path="/tab3" component={Account} />
          <Route path="/" render={() => {
            return <Redirect to="/tab1" />
          }} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={flaskOutline} />
            <IonLabel>Deals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={flaskOutline} />
            <IonLabel>Mes Deals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={personOutline} />
            <IonLabel>Mon Compte</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" onClick={() => {console.log("disconnect")}}>
            <IonIcon icon={logOutOutline} />
            <IonLabel>Se Deconnecter</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default connector(App);
