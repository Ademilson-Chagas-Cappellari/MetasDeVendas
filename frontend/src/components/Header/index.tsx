import logo from '../../assets/img/logo.jpg'
import './styles.css'


function Header(){
    return (
        <header>
        <div className="MetasVendas-logo-container">
            <img src={logo} />
        </div>

        </header>
    )

}

export default Header