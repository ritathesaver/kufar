import React from 'react';
import { Component } from 'react';
import '../App.css';

class ThirdComponent extends Component {
	render() {
		const { id } = this.props.match.params;
		return (
			<div className="component third">
				<h1>
					Ты не со мной, слезы льются на рейве <p>id: {id} </p>
				</h1>
			</div>
		);
	}
}

export default ThirdComponent;
