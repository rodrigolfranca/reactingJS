import Button from "./Button";
import Logo from "./Logo";
import UserIcon from "./UserIcon";

function Header(){
    return (      
    <header className="header">
      <div className="headerContainer">
        <Logo />
        <div className="Amor">
          <Button text='Início' />
          <Button text='Diário' />
          <Button text='Mensal' />
          <Button text='Anual' />
        </div>
        <UserIcon />
      </div>
    </header>
    )           
}

export default Header;