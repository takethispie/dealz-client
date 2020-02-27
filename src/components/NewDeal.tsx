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
import { RootState } from "stores/root.reducer";
import { connect, ConnectedProps } from "react-redux";
import { DateTime } from "luxon";

const mapState = (state: RootState) => ({
    currentUser: state.authReducer.ConnectedUser
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const NewDeal: React.FC<Props> = ({ currentUser}) => {
  let title: string = "";
  let description: string = "";
  let url: string = "";
  let price: number = 0;

  const createDeal = () => {
        if(currentUser == undefined) return;
        let newDeal = new Deal("", title, description, url, "", 0, price, DateTime.local(), currentUser);
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
        <IonButton>Creer le deal</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default connector(NewDeal);
