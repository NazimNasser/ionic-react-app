import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import '../index.css';

interface Props { }

let currentOPTIndex: number = 0;

const Login: React.FC = (props) => {
  const history = useHistory();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp]
    newOTP[currentOPTIndex] = value.substring(value.length - 1)

    if (!value) setActiveOTPIndex(currentOPTIndex - 1)
    else setActiveOTPIndex(currentOPTIndex + 1)

    setOtp(newOTP)
  }

  const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOPTIndex = index
    if (key === 'Backspace') setActiveOTPIndex(currentOPTIndex - 1)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOTPIndex])


  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='alfa text-[32px] font-[400] text-[#FFC800]'>Comfortline</div>
        <div className=''>
          <div>enter the 6-digits code</div>
          <div className="flex justify-center items-center space-x-2">
            {otp.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    ref={index === activeOTPIndex ? inputRef : null}
                    type="number"
                    onChange={handleOnChange}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    value={otp[index]}
                    className="w-8 h-9 border-0 rounded bg-[#EDF4F5] outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-2 focus:border-blue-500 focus:text-blue-500 text-gray-400 transition"
                  />
                  {index === 2 ? <span className="w-2 py-[0.8px] bg-black" /> : (
                    null
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <div>that was distributed by your administrator</div>
          <IonButton onClick={(e) => {
            e.preventDefault();
            history.push('/login');
          }} expand="block" className='my-20' color="warning">login</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
