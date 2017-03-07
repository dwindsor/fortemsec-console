var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');

var routes = (
	<Router>
		<IndexRoute component={Main} >
			<Route path='/ScanResults' component={ScanResults} />
		</IndexRoute>
	</Router>
);

module.exports = routes;
