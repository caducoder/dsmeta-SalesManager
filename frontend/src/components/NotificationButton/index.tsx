import notification from '../../assets/img/notification-icon.svg'
import './styles.scss'

function NotificationButton() {
    return ( 
        <button className='dsmeta-red-btn'>
            <img src={notification} alt='' />
        </button>
     );
}

export default NotificationButton;