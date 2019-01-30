import React from 'react';

const SearchField = ({onSearch, searchfield}) => {
	return(
		<div>
			<input onChange={onSearch} type="search" placeholder="search robot" className="pa3 mb3 bg-light-blue ba b--light-green" />
		</div>
	);
}

export default SearchField;