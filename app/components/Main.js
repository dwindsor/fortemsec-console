var React = require('react');

var Main = react.createClass({
  render: function () {
	return (
		<div>
			This is Main.
			{this.props.children}
		</div>
	)
  })
});

module.exports = Main;
