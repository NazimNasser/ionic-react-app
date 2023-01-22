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

                {/* Header */}
                <IonHeader className='bg-[#375A64] relative w-full -z-50  h-1/3 flex flex-col items-center py-8 mb-4 justify-around'>
                    <IonTitle className=' font-semibold text-4xl leading-10 text-[#FFC800]'>Comfortline</IonTitle>
                    <p className='text-white font-normal text-lg leading-6'>Welcome to BLOCK C</p>
                </IonHeader>

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
                        <form className='w-full'>
                            {/* Option */}
                            <div className='w-full bg-[#EDF4F5] my-4 px-1 rounded-2xl flex flex-row justify-around items-center'>
                                <IonLabel className='py-4 '>Do you have a fixed desk?</IonLabel>
                                <IonSelect
                                    name="desk"
                                    onIonChange={handleChangeModal}
                                >
                                    <IonSelectOption value="yes">yes</IonSelectOption>
                                    <IonSelectOption value="no">NO</IonSelectOption>

                                </IonSelect>
                            </div>

                            {/* Option */}
                            <div className='w-full bg-[#EDF4F5] my-4 px-1 rounded-2xl flex flex-row justify-around items-center'>
                                <IonLabel className='py-4 '>Is it an individual office or <br /> an open space?</IonLabel>
                                <IonSelect
                                    name="office"
                                    onIonChange={handleChangeModal}
                                >
                                    <IonSelectOption value="yes">yes</IonSelectOption>
                                    <IonSelectOption value="no">NO</IonSelectOption>
                                </IonSelect>
                            </div>

                            {/* Option */}
                            <div className='w-full bg-[#EDF4F5] my-4 px-1 rounded-2xl flex flex-row justify-around items-center'>
                                <IonLabel className='py-4 '>Please indicate the office <br /> number you are working in</IonLabel>
                                <IonSelect
                                    name="officeNumber"
                                    onIonChange={handleChangeModal}
                                >
                                    <IonSelectOption value="1">1</IonSelectOption>
                                    <IonSelectOption value="2">2</IonSelectOption>
                                </IonSelect>
                            </div>

                            {/* button */}
                            <IonButton
                                expand='block'
                                className='rounded bg-[#375A64] '
                                color={'#375a64'}
                                disabled={checkIfEmpty(options)}
                            >CONTINUE
                            </IonButton>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <Footer />

            </IonContent >
        </IonPage >


    )
}

export default Block;
