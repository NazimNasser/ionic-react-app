import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonPage, IonTitle } from "@ionic/react"
import { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header"

const Preparing: React.FC = () => {

    const history = useHistory();

    // Hide Dialog
    const [showDilog, setShowDilog] = useState(true)

    return (
        <IonPage >
            <IonContent fullscreen>
                {/* Header */}
                <Header text='Welcome to BLOCK C' title='Comfortline' />

                {/* Box */}
                <IonCard className="relative px-2 w-[95%] h-[200px] flex flex-col items-center justify-around left-0.5 right-0.5 rounded-[20px] -top-8 z-10 bg-[white] shadow-lg m-auto">
                    {/* Side Yellow */}
                    <div className="sideCard absolute bg-yellow h-full w-4 left-0"></div>

                    <IonCardHeader>
                        <IonCardTitle>
                            <IonImg
                                className='w-[62px] h-[62px] m-auto'
                                src="/assets/images/building.gif" alt="building"></IonImg>
                        </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent className="inter bg px-20 text-center text-dark">
                        Today you can work from the XXX and YYY spaces
                    </IonCardContent>
                </IonCard>

                {/* Optional */}
                {
                    showDilog ?
                        < IonCard className="w-[95%]  my-7 h-[140px] flex flex-col  left-0.5 right-0.5 rounded-[20px] -top-8 z-10 bg-[white] shadow-lg  m-auto">
                            <IonCardContent className="h-full flex flex-col justify-between items-center px-4">

                                <div className="optional w-full flex flex-row justify-around items-center">
                                    {/* Question Mark  */}
                                    <IonImg className='w-[35px] h-[35px] mx-4 m-auto'
                                        src="/assets/images/questionMark.jpg" alt="questionMark">
                                    </IonImg>
                                    {/* Text */}
                                    <p className="text inter text-dark text-sm tracking-wide pr-10 font-normal">Will you work from the office tomorrow?
                                        <span className="text-[gray]">(optional)</span>
                                    </p>

                                </div>

                                {/* Buttons */}
                                <div className="buttons px-4 w-full flex flex-row justify-around items-center">
                                    <IonButton
                                        expand="block"
                                        color="medium"
                                        size="default"
                                        fill="outline"
                                        className="w-1/3"
                                        onClick={() => (setShowDilog(!showDilog))}
                                    >yes</IonButton>

                                    <IonButton
                                        expand="block"
                                        color="medium"
                                        size="default"
                                        fill="outline"
                                        className="w-1/3"
                                        onClick={() => (setShowDilog(!showDilog))}
                                    >no</IonButton>

                                    <IonButton
                                        expand="block"
                                        color="medium"
                                        size="default"
                                        fill="outline"
                                        className="w-1/3"
                                        onClick={() => (setShowDilog(!showDilog))}
                                    >maybe</IonButton>
                                </div>
                            </IonCardContent>
                        </IonCard>
                        : null}

                {/* Asking for feedback */}
                <IonCard className="w-[95%] my-7 h-[88px] left-0.5 right-0.5 rounded-[20px] -top-8 z-10 bg-[white] shadow-lg m-auto">
                    <IonCardContent className="h-full bg- flex flex-row justify-between items-center">

                        <IonImg className='w-[60px] h-[60px] mx-4 m-auto text-sm'
                            src="/assets/images/checkMark.jpg" alt="checkMark">
                        </IonImg>

                        <IonCardSubtitle className="text-dark font-normal inter pr-10">
                            Do you want to tell us how you find the indoor environment?
                        </IonCardSubtitle>

                    </IonCardContent>
                </IonCard>
                
                 <Footer />

            </IonContent>
        </IonPage >
    )
}

export default Preparing