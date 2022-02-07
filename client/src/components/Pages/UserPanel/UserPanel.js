import Menu from './Menu/Menu';

const UserPanel = ({ children }) => {
    return (
        <div className="userpanel-menu">
            <Menu />
            {children}
        </div>
    );
};

export default UserPanel;
