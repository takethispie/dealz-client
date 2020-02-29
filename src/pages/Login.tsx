import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonModal
} from "@ionic/react";
import { Credentials } from "models/Credentials";

interface Props {
  login: (credentials: Credentials) => void;
}

const Login: React.FC<Props> = ({ login }) => {
  let creds: Credentials = { Login: "", Password: "" };

  return (
    <IonList>
      <IonItem>
        <IonLabel position="fixed">Pseudo</IonLabel>
        <IonInput value={creds.Login}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="fixed">Mot de passe</IonLabel>
        <IonInput type="password" value={creds.Password}></IonInput>
      </IonItem>
      <IonItem>
        <IonButton
          onClick={() => {
            login(creds);
          }}
        >
          Se Connecter
        </IonButton>
      </IonItem>
    </IonList>
  );
};

export default Login;
