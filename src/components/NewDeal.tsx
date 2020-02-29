import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonLabel,
  IonTextarea,
  IonButton
} from "@ionic/react";
import { Deal } from "models/Deal";
import { DateTime } from "luxon";
import { User } from "models/User";

interface props {
  currentUser?: User;
  addDeal: (deal: Deal) => void;
}

const NewDeal: React.FC<props>= ({ currentUser, addDeal }) => {
  if(currentUser === undefined) return (
    <IonCard>
      <IonCardContent>
        <p>Erreur: l'utilisateur n'est pas connecté</p>
      </IonCardContent>
    </IonCard>
  );
  let title: string = "";
  let description: string = "";
  let url: string = "";
  let price: number = 0;

  const createDeal = () => {
    let newDeal = new Deal(
      "",
      title,
      description,
      url,
      "",
      0,
      price,
      DateTime.local(),
      currentUser
    );
    addDeal(newDeal);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ajouter un deal</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonLabel position="stacked">Titre</IonLabel>
          <IonInput value={title}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Description</IonLabel>
          <IonTextarea value={description} rows={3}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Lien vers le deal</IonLabel>
          <IonInput value={url}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Prix</IonLabel>
          <IonInput value={price} type="number"></IonInput>
        </IonItem>
        <IonButton onClick={createDeal}>Creer le deal</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default NewDeal;
