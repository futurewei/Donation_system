import React from 'react';
import {connect} from 'react-redux';
import Payments from './Payments';


class Header extends React.Component {
  renderContent() {
  	console.log(this.props);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
         return [
         <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
          ];
    }
   } 

	render(){
		return (
			<nav>
				<div className = "nav-wrapper">
					<a className = "left brand-logo">
						Donation
					</a>
				<ul className="right">
					{this.renderContent()}
				</ul>
			  </div>
			</nav>
		);
	};
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);