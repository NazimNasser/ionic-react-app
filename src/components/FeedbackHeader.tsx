import { IonHeader, IonImg, IonTitle } from '@ionic/react';

interface Props { title: string, text: string }

function FeedbackHeader(props: Props) {
    return (

        <IonHeader className='bg-dark relative w-full pt-20 flex flex-col items-center mb-2 justify-around'>
            <IonTitle className='alfa text-[32px] font-[400] leading-10 text-yellow'>{props.title}</IonTitle>
            <div className="flex flex-row items-center justify-center w-1/2 h-auto m-auto ">
                <IonImg src='/assets/images/question-.png' className='mx-2 text-[#ffffff] ' alt='questionMarkFeedback' />
                <p className='inter text-[white] font-normal text-[19px] my-10 leading-6'>{props.text}</p>
            </div>
        </IonHeader>

    )
}
export default FeedbackHeader