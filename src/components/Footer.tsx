import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';

const Footer: React.FC = () => {

    return (
        <IonFooter
            translucent className='ion-no-border border-t-0  '
        >
            <IonTitle className='text-[#828282] py-4 bg-[#F5F5F5] text-center font-normal text-xs'>
                &copy;ALL RIGHT RESERVED
            </IonTitle>
        </IonFooter>
    )
}
export default Footer


