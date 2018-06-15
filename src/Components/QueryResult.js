import React from 'react';
import Container from '../Home';

//Component that holds the results of search input
const QueryResult = ({match}) => {

	return (
			<Home query={match.params.query}/>
		);
	}



export default QueryResult;
