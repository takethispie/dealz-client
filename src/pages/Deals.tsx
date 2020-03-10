import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonButton,
  IonIcon,
  IonModal
} from "@ionic/react";
import "./Deals.css";
import DealCard from "components/DealCard";
import { connect, ConnectedProps } from "react-redux";
import {
  ThunkLoadDeals,
  ThunkVoteDeal,
  ThunkCreateDeal
} from "stores/dealReducer/deal.thunk";
import { RootState } from "stores/root.reducer";
import { addOutline, logInOutline, logIn } from "ionicons/icons";
import NewDeal from "components/NewDeal";
import { ThunkOpenAuth, ThunkCloseAuth, ThunkLogin } from "stores/authReducer/auth.thunk";
import { OpenAuth, CloseAuth } from "stores/authReducer/auth.actions";
import Login from "./Login";

const mapState = (state: RootState) => {
  return {
    deals: state.dealReducer.Deals,
    loading: state.dealReducer.IsLoading,
    errorMessage: state.dealReducer.ErrorMessage,
    page: state.dealReducer.Page,
    connectedUser: state.authReducer.ConnectedUser,
    showAuthModal: state.authReducer.IsOpen
  };
};

const mapDispatch = {
  loadDeals: ThunkLoadDeals,
  voteDeal: ThunkVoteDeal,
  addDeal: ThunkCreateDeal,
  openAuth: ThunkOpenAuth,
  closeAuth: ThunkCloseAuth,
  login: ThunkLogin
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Deals: React.FC<PropsFromRedux> = ({
  deals,
  loadDeals,
  loading,
  page,
  errorMessage,
  voteDeal,
  connectedUser,
  addDeal,
  openAuth,
  closeAuth,
  showAuthModal,
  login
}) => {
  useEffect(() => {
    loadDeals(page);
  }, [loadDeals, page]);

  const [showNewDealModal, setShowNewDealModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tout les Deals</IonTitle>
          <IonButtons slot="primary">
            {connectedUser === undefined ? (
              <IonButton onClick={openAuth} color="primary">
                <IonIcon icon={logInOutline}></IonIcon>
                connexion
              </IonButton>
            ) : (
              <IonButton fill="solid" color="primary"
                onClick={() => {
                  setShowNewDealModal(true);
                }}
              >
                <IonIcon icon={addOutline}></IonIcon>
                Poster
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tout les Deals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {deals.map(deal => (
              <IonCol key={deal.Id} sizeSm="12" sizeXs="12" sizeLg="3">
                <DealCard deal={deal}></DealCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonModal
        isOpen={showNewDealModal}
        onDidDismiss={() => {
          setShowNewDealModal(false);
        }}
      >
        <NewDeal addDeal={addDeal} currentUser={connectedUser}></NewDeal>
      </IonModal>
      <IonModal isOpen={showAuthModal} onDidDismiss={closeAuth}>
        <Login login={login}></Login>
      </IonModal>
    </IonPage>
  );
};

export default connector(Deals);
