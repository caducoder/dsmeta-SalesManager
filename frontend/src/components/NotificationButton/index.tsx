import notification from '../../assets/img/notification-icon.svg'
import './NotificationButton.scss'

interface IProps {
    onClick: () => void
}

function NotificationButton({onClick}: IProps) {
    return ( 
        <button onClick={onClick} className='dsmeta-red-btn'>
            <img src={notification} alt='' />
        </button>
     );
}

export default NotificationButton;