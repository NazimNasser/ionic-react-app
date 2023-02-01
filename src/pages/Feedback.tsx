import { IonContent, IonLabel, IonSelect, IonSelectOption, IonImg, IonPage, IonButton, IonCard, IonTitle, IonCardTitle, IonCardSubtitle, IonFooter } from '@ionic/react'
import { useState } from 'react'
import FeedbackHeader from '../components/FeedbackHeader'
import Forms from '../components/Forms'

const Feedback: React.FC = (props) => {

    // Forms Switch
    const [formSwitch, setFormSwitch] = useState(1)
    const [roomForm, setRoomForm] = useState('')

    // Room Form
    const handleChangeModal = (event: any) => {
        event.preventDefault();
        setRoomForm(event.target.value)
        setFormSwitch(2)
        console.log('rrr', roomForm);

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
                <div className='bg-[#F5F5F5] min-h-screen'>

                    <FeedbackHeader title='Comfortline' text='Ask feedback' />
                    {formSwitch == 1 ?
                        <IonCard className="w-[90%] h-auto p-6 flex flex-col justify-evenly rounded-[20px] -top-8 z-10 bg-[white] shadow-lg m-auto">
                            <IonCardTitle class='inter text-dark border-b-[1px] border-[#375a6467] w-[110px] pb-2 mb-3 text-[12px] uppercase'>
                                Room Selection
                            </IonCardTitle>

                            <div className='inter text-base font-semibold tracking-wide mb-8 text-dark'>
                                In which room are you at the moment?
                            </div>

                            <div
                                className='w-full bg-[#EDF4F5] py-3 px-5 mb-4 rounded-2xl flex justify-between items-center'>
                                <IonLabel className='text-[14px] text-[#375a649d]'>Select your room</IonLabel>
                                <IonSelect
                                    name="room"
                                    onIonChange={handleChangeModal}
                                >
                                    <IonSelectOption value="1">1</IonSelectOption>
                                    <IonSelectOption value="2">2</IonSelectOption>

                                </IonSelect>

                            </div>

                            <p className="qr w-full text-xs px-4 pb-2">You don`t know your room?
                                <span className='text-[#326BFC]'> Scan QR code</span>
                            </p>
                        </IonCard>

                        : roomForm != '' && formSwitch === 2 ?
                            <Forms setFormSwitch={setFormSwitch} formSwitch={formSwitch} title='Thermal comfort' question='How do you find thermal comfort?' />

                            : formSwitch === 3 ?
                                <Forms setFormSwitch={setFormSwitch} formSwitch={formSwitch} title='AIR QUALITY' question='How do you find Air quality?' />

                                : formSwitch === 4 ?
                                    <Forms setFormSwitch={setFormSwitch} formSwitch={formSwitch} title='VISUAL comfort' question='How do you find visual comfort? (light level) ' />

                                    : formSwitch === 5 ?
                                        <Forms setFormSwitch={setFormSwitch} formSwitch={formSwitch} title=' ACOUSTIC COMFORT' question='How do you find acoustic comfort ? ' />

                                        : ""}

                    <IonFooter className="ion-no-border bg-[#F5F5F5] pt-24 flex items-center justify-center">
                        <span className={`${formSwitch == 1 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />
                        <span className={`${formSwitch == 2 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />
                        <span className={`${formSwitch == 3 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />
                        <span className={`${formSwitch == 4 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />
                        <span className={`${formSwitch == 5 ? "w-6 bg-dark" : "w-4 bg-[#D9D9D9]"}  rounded-full p-1 mr-1 `} />

                    </IonFooter>
                </div>
            </IonContent>
        </IonPage >
    )
}
export default Feedback
