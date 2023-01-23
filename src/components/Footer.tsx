import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';

const Footer: React.FC = () => {

    return (
        <div>
            <IonFooter
                translucent className='ion-no-border border-t-0 '
            >
                    <IonTitle className='text-[#828282] pb-6 bg-[#F5F5F5] text-center font-[Inter] font-normal text-[9px]'>
                        &copy;ALL RIGHT RESERVED
                    </IonTitle>
            </IonFooter>
        </div>
    )
}
export default Footer


