import { Link } from "react-router-dom";
import "./HeaderCom.css";
import { AuthContext } from "../../store/store/AuthContext";
import { useContext } from "react";

function HeaderCom() {
    const { auth, logout } = useContext(AuthContext); // 로그인 상태(auth), 로그아웃 함수(logout) 가져오기
    console.log("Auth 상태:", auth);
    console.log("Auth User:", auth.user);

    return (
        <div className="header-container">
            <nav className="nav-links">
                <Link to="/">HOME</Link>
                <Link to="/InquiryList">INQUIRY LIST</Link>
                <div className="auth-section">
                    {auth.isLoggedIn ? (
                        <>
                            <span className="user-login">환영합니다! {auth.user?.name}님</span>
                            <Link to="/" className="logout" onClick={logout}>LOGOUT</Link>
                        </>
                    ) : (
                        <Link to="/login">LOGIN</Link>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default HeaderCom;