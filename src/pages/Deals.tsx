import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButtons, IonButton, IonIcon, IonModal } from '@ionic/react';
import './Deals.css';
import DealCard from 'components/DealCard';
import { DealState } from 'stores/dealReducer/deal.state';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkLoadDeals, ThunkVoteDeal } from 'stores/dealReducer/deal.thunk';
import { RootState } from 'stores/root.reducer';
import { addOutline } from 'ionicons/icons';
import NewDeal from 'components/NewDeal';

const mapState = (state: RootState) => { 
  return {
  deals: state.dealReducer.Deals,
  loading: state.dealReducer.IsLoading,
  errorMessage: state.dealReducer.ErrorMessage,
  page: state.dealReducer.Page
}}

const mapDispatch = {
  loadDeals: ThunkLoadDeals,
  voteDeal: ThunkVoteDeal
}

const connector = connect(
  mapState,
  mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

const Deals: React.FC<PropsFromRedux> = ({ deals, loadDeals, loading, page, errorMessage, voteDeal}) => {
  useEffect(() => {
    loadDeals(page)
  }, [loadDeals, page]);

  const [showNewDealModal, setShowNewDealModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tout les Deals</IonTitle>
          <IonButtons slot="primary">
            <IonButton fill="solid" color="primary" onClick={() => {setShowNewDealModal(true);}}>
              <IonIcon icon={addOutline}></IonIcon>
              Poster
            </IonButton>
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
              {
                deals.map(deal => (
                  <IonCol sizeSm="12" sizeXs="12" sizeLg="3">
                    <DealCard deal={deal}></DealCard>
                  </IonCol>
                ))
              }
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonModal isOpen={showNewDealModal} onDidDismiss={() => {setShowNewDealModal(false);}}>
        <NewDeal></NewDeal>
      </IonModal>
    </IonPage>
  );
};

export default connector(Deals);
