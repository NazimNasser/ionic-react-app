import { IonContent, IonLabel, IonSelect, IonSelectOption, IonImg, IonPage, IonButton, IonFooter, IonTitle, IonToolbar, IonNav, IonHeader } from '@ionic/react'
import React, { useState } from 'react'
import Footer from '../components/Footer';

const Block: React.FC = (props) => {

    // Disable button  
    const initialValues = { desk: '', office: '', officeNumber: '' };
    const [options, setOptions] = useState(initialValues);


    const handleChangeModal = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        setOptions({ ...options, [name]: value });
    }

    const checkIfEmpty = (obj: any) => {
        let status = false
        for (let key in obj) {
            if (obj[key] === "") {
                status = true
            }
        }
        return status;
    }

    return (

        <IonPage>

            <IonContent fullscreen >
                <div className='!bg-[#F5F5F5] min-h-screen'>

                    <IonHeader className='bg-[#375A64] relative w-full pt-20 flex flex-col items-center mb-2 justify-around'>
                        <IonTitle className='alfa text-[32px] font-[400] leading-10 text-[#FFC800]'>Comfortline</IonTitle>
                        <p className='text-white font-normal text-[19px] my-10 leading-6'>Welcome to BLOCK C</p>
                    </IonHeader>

                    <div className='w-full h-full relative '>
                        <div className='w-[90%] h-auto shadow-formShadow z-10 bg-white m-auto left-0.5 right-0.5 rounded-[20px] absolute -top-8 flex flex-col items-center px-8 pt-4 pb-2'>
                            {/* Gif */}
                            <div>
                                <IonImg
                                    className='w-[62px] h-[62px] m-auto'
                                    src="/assets/images/loading.gif" alt="loading"
                                />
                            </div>

                            {/* header */}
                            <article className='text-[#375A64]'>
                                <p className='text-[14px]'>Please reply to the following questions to help building your profile.</p>
                            </article>

                            {/* form */}
                            <form className='w-full'>
                                {/* Option */}
                                <div className='w-full bg-[#EDF4F5] my-4 px-4 py-2 rounded-2xl flex justify-between items-center'>
                                    <IonLabel className='text-[14px]'>Do you have a fixed desk?</IonLabel>
                                    <IonSelect
                                        name="desk"
                                        onIonChange={handleChangeModal}
                                    >
                                        <IonSelectOption value="yes">yes</IonSelectOption>
                                        <IonSelectOption value="no">NO</IonSelectOption>

                                    </IonSelect>
                                </div>

                                {/* Option */}
                                <div className='w-full bg-[#EDF4F5] my-4 px-4 py-2 rounded-2xl flex justify-between items-center'>
                                    <IonLabel className='text-[14px]'>Is it an individual office or <br /> an open space?</IonLabel>
                                    <IonSelect
                                        name="office"
                                        onIonChange={handleChangeModal}
                                    >
                                        <IonSelectOption value="yes">yes</IonSelectOption>
                                        <IonSelectOption value="no">NO</IonSelectOption>
                                    </IonSelect>
                                </div>

                                {/* Option */}
                                <div className='w-full bg-[#EDF4F5] my-4 px-4 py-2 rounded-2xl flex justify-between items-center'>
                                    <IonLabel className='text-[14px]'>Please indicate the office <br /> number you are working in</IonLabel>
                                    <IonSelect
                                        name="officeNumber"
                                        onIonChange={handleChangeModal}
                                    >
                                        <IonSelectOption value="1">1</IonSelectOption>
                                        <IonSelectOption value="2">2</IonSelectOption>
                                    </IonSelect>
                                </div>

                                {/* button */}
                                <div className='py-4'>

                                <IonButton
                                    expand='block'
                                    className='rounded bg-[#375A64] '
                                    color={'#375a64'}
                                    disabled={checkIfEmpty(options)}
                                >CONTINUE
                                </IonButton>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                {/* Footer */}
                <Footer />

                {/* Header */}

            </IonContent >
        </IonPage >


    )
}

export default Block;
