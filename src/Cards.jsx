import React from "react";
import {Container,Row,Col } from 'react-bootstrap';

function Card(props){
	return(
	<>
	
	
		<div className="cards">
			<div className="carde">
			
				<img src={props.imgsrc} alt="pics" className="card_image"/>
				<div className="card_info">
					<span className="card_title">{props.title} </span>
				</div>
			</div>
		</div>
		
	</>



	);
}

export default Card;