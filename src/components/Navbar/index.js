// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const changeBg = isDarkTheme ? 'dark-bg' : ''
      const changeText = isDarkTheme ? 'light-cls' : ''

      const onClickToggle = () => {
        toggleTheme()
      }

      return (
        <nav className={`header-container ${changeBg}`}>
          <img src={websiteLogo} alt="website logo" className="website-logo" />
          <ul className="list-items">
            <li className={changeText}>
              <Link to="/" className={`nav-link ${changeText}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link ${changeText}`}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            testid="theme"
            className="theme-btn"
            onClick={onClickToggle}
          >
            <img src={themeLogo} alt="theme" className="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
