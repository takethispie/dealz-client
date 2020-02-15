import React from 'react';
import './DealCard.css';
import { Deal } from 'models/Deal';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonButton, IonToolbar, IonButtons, IonBadge, IonLabel, IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';

interface DealCardProps {
  Deal: Deal
}

const DealCard: React.FC<DealCardProps> = ({ Deal }) => {
  return (
    <IonCard>
        <IonCardHeader>
          <IonCardTitle>{Deal.Title}</IonCardTitle>
        </IonCardHeader>
        <IonImg src={Deal.Image}></IonImg>
        <IonToolbar>
          <p style={{ paddingLeft: "10px"}}>24/01/2020 13:10</p> 
          <IonButtons slot="end">
            <IonButton color="primary">-</IonButton>
            {
              Deal.Upvotes >= 100 ? (
                <IonBadge color="danger">{Deal.Upvotes}</IonBadge>
              ) : Deal.Upvotes < -100 ? (
                <IonBadge color="primary">{Deal.Upvotes}</IonBadge>
              ) : (
                <IonBadge color="warning">{Deal.Upvotes}</IonBadge>
              )
            }
            
            <IonButton color="primary">+</IonButton>
          </IonButtons>
        </IonToolbar>
        
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
