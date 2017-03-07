var React = require('react');

var ScanList = react.createClass({
  render: function () {
	return (
		<div>
			This is ScanList.
			{this.props.children}
		</div>
	)
  }
});

module.exports = ScanList;
