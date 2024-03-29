import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import "./styles/navBar.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";


const NavBar = (props) => {
	const { active } = props;
    const {isDark,toggle} = useContext(ThemeContext);
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
						
					</div>
					<div className="dark-mode">
					 {isDark ? <button className="dark-btn" onClick={toggle}><FontAwesomeIcon
									icon={faSun}
									className="homepage-social-icon"
								/></button>: <button className="dark-btn" onClick={toggle}><FontAwesomeIcon
								icon={faMoon}
								className="homepage-social-icon"
							/></button>}
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
