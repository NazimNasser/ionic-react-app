import { IonContent, IonHeader, IonLabel, IonSelect, IonSelectOption, IonImg, IonPage, IonTitle, IonButton } from '@ionic/react'
import React, { useState } from 'react'

const Block: React.FC = (props) => {

    const [buttonStatus, setButtonStatus] = useState(false)
    // Disable button
    const disableButton = () => {
        if (document.querySelector('.IonSelectOption')?.nodeValue === '') {
            console.log('gggg',buttonStatus);
            
        } else {
            console.log('bbbbbbbeeee',buttonStatus);
            
            // setButtonStatus(!buttonStatus)
        }


    }

    return (

        <IonPage>

            <IonContent fullscreen >

                <nav className='bg-[#375A64] w-full relative flex flex-col items-center py-8 justify-around h-1/3'>
                    <h1 className='text-[32px] font-[400] text-[#FFC800]'>
                        Comfortline
                    </h1>
                    <p className='text-white'>Welcome to BLOCK C</p>
                </nav>

                <div className='w-full h-full relative '>
                    <div className='w-[90%] h-auto shadow-formShadow bg-white m-auto left-0.5 right-0.5 rounded-[20px] absolute -top-8 flex flex-col items-center px-8 py-4'>
                        {/* Gif */}
                        <div>
                            <IonImg
                                className='w-[62px] h-[62px] m-auto'
                                src="/assets/images/loading.gif" alt="loading"
                            />
                        </div>

                        {/* header */}
                        <article className='text-[#375A64]'>
                            <p>Please reply to the following questions to help building your profile.</p>
                        </article>

                        {/* form */}
                        <form className=' 400 w-full'>
                            {/* Options */}
                            <div className='w-full bg-[#EDF4F5] my-4 px-1 rounded-2xl flex flex-row justify-around items-center'>
                                <IonLabel className='py-4 '>Do you have a fixed desk?</IonLabel>
                                <IonSelect >
                                    <IonSelectOption value="nes">yes</IonSelectOption>
                                    <IonSelectOption value="n64">NO</IonSelectOption>

                                </IonSelect>
                            </div>
                            {/* Options */}
                            <div className='w-full bg-[#EDF4F5] my-4 px-1 rounded-2xl flex flex-row justify-around items-center'>
                                <IonLabel className='py-4 '>Is it an individual office or <br /> an open space?</IonLabel>
                                <IonSelect >
                                    <IonSelectOption value="nes">yes</IonSelectOption>
                                    <IonSelectOption value="n64">NO</IonSelectOption>

                                </IonSelect>
                            </div>

                            {/* Options */}
                            <div className='w-full bg-[#EDF4F5] my-4 px-1 rounded-2xl flex flex-row justify-around items-center'>
                                <IonLabel className='py-4 '>Please indicate the office <br /> number you are working in</IonLabel>
                                <IonSelect >
                                    <IonSelectOption value="1">1</IonSelectOption>
                                    <IonSelectOption value="2">2</IonSelectOption>

                                </IonSelect>
                            </div>

                            {/* button */}
                            <IonButton expand='block' className=' rounded bg-[#375A64] disabled:bg-[#E3E3E3]'
                                // disabled
                                onClick={()=>disableButton()}
                                color={'#375a64'}
                            >
                                CONTINUE
                            </IonButton>
                        </form>
                    </div>

                    {/* Rights */}
                </div>

                {/* Footer */}
                <footer className='w-full text-center'>
                    &copy;ALL RIGHT RESERVED
                </footer>

            </IonContent >
        </IonPage >


    )
}

export default Block;