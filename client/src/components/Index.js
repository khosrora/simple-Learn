import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { refreshToken } from "../redux/actions/authAction";


// ! pages
import Auth from './Pages/Auth/Auth';
import Home from './Pages/layout/Home';
import ForgotPass from './Pages/Auth/ForgotPass';

const Index = () => {

    const { User } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshToken());
    }, [dispatch])


    return (
        <div>
            <Switch>
                <Route exact path="/auth" component={User.token ? Home : Auth} />
                <Route exact path="/forgotPass" component={User.token ? Home : ForgotPass} />
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
};

export default Index;
