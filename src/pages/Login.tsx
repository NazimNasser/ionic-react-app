import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { qrCodeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';

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
        <div className='bg-[#F5F5F5] min-h-screen'>
          
          {/* <div className='alfa text-[32px] font-[400] text-[#FFC800] bg-[#375A64] text-center py-20'>Comfortline</div> */}
          <Header text='' title='Comfortline'/>
          <div className='relative w-[90%] m-auto'>
            <div className='absolute -top-12 z-10 text-center'>
              <div className='bg-[white] pt-10 pb-7 px-3 text-center rounded-2xl'>
                <div>ENTER THE <span className='font-bold'>6-DIGITS CODE</span></div>
                <div className="flex justify-center py-5 items-center space-x-2">
                  {otp.map((_, index) => {
                    return (
                      <React.Fragment key={index}>
                        <input
                          ref={index === activeOTPIndex ? inputRef : null}
                          type="tel"
                          onChange={handleOnChange}
                          onKeyDown={(e) => handleOnKeyDown(e, index)}
                          value={otp[index]}
                          className="w-9 h-10 border-0 rounded bg-[#EDF4F5] outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-2 focus:border-blue-500 focus:text-blue-500 text-gray-400 transition"
                        />
                        {index === 2 ? <span className="w-2 py-[0.8px] bg-black" /> : (
                          null
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className='text-[12px] text-[#737373]'>that was distributed by your administrator</div>
                <div className='w-[85%] mx-auto'>
                  <IonButton onClick={(e) => {
                    e.preventDefault();
                    history.push('/block');
                  }} expand="block" className='mt-10' color="warning">LOGIN</IonButton>
                </div>
              </div>
              <div className='py-6 text-[24px]'>OR</div>
              <Link to="/">
                <div className='flex p-5 rounded-2xl items-center bg-[white]'>
                  <div className='mr-4'>
                    <IonIcon className='text-[50px]' icon={qrCodeOutline}></IonIcon>
                  </div>
                  <div className='text-left text-[#737373]'>
                    scan any HOBO QR code in your building
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
