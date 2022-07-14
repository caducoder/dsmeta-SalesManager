import './Card.scss'

function Card({children}: {children: JSX.Element}) {
  return ( 
    <div className='dsmeta-card'>
      {children}
    </div>
   );
}

export default Card;