import React from 'react';
import './DealCard.css';
import { Deal } from 'models/Deal';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonButton, IonToolbar, IonButtons } from '@ionic/react';

interface DealCardProps {
  Deal: Deal
}

const DealCard: React.FC<DealCardProps> = ({ Deal }) => {
  return (
    <IonCard>
        <IonImg src={Deal.Image}></IonImg>
        <IonCardHeader>
            <IonCardTitle>{Deal.Title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <p>{Deal.Description}</p>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton color="primary" href={Deal.Url}>Voir le Deal</IonButton>
              </IonButtons>
            </IonToolbar>
        </IonCardContent>
    </IonCard>
  );
};

export default DealCard;
