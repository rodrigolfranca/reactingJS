const button = require('./Button')

function Header(){
    return <header className="header">
              <ul>
                <li>{button('BTN1')}</li>
                <li>{button('BTN2')}</li>
                <li>{button('BTN3')}</li>
                <li>{button('BTN4')}</li>              
              </ul>
            </header>
}

module.exports = Header;