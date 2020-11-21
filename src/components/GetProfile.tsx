import { IonButton, IonCard, IonCardContent, IonItem } from '@ionic/react';
import React from 'react';

interface GetProfileProps {
    profileGetter: any
}

const GetProfile: React.FC<GetProfileProps> = (props) => {
  return (
      <IonItem>
          <IonCard>
            <IonCardContent>
                {/* <IonInput value={props.profileAddress} placeholder="Profile address..."></IonInput>
                <IonButton onClick={() => props.profileGetter(props.profileAddress)}>Fetch Profile</IonButton> */}
                <IonButton onClick={() => props.profileGetter()}>Access Account</IonButton>
            </IonCardContent>
        </IonCard>
      </IonItem>
  );
};

export default GetProfile;
