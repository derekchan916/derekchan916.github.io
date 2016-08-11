'use strict';

import React, {
	Component,
	PropTypes
} from 'react';
import HaylieMasonry from './HaylieMasonry';

class HaylieMain extends  Component {
	constructor (props) {
		super(props);
	}

	render () {
		if (this.props.currentPage !== 'haylie') {return null;}

		return (
			<div>
				<HaylieMasonry
					contentHasLoaded={this.props.contentHasLoaded}/>
			</div>
		)
	}
}

HaylieMain.propTypes = {
	contentHasLoaded: PropTypes.func,
	currentPage : PropTypes.string,
}

export default HaylieMain;
