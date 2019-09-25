import React from 'react';

class Home extends React.Component {
    render() {
	return (
		<div>
		<a href="#/detail/4">去detail</a>
		<button onClick={() => this.props.history.push({
		    pathname: 'detail',
		    state: {
			id: 3
		    }
		})}>通过函数跳转</button>
		</div>
	);
    }
}

export default Home;
