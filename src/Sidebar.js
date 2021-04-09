import react, {useState} from 'react';

import Sidebardata from './Sidebardata.jsx';
import {Link} from 'react-router-dom';
import './Sidebar.css';



function Sidebar(){
	const [sidebars, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebars);

	return(
		<>
			<div className='navbar'> 
				<Link to='#' className='menu-bars'> 
					<a onClick={showSidebar}> &#9776; </a>

				</Link>
			</div>

			<nav className={sidebars ? 'nav-menu active' : 'nav-menu'}> 
				<ul className='nav-menu-items' onClick={showSidebar}> 
					<li className='navbar-toggle'> 
						<Link to='#' className='menu-bars'> 
							<a className='close'> &#9776; </a>

						</Link>
					</li>

					{Sidebardata.map((item, index) =>{
						return (
							<li>
								<Link to={item.path}> 
									{item.title}
								</Link>
							</li>
							);
					})

					}

				</ul>

			</nav>

		</>


		);
}

export default Sidebar;