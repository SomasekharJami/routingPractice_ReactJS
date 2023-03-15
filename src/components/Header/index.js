// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="navCon">
    <div className="logoCon">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logoImg"
      />
      <h1 className="logoH">Wave</h1>
    </div>
    <ul className="listCon">
      <li>
        <Link className="tabItem" to="/">
          Home
        </Link>
        <Link className="tabItem" to="/about">
          About
        </Link>
        <Link className="tabItem" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
