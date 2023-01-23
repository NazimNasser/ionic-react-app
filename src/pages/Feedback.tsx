import { IonContent, IonLabel, IonSelect, IonSelectOption, IonImg, IonPage, IonButton, IonCard, IonTitle, IonCardTitle, IonCardSubtitle } from '@ionic/react'
import FeedbackHeader from '../components/FeedbackHeader'
import Header from '../components/Header'


const Feedback: React.FC = (props) => {
    return (
        <IonPage>

            <IonContent fullscreen >

                <FeedbackHeader title='Comfortline' text='Ask feedback' />

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

            </IonContent>
        </IonPage>
    )
}
export default Feedback
