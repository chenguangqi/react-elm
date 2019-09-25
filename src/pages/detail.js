import React from 'react';

class Detail extends React.Component {
    render() {
	return (
		<div>
		<a href='#/'>回home</a>
		</div>
	);
    }

    componentDidMount() {
	console.log(this.props.match.params);
	console.log(this.props.history.location.state);
    }
}

export default Detail;
