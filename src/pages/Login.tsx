import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { OtpInputX } from "otp-input-x/react";
import { useState } from 'react';
import '../index.css';

const Login: React.FC = () => {
  // const [otp, setOtp] = useState("");
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='alfa text-[32px] font-[400] text-[#FFC800]'>Comfortline</div>
        <div>
          <div>enter the 6-digits code</div>
          {/* <OtpInputX
            otp={otp}
            style-name='md'
            className=''
            onOtpComplete={(e) => {
              setOtp(e.detail);
            }}
          ></OtpInputX> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
