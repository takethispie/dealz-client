import React, { useState } from "react";
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
  const [newDeal, setDeal] = useState(new Deal("", "", "", "", "", 0, 0, DateTime.local()));

  if(currentUser === undefined) return (
    <IonCard>
      <IonCardContent>
        <p>Erreur: l'utilisateur n'est pas connecté</p>
      </IonCardContent>
    </IonCard>
  );

  const createDeal = () => {
    setDeal({...newDeal, Author: currentUser});
    console.log(newDeal);
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
          <IonInput value={newDeal.Title}
            onIonChange={e =>
              setDeal({ ...newDeal, Title: e.detail.value! })
            } ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Description</IonLabel>
          <IonTextarea value={newDeal.Description}
            onIonChange={e =>
              setDeal({ ...newDeal, Description: e.detail.value! })
            } rows={3}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Lien vers le deal</IonLabel>
          <IonInput value={newDeal.Url}
            onIonChange={e =>
              setDeal({ ...newDeal, Url: e.detail.value! })
            }></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Prix</IonLabel>
          <IonInput value={newDeal.Price}
            onIonChange={e =>
              setDeal({ ...newDeal, Price: Number.parseFloat(e.detail.value!)})
            } type="number"></IonInput>
        </IonItem>
        <IonButton onClick={createDeal}>Creer le deal</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default NewDeal;
