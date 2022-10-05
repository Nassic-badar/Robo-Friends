import React from "react";

const Scroll = (props) => {
	return (
		<div style={
			{
				overflowY: "Scroll",
			 	border: "5px solid black",
			 	height: "40rem"
			}
		}>
			{props.children}
		</div>
	);
}


export default Scroll;