var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
	<Router>
		<IndexRoute component={Main}>
			<Route path='/home' component={Home} />
		</IndexRoute>
	</Router>
);

module.exports = routes;
