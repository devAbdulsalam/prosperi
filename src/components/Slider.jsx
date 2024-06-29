import { useState, useRef, useEffect } from 'react';
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';

const App = () => {
	const [active, setActive] = useState(0);
	const [prev, setPrev] = useState(0);

	// Refs
	const contentRef = useRef(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const nameRef = useRef('');

	const sliderContent = [
		{
			img: img1,
			name: 'Wanda Maximoff',
		},
		{
			img: img2,
			name: 'The Hulk',
		},
		{
			img: img3,
			name: 'Iron Man',
		},
		{
			img: img4,
			name: 'Black Panther',
		},
	];

	const Slide = (type) => {
		let local;
		if (type === 'next') {
			local = active + 1;
			sliderContent.length - 1 < local ? setActive(0) : setActive(local);
		}
		if (type === 'prev') {
			local = active - 1;
			local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
		}
		setPrev(active);
	};

	useEffect(() => {
		contentRef.current.style.bottom = '-100%';
		prevRef.current.style.left = '-10%';
		nextRef.current.style.right = '-10%';
		setTimeout(() => {
			nameRef.current.innerText = sliderContent[active].name;
			contentRef.current.style.bottom = '0%';
			prevRef.current.style.left = '0%';
			nextRef.current.style.right = '0%';
		}, 1000);
	}, [active]);

	return (
		<section className="relative py-16">
			<div
				aria-hidden="true"
				className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-purple-400 dark:from-blue-700"></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
			</div>
			<div className="text-center w-full mb-5">
				<h3 className="text-xl font-semibold mb-2">WHAT THEY SAY</h3>
				<h2 className="text-2xl font-bold mb-2 text-[#007BFF]">Testimonials</h2>
				<h3 className="text-lg font-semibold mb-6">
					Here are some kind words from our clients after <br /> using our
					services
				</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
				<div className="bg-gradient-to-r from-blue-600 to-[#036CDC] shadow rounded-lg p-8">
					<p className="text-white mb-4">
						"This app has been a game changer for me! I highly recommend it to
						anyone looking to streamline their workflow."
					</p>
					<div className="mt-4 flex items-center flex-col justify-center">
						<img
							className="h-10 w-10 rounded-full mr-4"
							src="https://randomuser.me/api/portraits/women/68.jpg"
							alt="Avatar of person"
						/>
						<div className="w-full text-center mt-2">
							<p className="text-white font-medium p-2">Mary Johnson</p>
							<p className="text-gray-200">CEO, Acme Inc.</p>
						</div>
					</div>
					<div className="dot flex justify-center mt-4 gap-1">
						<p className="h-2 w-2 rounded-full bg-green-500"></p>
						<p className="h-2 w-2 rounded-full bg-white"></p>
						<p className="h-2 w-2 rounded-full bg-white"></p>
					</div>
				</div>
				<div className="bg-[#036CDC] shadow rounded-lg p-8">
					<p className="text-white mb-4">
						"I've tried a lot of different apps, but this one really stands out.
						It's so easy to use, and the features are exactly what I need."
					</p>
					<div className="mt-4 flex items-center flex-col justify-center">
						<img
							className="h-10 w-10 rounded-full mr-4"
							src="https://randomuser.me/api/portraits/women/68.jpg"
							alt="Avatar of person"
						/>
						<div className="w-full text-center mt-2">
							<p className="text-white font-medium p-2">Mary Johnson</p>
							<p className="text-gray-200">CEO, Acme Inc.</p>
						</div>
					</div>
					<div className="dot flex justify-center mt-4 gap-1">
						<p className="h-2 w-2 rounded-full bg-green-500"></p>
						<p className="h-2 w-2 rounded-full bg-white"></p>
						<p className="h-2 w-2 rounded-full bg-white"></p>
					</div>
				</div>
				<div className="bg-[#007BFF] shadow rounded-lg p-8">
					<p className="text-white mb-4">
						"I love how customizable this app is. I can really make it work for
						me, no matter what project I'm working on."
					</p>
					<div className="mt-4 flex items-center flex-col justify-center">
						<img
							className="h-10 w-10 rounded-full mr-4"
							src="https://randomuser.me/api/portraits/women/68.jpg"
							alt="Avatar of person"
						/>
						<div className="w-full text-center mt-2">
							<p className="text-white font-medium p-2">Mary Johnson</p>
							<p className="text-gray-200">CEO, Acme Inc.</p>
						</div>
					</div>
					<div className="dot flex justify-center mt-4 gap-1">
						<p className="h-2 w-2 rounded-full bg-green-500"></p>
						<p className="h-2 w-2 rounded-full bg-white"></p>
						<p className="h-2 w-2 rounded-full bg-white"></p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default App;
