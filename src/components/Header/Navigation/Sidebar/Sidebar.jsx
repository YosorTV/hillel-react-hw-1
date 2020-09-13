import React, { Component, Fragment } from 'react';
import Link from '../../../UI/Link';
import classes from './Sidebar.module.scss';

const links = [
  {page: 'Home'},
  {page: "Pages"},
  {page: "Posts"},
  {page: "About"}
]

export default class Sidebar extends Component {

  clickHandler = () => this.props.onClose();

  renderLinks = () => {
			return links.map((link, index) => {
				return (
					<li key={index}>
            <Link 
              name={link.page} 
              onClick={this.clickHandler} 
            />
					</li>
				)
			})
    }
    
  render() {
    const cls = [classes.NavList];

    if(!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <Fragment>
        <nav className={cls.join(' ')}>
          <ul className={classes.NavList}>
            {this.renderLinks()}
          </ul>
        </nav>
      </Fragment>
      
    )
  }
}