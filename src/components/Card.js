import React from 'react';

const Card=(props)=>{
	return(
		<div className=" bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		   <img src={`https://robohash.org/${props.id}?200x200`} alt="Roboimage"/>
		   <div>
		       <h2>{props.name}</h2>
		       <p>{props.email}</p>

		   </div>

		</div>




		);
}
export default Card;

//In place of "props" if I give "{id,name,email}", then in place of "props.id","props.name" and "props.email" we have to 
// give "id", "name" and "email" respectively