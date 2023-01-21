import { IonButton, IonContent, IonImg, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Welcome: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='w-[74%] mx-auto pt-20'>
          <div className='font-[700] text-[18px]'>WELCOME TO</div>
          <div className='alfa text-[32px] font-[400] text-[#FFC800]'>Comfortline</div>
          <div className='text-[#737373]'>the app that will make buildings operate based on your needs.</div>
          <IonButton onClick={(e) => {
            e.preventDefault();
            history.push('/login');
          }} expand="block" className='my-20' color="warning">CONTINUE</IonButton>
        </div>
        <IonImg className='sm:absolute sm:bottom-0 sm:-right-7 sm:-left-7 w-[70%] mx-auto sm:w-[110%]' src="/assets/images/welcome.gif" alt="building"></IonImg>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
