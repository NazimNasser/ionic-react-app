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
                <div className='bg-[#F5F5F5] min-h-screen'>
                    {/* Header */}
                    <Header text='Welcome to BLOCK C' title='Comfortline' />

                    {/* Box */}
                    <IonCard className="relative w-[90%] h-auto flex flex-col items-center rounded-[20px] -top-8 z-10 bg-[white] shadow-lg m-auto">
                        {/* Side Yellow */}
                        <div className="sideCard absolute bg-yellow h-full w-4 left-0"></div>

                        <IonCardHeader>
                            <IonCardTitle>
                                <IonImg
                                    className='w-[62px] h-[62px] m-auto'
                                    src="/assets/images/building.gif" alt="building"></IonImg>
                            </IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent className="inter text-[14px] bg px-12 text-center text-dark">
                            Today you can work from the XXX and YYY spaces
                        </IonCardContent>
                    </IonCard>

                    {/* Optional */}
                    {
                        showDilog ?
                            < IonCard className="w-[90%]  my-7 h-auto flex flex-col rounded-[20px] -top-8 z-10 bg-[white] shadow-lg  m-auto">
                                <IonCardContent className="h-full flex flex-col justify-between items-center">

                                    <div className="optional mb-4 w-full flex flex-row justify-around items-center">
                                        {/* Question Mark  */}
                                        <IonImg className='w-[50px] mr-4 m-auto'
                                            src="/assets/images/questionMark.jpg" alt="questionMark">
                                        </IonImg>
                                        {/* Text */}
                                        <p className="text inter text-dark text-[14px] tracking-wide font-normal">Will you work from the office tomorrow?
                                            <span className="text-[#afafaf]">(optional)</span>
                                        </p>

                                    </div>

                                    {/* Buttons */}
                                    <div className="buttons w-full flex flex-row justify-between items-center">
                                        <IonButton
                                            expand="block"
                                            color="#EDF4F5"
                                            size="default"
                                            className="w-[31%] font-bold text-[14px] text-[#375A64] bg-[#EDF4F5] rounded-md"
                                            onClick={() => (setShowDilog(!showDilog))}
                                        >YES</IonButton>

                                        <IonButton
                                            expand="block"
                                            color="#EDF4F5"
                                            size="default"
                                            className="w-[31%] font-bold text-[14px] text-[#375A64] bg-[#EDF4F5] rounded-md"
                                            onClick={() => (setShowDilog(!showDilog))}
                                        >NO</IonButton>

                                        <IonButton
                                            expand="block"
                                            color="#EDF4F5"
                                            size="default"
                                            className="w-[31%] font-bold text-[14px] text-[#375A64] bg-[#EDF4F5] rounded-md"
                                            onClick={() => (setShowDilog(!showDilog))}
                                        >MAYBE</IonButton>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                            : null}

                    {/* Asking for feedback */}
                    <IonCard className="w-[90%] my-7 h-auto rounded-[20px] -top-8 z-10 bg-[white] shadow-lg m-auto">
                        <div onClick={() => history.push('/feedback')}>
                            <IonCardContent className="flex items-center">

                                <IonImg
                                    className='w-[70px] mr-4 m-auto my-[4px]'
                                    src="/assets/images/checkMark.jpg" alt="checkMark">
                                </IonImg>

                                <IonCardSubtitle className="text-dark mt-[4px] text-[12px] font-normal">
                                    Do you want to tell us how you find the indoor environment?
                                </IonCardSubtitle>

                            </IonCardContent>
                        </div>
                    </IonCard>

                </div>
                <Footer />
            </IonContent>
        </IonPage >
    )
}

export default Preparing