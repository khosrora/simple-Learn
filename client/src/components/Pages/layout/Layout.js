import Header from './Header/Header';


import Footer from './Footer/Footer';

const Layout = ({ children, location }) => {

    return (
        <div>
            {location.pathname !== "/auth" && location.pathname !== "/forgotPass" ? <Header /> : ""}
            {children}
            {
                location.pathname !== "/"
                    && location.pathname === "/contactus"
                    && location.pathname === "/aboutUs"
                    ? <Footer /> : ""
            }
        </div>
    );
};

export default Layout;
