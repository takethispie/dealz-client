import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  bookmarkOutline,
  logOutOutline,
  personOutline,
  flaskOutline
} from "ionicons/icons";
import "./Menu.css";
import { RootState } from "stores/root.reducer";
import { connect } from "react-redux";
import { ConnectedProps } from "react-redux";

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const mapState = (state: RootState) => ({
  currentUser: state.authReducer.ConnectedUser,
  showAuthModal: state.authReducer.IsOpen
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & MenuProps;

const Menu: React.FunctionComponent<Props> = ({
  selectedPage,
  currentUser,
  showAuthModal
}) => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>DealZ</IonListHeader>
          <IonNote></IonNote>
          {currentUser != undefined ? (
            <>
              <IonMenuToggle key={"deals"} autoHide={false}>
                <IonItem
                  className={selectedPage === "deals" ? "selected" : ""}
                  routerLink={"/deals"}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={flaskOutline} />
                  <IonLabel>{"Deals"}</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle key={"mydeals"} autoHide={false}>
                <IonItem
                  className={selectedPage === "mydeals" ? "selected" : ""}
                  routerLink={"/mydeals"}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={flaskOutline} />
                  <IonLabel>{"Mes deals"}</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle key={"account"} autoHide={false}>
                <IonItem
                  className={selectedPage === "account" ? "selected" : ""}
                  routerLink={"/account"}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={personOutline} />
                  <IonLabel>{"Mon Compte"}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </>
          ) : (
            <>
              <IonMenuToggle key={"deals"} autoHide={false}>
                <IonItem
                  className={selectedPage === "deals" ? "selected" : ""}
                  routerLink={"/deals"}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={flaskOutline} />
                  <IonLabel>{"Deals"}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </>
          )}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonList>
          {
            currentUser != undefined ? (
              <IonMenuToggle key={"disconnect"} autoHide={false}>
                <IonItem
                  routerLink={"/disconnect"}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={logOutOutline} />
                  <IonLabel>{"Se Deconnecter"}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ) : (<></>)
          }
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(connector(Menu));
