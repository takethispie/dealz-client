import React from "react";
import "./DealCard.css";
import { Deal } from "models/Deal";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonToolbar,
  IonButtons,
  IonBadge,
  IonCardSubtitle
} from "@ionic/react";
import { ThunkVoteDeal } from "stores/dealReducer/deal.thunk";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "stores/root.reducer";
import { Vote } from "models/Vote";

interface DealCardProps {
  deal: Deal;
}

const mapState = (state: RootState) => {
  return {
    deals: state.dealReducer.Deals
  }
};

const mapDispatch = {
  voteDeal: ThunkVoteDeal
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & DealCardProps;

const DealCard: React.FC<Props> = ({ deal, voteDeal, deals }) => {

  function DoVote(vote: Vote) {
    voteDeal(deal.Id, vote, deals);
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{deal.Title}</IonCardTitle>
        <IonCardSubtitle color="danger">{deal.Price + "€"}</IonCardSubtitle>
      </IonCardHeader>
      <IonImg src={deal.Image}></IonImg>
      <IonToolbar>
        <p style={{ paddingLeft: "10px" }}>{deal.Created.toLocaleString()}</p>
        <IonButtons slot="end">
          <IonButton color={deal.VoteFromUser == Vote.Down ? "primary" : "medium"} onClick={() => {
            DoVote(Vote.Down);
          }}>-</IonButton>
          {deal.Upvotes >= 100 ? (
            <IonBadge color="danger">{deal.Upvotes}</IonBadge>
          ) : deal.Upvotes < -100 ? (
            <IonBadge color="primary">{deal.Upvotes}</IonBadge>
          ) : (
            <IonBadge color="warning">{deal.Upvotes}</IonBadge>
          )}

          <IonButton color={deal.VoteFromUser == Vote.Up ? "danger" : "medium"} onClick={() => {
            DoVote(Vote.Up);
          }}>+</IonButton>
        </IonButtons>
      </IonToolbar>

      <IonCardContent>
        <p>{deal.Description}</p>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton color="primary" href={deal.Url}>
              Voir le Deal
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonCardContent>
    </IonCard>
  );
};

export default connector(DealCard);
