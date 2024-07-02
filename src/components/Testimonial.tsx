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
		text: 'Prosperi has transformed the way I manage my finances. The expense tracking and budgeting tools are intuitive and easy to use. I feel more in control of my money than ever before!',
		name: 'Jane D.',
		title: 'Freelancer',
		image: 'https://randomuser.me/api/portraits/women/1.jpg',
		color: 'bg-[#007BFF]',
	},
	{
		id: 2,
		text: 'The invoicing and payment features on Prosperi have streamlined my business operations. I can send invoices and track payments seamlessly. It’s a game-changer for my business!',
		name: 'Michael S.',
		title: 'Small Business Owner',
		image: 'https://randomuser.me/api/portraits/men/2.jpg',
		color: 'bg-[#007BFF]',
	},
	{
		id: 3,
		text: 'I love the savings planner on Prosperi. It’s helped me set realistic goals and track my progress. I’ve never been so motivated to save!',
		name: 'Emily R.',
		title: 'Marketing Consultant',
		image: 'https://randomuser.me/api/portraits/women/3.jpg',
		color: 'bg-[#007BFF]',
	},
	{
		id: 4,
		text: 'The Celo blockchain integration gives me peace of mind knowing my funds are secure. The wallet setup was straightforward, and I appreciate the enhanced security features.',
		name: 'David L.',
		title: 'Entrepreneur',
		image: 'https://randomuser.me/api/portraits/men/4.jpg',
		color: 'bg-[#007BFF]',
	},
	{
		id: 5,
		text: 'Prosperi’s financial health dashboard is incredibly insightful. It provides a comprehensive view of my financial status and helps me make informed decisions. Highly recommended!',
		name: 'Sophia W.',
		title: 'Entrepreneur',
		image: 'https://randomuser.me/api/portraits/women/5.jpg',
		color: 'bg-[#007BFF]',
	},
	{
		id: 6,
		text: 'The inventory and supply management tools on Prosperi have made a significant difference in my business. Keeping track of stock and managing orders has never been this efficient.',
		name: 'Chris P.',
		title: 'E-commerce Store Owner',
		image: 'https://randomuser.me/api/portraits/men/6.jpg',
		color: 'bg-[#007BFF]',
	},
	{
		id: 7,
		text: 'Bill payment reminders have saved me from missing due dates. Prosperi ensures I stay on top of my payments, reducing stress and late fees. It’s a must-have app!',
		name: 'Natalie M.',
		title: 'Small Business Owner',
		image: 'https://randomuser.me/api/portraits/women/7.jpg',
		color: 'bg-[#007BFF]',
	},
	{
		id: 8,
		text: 'Investment tracking on Prosperi is top-notch. I can monitor my investments and see their performance at a glance. It’s the best tool I’ve found for staying updated on my portfolio.',
		name: 'Alex T.',
		title: 'Investor',
		image: 'https://randomuser.me/api/portraits/men/8.jpg',
		color: 'bg-[#007BFF]',
	},
];

const TestimonialSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<section className="relative py-10 md:py-16 isolate w-full">
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
				<h3 className="text-xl font-semibold mb-2 text-[#007BFF]">
					WHAT THEY SAY
				</h3>
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.4, duration: 0.5 },
					}}
					viewport={{ once: false, amount: 0.5 }}
					className="text-3xl font-bold mb-2 text-white"
				>
					Testimonials
				</motion.h2>
				<h3 className="text-lg font-semibold mb-6 text-[#A2C4FE]">
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
					speed={1400}
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
								<div className="h-82 flex w-full">
									<div
										className={`bg-gradient-to-r shadow rounded-lg p-8 ${
											currentIndex === index
												? 'from-[#252B4F] to-[#252B4F] h-82'
												: ' bg-[#252B4F] h-52'
										} duration-500 ease-in-out self-end`}
									>
										<p className="text-white mb-4">{item.text}</p>
										<div
											className={`mt-4 flex items-center flex-col justify-center"  ${
												currentIndex === index
													? 'scale-1 delay-300 duration-500'
													: 'scale-0'
											}`}
										>
											<img
												className="h-10 w-10 rounded-full mr-4"
												src={item.image}
												alt="Avatar of person"
											/>
											<div
												className={`w-full text-center mt-2 ${
													currentIndex === index
														? 'scale-1 delay-300 duration-500'
														: 'scale-0'
												}`}
											>
												<p className="text-white font-medium p-1">
													{item.name}
												</p>
												<p className="text-gray-200">{item.title}.</p>
											</div>
										</div>
										{currentIndex === index && (
											<div className="flex justify-center mt-4 gap-1">
												{testimonials.map((_, index) => (
													<button
														key={index}
														onClick={() => setCurrentIndex(index)}
														className={`h-2 w-2 rounded-full ${
															currentIndex === index
																? 'bg-[#0125A6]'
																: 'bg-white'
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
