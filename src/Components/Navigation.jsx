const Navigation = () =>{
    return(
        <nav>
        <div className='logo'>
          <img src="../public/images/brand_logo.png" alt="nike logo" />
        </div>
        <ul className='nav-links'>
          <li href='#'>MENU</li>
          <li href='#'>LOCATION</li>
          <li href='#'>ABOUT</li>
          <li href='#'>CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    )
}
export default Navigation;