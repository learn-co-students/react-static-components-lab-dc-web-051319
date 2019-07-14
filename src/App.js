import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import EinsteinQuoteComponent from './EinsteinQuoteComponent.js';
import MouseComponent from './MouseComponent.js';

// import React, { Component } from 'react';
// import moment from 'moment';
// import ExampleComponent from './ExampleComponent'
// import TestComponent from './TestComponent'


class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
			<CatComponent/>
			<EinsteinQuoteComponent/>
			<MouseComponent/>
			</div>
		);
	}
}

export default App;


// ## Deliverables

// - Two components have not been properly imported in `src/App.js`. Identify and debug
//   the issue (_hint_: the stack trace when running `npm test` should point you in
//   the right direction!)

// - `App` needs to render three children components:

//   1.  `CatComponent`
//   2.  `EinsteinQuoteComponent`
//   3.  `MouseComponent`
