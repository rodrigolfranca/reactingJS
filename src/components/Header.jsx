import Button from "./Button";
import Logo from "./Logo";
import UserIcon from "./UserIcon";

function Header(){
    return (      
    <header className="header">
      <div className="headerContainer">
        <Logo />
        <div className="Amor">
          <Button text='Home' />
          <Button text='Products' />
          <Button text='About Us' />
          <Button text='Promotions' />
        </div>
        <UserIcon />
      </div>
    </header>
    )           
}

export default Header;