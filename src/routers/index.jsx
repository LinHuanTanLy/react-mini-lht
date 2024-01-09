import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../pages/home"
import Find from "../pages/find"
import LifeService from "../pages/lifeService"
import Mine from "../pages/mine"
import BottomNav from "../components/bottomNav";
const AppRouter = () => {

    return (
        <Router>
            <BottomNav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/find" component={Find} />
                <Route path="/lifeService" component={LifeService} />
                <Route path="/mine" component={Mine} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
