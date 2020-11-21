import { IonCard, IonItem } from '@ionic/react';
import React from 'react';

interface ProfileProps {
    Name: string
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  return (
      <IonItem>
        <IonCard>{props.Name}</IonCard>
      </IonItem>
  );
};

export default Profile;
