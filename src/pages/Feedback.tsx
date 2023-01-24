import { IonContent, IonLabel, IonSelect, IonSelectOption, IonImg, IonPage, IonButton, IonCard, IonTitle, IonCardTitle, IonCardSubtitle, IonFooter } from '@ionic/react'
import { useState } from 'react'
import FeedbackHeader from '../components/FeedbackHeader'
import Forms from '../components/Forms'
import Header from '../components/Header'


const Feedback: React.FC = (props) => {

    // Forms Switch
    const [formSwitch, setFormSwitch] = useState(2)
    return (
        <IonPage>

            <IonContent fullscreen >

                <FeedbackHeader title='Comfortline' text='Ask feedback' />
                {formSwitch == 1 ?
                    <IonCard className="w-[95%] h-[275px] p-5 flex flex-col  justify-evenly  left-0.5 right-0.5 rounded-[20px] -top-8 z-10 bg-[white] shadow-lg  m-auto">
                        <IonCardTitle class='inter text-dark border-b-2 w-32 pb-2 text-[12px] uppercase'>
                            Room Selection
                        </IonCardTitle>

                        <IonCardSubtitle class='inter text-base font-semibold tracking-wide text-dark pr-10'>
                            In which room are you at the moment?
                        </IonCardSubtitle>

                        <div className='w-full bg-[#EDF4F5] p-4 rounded-2xl flex justify-between items-center'>
                            <IonLabel className='text-[14px]'>Select your room</IonLabel>
                            <IonSelect
                                name="room"
                            >
                                <IonSelectOption value="1">1</IonSelectOption>
                                <IonSelectOption value="2">2</IonSelectOption>

                            </IonSelect>

                        </div>

                        <p className="qr w-full text-xs px-4 pb-2">You don`t know your room?
                            <span className='underline text-[#326BFC]'> Scan QR code</span>
                        </p>
                    </IonCard>

                    : formSwitch === 2 ?
                        <Forms setFormSwitch={setFormSwitch} formSwitch={formSwitch} title='Thermal comfort' question='How do you find thermal comfort?' />

                        : formSwitch === 3 ?
                            <Forms setFormSwitch={setFormSwitch} formSwitch={formSwitch} title='AIR QUALITY' question='How do you find Air quality?' />

                            : formSwitch === 4 ?
                                <Forms setFormSwitch={setFormSwitch} formSwitch={formSwitch} title='VISUAL comfort' question='How do you find visual comfort? (light level) ' />

                                : formSwitch === 5 ?
                                    <Forms setFormSwitch={setFormSwitch} formSwitch={formSwitch} title=' ACOUSTIC COMFORT' question='How do you find acoustic comfort ? ' />

                                    : ""}


                <IonFooter className="ion-no-border h-1/3 flex flex-row items-center justify-center">
                    <span className={`${formSwitch == 1 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />
                    <span className={`${formSwitch == 2 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />
                    <span className={`${formSwitch == 3 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />
                    <span className={`${formSwitch == 4 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />
                    <span className={`${formSwitch == 5 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />

                </IonFooter>
            </IonContent>
        </IonPage>
    )
}
export default Feedback
