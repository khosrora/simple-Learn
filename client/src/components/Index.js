import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { refreshToken } from "../redux/actions/authAction";


// ! pages
import Auth from './Pages/Auth/Auth';
import Layout from './Pages/layout/Layout';
import ForgotPass from './Pages/Auth/ForgotPass';
import UserPanel from './Pages/UserPanel/UserPanel';
import Home from './Pages/Main/Home/Home';
import Description from './Pages/UserPanel/Description';
import DetailUser from './Pages/UserPanel/DetailUser';
import CreateChannel from './Pages/UserPanel/CreateChannel';

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
                    {
                        User.token ?
                            <Redirect to='/' />
                            :
                            <div>
                                <Route exact path="/auth" component={Auth} />
                                <Route exact path="/forgotPass" component={ForgotPass} />
                            </div>
                    }
                    {
                        User.token ?
                            <Route path={["/userPanel"]}>
                                <UserPanel>
                                    <Switch>
                                        <Route exact path="/userPanel/detailUser" component={DetailUser} />
                                        <Route exact path="/userPanel/createChannel" component={CreateChannel} />
                                        <Route exact path="/userPanel" component={Description} />
                                    </Switch>
                                </UserPanel>
                            </Route>
                            :
                            <Redirect to='/' />
                    }
                    <Route exact path="/" component={Home} />
                </Layout>
            </Switch>
        </div>
    );
};

export default Index;
