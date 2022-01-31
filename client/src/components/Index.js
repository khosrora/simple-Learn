import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { refreshToken } from "../redux/actions/authAction";


// ! pages
import Auth from './Pages/Auth/Auth';
import Layout from './Pages/layout/Layout';
import ForgotPass from './Pages/Auth/ForgotPass';
import UserPanel from './Pages/UserPanel/UserPanel';
import Home from './Pages/Main/Home/Home';

const Index = () => {

    const { User } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshToken());
    }, [dispatch])


    return (
        <div>
            <Switch>
                <Layout>
                    <Route exact path="/auth" component={User.token ? Layout : Auth} />
                    <Route exact path="/forgotPass" component={User.token ? Layout : ForgotPass} />
                    <Route exact path="/userPanel" component={UserPanel} />
                    <Route exact path="/" component={Home} />
                </Layout>
            </Switch>
        </div>
    );
};

export default Index;
