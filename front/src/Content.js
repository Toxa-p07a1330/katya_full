import {MyContext} from "./Context";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from "./Home";
import Films from "./Films";
import Places from "./Places";
import Prices from "./Prices";
import Schedule from "./Schedule";
import Tickets from "./Tickets";
import Halls from "./Halls";
import Admin from "./Admin";
import Reports from "./Reports";
class Content extends React.Component{

    render() {
        let style = {
        }
        return(<div style={style}>
            <BrowserRouter>
                <Switch>
                    <Route path={"/films"} component={Films}/>
                    <Route path={"/places"} component={Places}/>
                    <Route path={"/prices"} component={Prices}/>
                    <Route path={"/schedule"} component={Schedule}/>
                    <Route path={"/tickets"} component={Tickets}/>
                    <Route path={"/halls"} component={Halls}/>
                    <Route path={"/admin"} component={Admin}/>
                    <Route path={"/report"} component={Reports}/>
                    <Route exact path={""} component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>)
    }
}
export default Content;