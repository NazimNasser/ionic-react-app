import { IonContent, IonLabel, IonSelect, IonSelectOption, IonImg, IonPage, IonButton } from '@ionic/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

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

    const history = useHistory();

    return (

        <IonPage>

            <IonContent fullscreen >
                <div className='bg-[#F5F5F5] min-h-screen'>

                    <Header  text='Welcome to BLOCK C' title='Comfortline' />

                    <div className='w-full h-full relative '>
                        <div className='w-[90%] h-auto shadow-lg z-10 bg-[white] m-auto left-0.5 right-0.5 rounded-[20px] absolute -top-8 flex flex-col items-center px-8 pt-4 pb-2'>
                            {/* Gif */}
                            <div>
                                <IonImg
                                    className='w-[62px] h-[62px] m-auto'
                                    src="/assets/images/loading.gif" alt="loading"
                                />
                            </div>

                            {/* header */}
                            <article className='text-dabg-dark'>
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
                                        className='rounded bg-dark '
                                        color={'#375A64'}
                                        disabled={checkIfEmpty(options)}
                                        onClick={() => {
                                            history.push('/preparing')
                                        }}

                                    >CONTINUE
                                    </IonButton>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

               
                <Footer />

            </IonContent >
        </IonPage >


    )
}

export default Block;
