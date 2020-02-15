import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Deals.css';
import DealCard from 'components/DealCard';
import { Deal } from 'models/Deal';

const Deals: React.FC = () => {
  let d: Deal = new Deal("0", "test", "this is a test deal", "https://www.boulanger.com/ref/1123891", "assets/images/samsung-tv.webp");
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
              <DealCard Deal={d}></DealCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Deals;
