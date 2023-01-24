import { IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonLabel, IonPage, IonSelect, IonSelectOption } from "@ionic/react"

 
type Props = {
    formSwitch: number;
    title: string;
    question: string;
    setFormSwitch: (val: number) => void;
};

const Forms: React.FC<Props> = ({ formSwitch, title, question, setFormSwitch }) => {
    return (

        <IonCard className="w-[95%] h-[275px] p-5 flex flex-col  justify-evenly  left-0.5 right-0.5 rounded-[20px] -top-8 z-10 bg-[white] shadow-lg  m-auto">
            <IonCardTitle class='inter text-dark border-b-2 w-32 pb-2 text-[12px] uppercase'>
                {title}
            </IonCardTitle>

            <IonCardSubtitle class='inter text-base font-semibold tracking-wide text-dark pr-10'>
                {question}
            </IonCardSubtitle>

            <div className="faces w-full flex flex-row justify-evenly items-center my-4">

                <IonImg onClick={() => { setFormSwitch(formSwitch + 1) }} src="/assets/images/smile.jpg" alt="happy" />
                <IonImg onClick={() => { setFormSwitch(formSwitch + 1) }} src="/assets/images/mood.jpg" alt="mood" />
                <IonImg onClick={() => { setFormSwitch(formSwitch + 1) }} src="/assets/images/anger.jpg" alt="anger" />

            </div>

        </IonCard>
    )
}

export default Forms