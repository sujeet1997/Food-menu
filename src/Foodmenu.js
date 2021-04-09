import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Foodmenu.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col } from 'react-bootstrap';


import Card from "./Cards";
import Carddata from "./Carddata";
import Sidebar from './Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';

class Foodmenu extends Component{
	render(){
		return <div className="mainpage">
			<Container fluid>
			 <Row className="title">
				 <Col  md={3} sm={3} xs={3}>
				   <h2 Id="lorem"> Lorem <br/>Ipsum </h2>
				   </Col>
			  </Row>
			  <Row Id="headtag">		  
				   <Col  md={4} sm={4} xs={4}>
				   		<Router>
				   			<Sidebar />
				   			</Router>				   		
				   </Col>
				   
				   <Col  md={4} sm={4} xs={4} className="lrm">
				   		<h4> Lorem </h4>
				   </Col>
				   <Col  md={4} sm={4} xs={4} className="crt">
				  		 <a href="#">&#128722;</a>
				   </Col>
				   
				  	   

			  </Row>

			  <Row >
				 <Col md={2} sm={2} xs={2} Id="sidebar">
				   	<a href="#" className="sidebar">About</a>
				   	<a href="#" className="sidebar">Services</a>
				   	<a href="#" className="sidebar">Cusine</a>
				   	<a href="#" className="sidebar">Gallery</a>
				   	<a href="#" className="sidebar">Contact</a>
				   	<a href="#" className="sidebar">Book</a>
				   	<button className="bttn">Cart</button>
			   	 </Col>
			   	

			   	 <Col md={10} sm={10} xs={10}>

			   		<Row className="content" Id="ctx">
			   		<Col md={6} sm={6} xs={6}>

			   			<h2 className="heading">What are you <br/> having for Lunch? </h2>

			   		</Col>
			   		<Col md={6} sm={6} xs={6}>
					   	<p className="ptag">Lorem ipsum dolor sit amet,<br/>
					   		    consectetur adipiscing elit,<br/>
					   		    sed do sisusmod tempor<br/>
					   		    incididunt ut labore et. <div><hr/></div>
					   		    </p>

					  	</Col>
			   		    
			    	</Row> 	
			    		
			    	<Row Id="head2"> 
			    		<Col md={12} sm={12} xs={12}>
			    			<h2 className="heading2">What are you having <br/>for Lunch? </h2>

			    		</Col>
			    	</Row>
			  
				    <Row>
				   		{Carddata.map((val) => {
				   			return(
				   				<Card 
										imgsrc={val.imgsrc}
										title= {val.title}

									/>
				   				);
				   		})}

				     </Row>

				     <Row Id="parag">
					     <Col md={12} sm={12} xs={12}>
					     	<p className="ptag2">Lorem ipsum dolor sit amet,consectetur <br/>
					   		     adipiscing elit,sed do sisusmod tempor<br/>
					   		     incididunt ut labore et. <div></div>
					   		    </p>
					     </Col>
				      </Row>

			      </Col>

			     </Row>
			  	
			 </Container>  	
		 </div>
		 
	}

}



export default Foodmenu;