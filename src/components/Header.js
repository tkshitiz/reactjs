import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    return (        
        <header className='header'> 
            <h1>{title}</h1>
            <Button onClick={onAdd} color={showAdd ? 'red':'green'} text={showAdd ? 'close':'ADD'}/>
        </header>
    )
  }
  Header.defaultProps={
      title:'kshitiz thapa'
  }

//   CSS IN Js
//   const headingStyle={
//        color:'red',
//        backgroundColor:'black'
//   }

export default Header

