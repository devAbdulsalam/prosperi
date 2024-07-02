import { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

function ArrowUp() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.innerHeight / 2;
			if (window.scrollY > scrollPosition) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		showButton && (
			<button
				id="arrowup"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className="cursor-pointer bg-[#0125A6] rounded-full p-3 fixed right-10 bottom-10 z-50"
			>
				<AiOutlineArrowUp
					className="text-white text-2xl font-extrabold"
					color="white"
				/>
			</button>
		)
	);
}

export default ArrowUp;
