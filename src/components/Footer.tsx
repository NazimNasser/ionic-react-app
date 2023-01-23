import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';

const Footer: React.FC = () => {

    return (
        <div>
            <IonFooter
                translucent className='ion-no-border border-t-0 '
            >
                <IonToolbar className='text-center ' >
                    <IonTitle className='text-[#828282] font-[Inter] font-normal text-[9px]'>
                        &copy;ALL RIGHT RESERVED
                    </IonTitle>
                </IonToolbar>
            </IonFooter>
        </div>
    )
}
export default Footer


