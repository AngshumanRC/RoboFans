import React from 'react';



const SearchBox=({searchChange})=>{
	return (
		<input className="bg-light-blue" type="search" placeholder="Search Robots" onChange={searchChange}/>



		);
}

export default SearchBox;