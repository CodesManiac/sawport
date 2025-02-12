import appLogo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <div className='email-header'>
        <img src={appLogo} alt="logo" className="email-logo"/>
    </div>
  )
}

export default Header