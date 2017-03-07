var React = require('react');

var Main = react.createClass({
  render: function() {
	return (
		<div>
			Hello from Main!
			{this.props.children}
		</div>
	)
  }
});
