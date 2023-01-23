import { IonHeader, IonImg, IonTitle } from '@ionic/react';

interface Props { title: string, text: string  }

function Header(props: Props) {
    return (

        <IonHeader className='bg-dark relative w-full pt-20 flex flex-col items-center mb-2 justify-around'>
            <IonTitle className='alfa text-[32px] font-[400] leading-10 text-yellow'>{props.title}</IonTitle>
                      <p className='inter text-[white] font-normal text-[19px] my-10 leading-6'>{props.text}</p>
        </IonHeader>

    )
}
export default Header