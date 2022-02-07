import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { refreshToken } from "../redux/actions/authAction";


// ! pages
import Auth from './Pages/Auth/Auth';
import Layout from './Pages/layout/Layout';
import ForgotPass from './Pages/Auth/ForgotPass';
import UserPanel from './Pages/UserPanel/UserPanel';
import Home from './Pages/Main/Home/Home';
import Description from './Pages/UserPanel/Description';
import DetailUser from './Pages/UserPanel/DetailUser';

const Index = () => {

    const { User } = useSelector(state => state);
    console.log(User);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshToken());
    }, [dispatch])

    const history = useHistory();
    return (
        <div>
            <Switch>
                <Layout>
                    {
                        User.token ?
                            history.push('/')
                            :
                            <div>
                                <Route exact path="/auth" component={Auth} />
                                <Route exact path="/forgotPass" component={ForgotPass} />
                            </div>
                    }
                    <Route exact path="/" component={Home} />
                    {
                        User.token ?
                            <Route path={["/userPanel"]}>
                                <UserPanel>
                                    <Route exact path="/userPanel" component={Description} />
                                    <Route exact path="/userPanel/detailUser" component={DetailUser} />
                                </UserPanel>
                            </Route>
                            :
                            history.push('/')
                    }
                </Layout>
            </Switch>
        </div>
    );
};

export default Index;
