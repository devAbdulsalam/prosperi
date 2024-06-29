import { useState } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/element/css/autoplay';
import 'swiper/swiper-bundle.css';
// import SwiperCore, { Navigation } from 'swiper';

// SwiperCore.use([]);
import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from 'framer-motion';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
register();
// import { Switch } from '@headlessui/react';

const testimonials = [
	{
		id: 1,
		text: 'Creative Canv delivering results that perfectly captured the essence of our brand and enhanced our market presence.',
		name: 'Ryan Adams',
		title: 'Owner of Urban Eats Bistro',
		image: 'https://randomuser.me/api/portraits/women/68.jpg',
		color: 'bg-[#007BFF]',
	},
	{
		id: 2,
		text: 'The service provided by the team was amazing and their designs were exceptional. We saw a great increase in our market reach.',
		name: 'Jane Doe',
		title: 'CEO of Food Lovers Inc.',
		image: 'https://randomuser.me/api/portraits/women/68.jpg',
	},
	{
		id: 3,
		text: 'The service provided by the team was amazing and their designs were exceptional. We saw a great increase in our market reach.',
		name: 'Jane Doe 3',
		title: 'CEO of Food Lovers Inc.',
		image: 'https://randomuser.me/api/portraits/women/68.jpg',
	},
	{
		id: 4,
		text: 'The service provided by the team exceptional. We saw a great increase in our market reach.',
		name: 'Jane Doe 4',
		title: 'CEO of Food Lovers Inc.',
		image: 'https://randomuser.me/api/portraits/women/68.jpg',
	},
];

const TestimonialSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<section className="relative py-10 md:py-16 isolate">
			<div
				aria-hidden="true"
				className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br from-[#FFAAE7] to-purple-400 "></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-purple-400 "></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 "></div>
			</div>
			<div className="text-center w-full mb-5">
				<h3 className="text-xl font-semibold mb-2">WHAT THEY SAY</h3>
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.4, duration: 0.5 },
					}}
					viewport={{ once: false, amount: 0.5 }}
					className="text-3xl font-bold mb-2 text-[#007BFF]"
				>
					Testimonials
				</motion.h2>
				<h3 className="text-lg font-semibold mb-6">
					Here are some kind words from our clients after <br /> using our
					services
				</h3>
			</div>
			{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "> */}
			<div className="max-w-5xl mx-auto items-center p-4 md:p-10">
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					onSlideChange={(cur) => setCurrentIndex(cur.realIndex)}
					// onSwiper={(swiper) => console.log(swiper)}
					loop={true}
					centeredSlides={true}
					speed={800}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						// when window width is >= 640px
						640: {
							// width: 640,
							slidesPerView: 2,
						},
						// when window width is >= 768px
						768: {
							// width: 768,
							slidesPerView: 3,
						},
					}}
					id="main"
					modules={[Autoplay, Navigation, Pagination]}
					// width={'100%'}
					// navigation
				>
					{testimonials.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className="h-72 flex w-full">
									<div
										className={`bg-gradient-to-r shadow rounded-lg p-8 ${
											currentIndex === index
												? 'from-[#036CDC] to-[#036CDC] h-72'
												: 'from-[#007BFF] to-[#53A6FF] h-44'
										} duration-500 ease-in-out self-end`}
									>
										<p className="text-white mb-4">{item.text}</p>
										<div className="mt-4 flex items-center flex-col justify-center">
											<img
												className="h-10 w-10 rounded-full mr-4"
												src="https://randomuser.me/api/portraits/women/68.jpg"
												alt="Avatar of person"
											/>
											<div
												className={`w-full text-center mt-2 ${
													currentIndex === index
														? 'scale-1 delay-300 duration-500'
														: 'scale-0'
												}`}
											>
												<p className="text-white font-medium p-2">
													Mary Johnson
												</p>
												<p className="text-gray-200">CEO, Acme Inc.</p>
											</div>
										</div>
										{currentIndex === index && (
											<div className="dot flex justify-center mt-4 gap-1">
												{testimonials.map((_, index) => (
													<button
														key={index}
														onClick={() => setCurrentIndex(index)}
														className={`h-2 w-2 rounded-full ${
															currentIndex === index
																? 'bg-green-500'
																: 'bg-gray-400'
														}`}
													></button>
												))}
											</div>
										)}
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default TestimonialSlider;
