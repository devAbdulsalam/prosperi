import { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiCloseLargeLine } from 'react-icons/ri';
// import { Link } from 'react-router-dom';
import logo from './../assets/logo.png';
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [changeColor, setChangeColor] = useState(false);
	const navRef = useRef(null);
	useEffect(() => {
		const handleScroll = () => {
			// changecolor if scrolled more than nav hieght
			// Get the height of the navbar
			// const navHeight = document.getElementById('nav').offsetHeight;
			const navHeight = navRef.current ? navRef.current?.offsetHeight : 0;

			if (window.scrollY > navHeight) {
				setChangeColor(true);
			} else {
				setChangeColor(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav
			id="nav"
			ref={navRef}
			className={`flex flex-wrap items-center justify-between p-3 ${
				menuOpen || changeColor ? 'bg-[#06002B]' : 'bg-transparent'
			} text-white fixed top-0 w-full z-50 px-4 md:px-20`}
		>
			<div className="text-xl font-extrabold md:pl-3 flex items-center ">
				<img
					src={logo}
					alt="logo icon"
					className="object-fit object-center h-[20px] w-[20px] mr-2"
				/>
				Prosperi
			</div>
			<div className="flex md:hidden">
				<button id="hamburger" onClick={toggleMenu}>
					<AiOutlineMenu
						className={menuOpen ? 'hidden' : 'block'}
						width="40"
						height="40"
						color="white"
					/>
					<RiCloseLargeLine
						className={menuOpen ? 'block' : 'hidden'}
						width="40"
						height="40"
						color="white"
					/>
				</button>
			</div>
			<div
				onClick={toggleMenu}
				className={`w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 ${
					menuOpen ? 'block' : 'hidden'
				} md:block`}
			>
				<a
					href="./#home"
					className="block md:inline-block hover:text-gray-500 font-semibold px-3 py-3 md:border-none"
				>
					Home
				</a>
				<a
					href="./#aboutus"
					className="block md:inline-block hover:text-gray-500 font-semibold px-3 py-3 md:border-none"
				>
					About
				</a>
				<a
					href="./#why"
					className="block md:inline-block hover:text-gray-500 font-semibold px-3 py-3 md:border-none"
				>
					Why Choose us
				</a>
				<a
					href="./#download"
					className="block md:inline-block hover:text-gray-500 font-semibold px-3 py-3 md:border-none"
				>
					Download
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
