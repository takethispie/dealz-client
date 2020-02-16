import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Deals.css';
import DealCard from 'components/DealCard';
import { DealState } from 'stores/dealReducer/deal.state';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkLoadDeals } from 'stores/dealReducer/deal.thunk';

const mapState = (state: DealState) => ({
  deals: state.Deals,
  loading: state.IsLoading,
  errorMessage: state.ErrorMessage,
  page: state.Page
})

const mapDispatch = {
  loadDeals: ThunkLoadDeals
}

const connector = connect(
  mapState,
  mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

const Deals: React.FC<PropsFromRedux> = ({ deals, loadDeals, loading, page, errorMessage}) => {
  useEffect(() => {
    loadDeals(page)
  }, [loadDeals, page]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tout les Deals</IonTitle>
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
            <IonCol sizeSm="12" sizeXs="12" sizeLg="4">
              {
                deals.map(deal => (
                  <DealCard Deal={deal}></DealCard>
                ))
              }
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default connector(Deals);
