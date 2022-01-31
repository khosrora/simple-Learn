import Header from './Header/Header';


import Footer from './Footer/Footer';

const Layout = ({ children, location }) => {

    return (
        <div>
            {location.pathname !== "/auth" && location.pathname !== "/forgotPass" ? <Header /> : ""}
            {children}
            {location.pathname !== "/auth" && location.pathname !== "/forgotPass" ? <Footer /> : ""}
        </div>
    );
};

export default Layout;
