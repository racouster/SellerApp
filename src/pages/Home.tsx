import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ProfileContainer from '../components/ProfileContainer';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cisco NTT - DataDefenders</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cisco NTT - DataDefenders</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProfileContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
