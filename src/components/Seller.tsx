import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonItem } from '@ionic/react';
import React, { useState } from 'react';

interface SellerProps {
  sellItem: Object,  
  sellFunction: any
}

const Seller: React.FC<SellerProps> = (props) => {
  const [show, setShow] = useState<boolean>(false)
  
  return (
      <IonItem>
          <IonCard>
            <IonHeader><IonButton onClick={() => { props.sellFunction(props.sellItem); setShow(!show); } }>Sell Location Data</IonButton></IonHeader>
            <IonCardContent style={{ display: show ? "block" : "none" }}>
              Sold item: {props.sellItem}
            </IonCardContent>
        </IonCard>
      </IonItem>
  );
};

export default Seller;
