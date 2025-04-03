import { Link } from "react-router-dom";
import "./HeaderCom.css";

function HeaderCom() {
    return (
        <div className="header-container">
        <nav className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/list">LIST</Link>
        </nav>
        </div>
    );
}

export default HeaderCom;
