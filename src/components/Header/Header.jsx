import React, { Component } from 'react';
import MenuToggle from './Navigation/MenuToggler/MenuToggle';
import Sidebar from './Navigation/Sidebar/Sidebar';
import classes from './Header.module.scss'

const headerCopy = {
	Title: 'Hillel',
	Text: 'Homework - 1'
}

export default class Header extends Component {
  state ={
		menu: false
	}

	toggleMenuHandler = () => {
		this.setState({
			menu: !this.state.menu
		})
	}

	menuCloseHandler = () => {
		this.setState({
			menu:false
		})
	}

  render() {
    return (
      <header className={classes.Header}>
				<div className={classes.Wrapper}>
					<div className={classes.navWrapper}>
						<MenuToggle onToggle={this.toggleMenuHandler} isOpen={this.state.menu} />
						<Sidebar isOpen={this.state.menu} onClose={this.menuCloseHandler} />
					</div>
				{/* <h1>Yevhenii Alieksandrov</h1> */}
				<div className={classes.HeaderCopy}>
					<h3>{headerCopy.Title}</h3>
					<p>{headerCopy.Text}</p>
				</div>
				</div>
      </header>
    )
  }
}