import { IonButton, IonCard, IonCardContent, IonHeader, IonItem } from '@ionic/react';
import React, { useState } from 'react';

interface LocationProps {
  lat: number,
  lon: number,  
  locationGetter: any
}

const Location: React.FC<LocationProps> = (props) => {
  const [show, setShow] = useState<boolean>(false)
  
  return (
      <IonItem>
          <IonCard>
            <IonHeader><IonButton onClick={() => { props.locationGetter(); setShow(!show); } }>Get Location</IonButton></IonHeader>
            <IonCardContent style={{ display: show ? "block" : "none" }}>
              <div>Latitude: {props.lat}</div>
              <div>Longitude: {props.lon}</div>
            </IonCardContent>
        </IonCard>
      </IonItem>
  );
};

export default Location;
