import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import 'materialize-css/dist/css/materialize.min.css';
import * as actions from '../actions';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Landing from './Landing';

const SurveyNew = () => <h2> SurveyNew </h2>;

class App extends React.Component{
    //???
    componentDidMount() {
        this.props.fetchUser();
    }


  render(){
    return(
        <div className = "container">
        <BrowserRouter>
        	<div>
        	<Header/>
        		<Route exact path = "/" component = {Landing} />
        		<Route exact path = "/surveys" component = {Dashboard}/>
        		<Route path = "./surveys/new" component = {SurveyNew}/>
                <Footer/>
        		</div>
        	 </BrowserRouter>
        </div>
    );
  };
};



export default connect(null, actions)(App);