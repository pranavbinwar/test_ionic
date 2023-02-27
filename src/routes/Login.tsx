import {
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "ionicons/icons";

function Login() {
  const [, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (event: any) => {
    console.log("SUBMIT");
    setLoading(true);
    event.preventDefault();

    setTimeout(() => {
      setLoading(false);
      navigate("/app/dashboard");
    }, 1500);
  };
  return (
    <IonCard>
      <IonCardContent>
        <form onSubmit={onSubmit}>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>

          <div className="ion-margin-top">
            <IonButton expand="full" type="submit" color="secondary">
              <IonIcon icon={logIn} slot="start" />
              Login
            </IonButton>
          </div>
        </form>
      </IonCardContent>
    </IonCard>
  );
}
export default Login;
