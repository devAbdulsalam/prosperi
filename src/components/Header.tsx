import layer1 from './../assets/wave1.png';
import layer2 from './../assets/wave2.png';
import robotHand from './../assets/robotHand.png';
import notification from './../assets/notification.png';
import ikImage from './../assets/1kImage.png';
// import circlefull from './../assets/circlefull.png';
import coinImage from './../assets/coinImage.png';
import coinFull from './../assets/coinFull.png';
import headerPhone from './../assets/header-phone-icon.png';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import BouncingImage from '../BounceImage';
// import circleHalf from './../assets/circleHalf.png';
const Header = () => {
	return (
		<header
			id="home"
			className="bg-transparent text-white pt-20 relative w-full overflow-hidden"
		>
			<img
				src={layer1}
				alt="appstore"
				className="absolute top-0 left-0 object-cover object-center w-full h-full z-10 bg-[#06002B]"
			/>
			<img
				src={layer2}
				alt="appstore"
				className="absolute top-0 left-0 object-cover object-center w-full h-full z-10 "
			/>
			<div className="md:container mx-auto">
				<div className="relative w-full h-[320px]  md:h-[420px]">
					<div className="absolute md:right-44 lg:right-56 top-40 h-full hidden lg:block z-10">
						<img
							src={headerPhone}
							alt="Background Image"
							className="object-cover object-center w-full h-full z-10"
						/>
						<motion.img
							initial={{ opacity: 0, x: -50 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							src={notification}
							alt="notification left"
							className="object-cover object-center absolute top-0 -left-44 z-10"
						/>
						<motion.img
							initial={{ opacity: 0, x: 50 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.5, duration: 0.5 },
							}}
							src={notification}
							alt="notification right"
							className="object-cover object-center absolute bottom-44 -right-24 md:-right-40 z-10"
						/>
						{/* <img
							src={circlefull}
							alt="circlefull"
							className="object-cover object-center absolute -top-10 -right-16 w-[180px] h-[180px] -z-10"
						/> */}
						<img
							src={coinImage}
							alt="circlefull"
							className="object-cover object-center absolute bottom-10 -right-16 w-[70px] h-[70px] -z-10"
						/>
						<img
							src={coinFull}
							alt="coinfull"
							className="object-cover object-center absolute bottom-20 -left-20 w-[120px] h-[120px] z-10"
						/>
					</div>
					<div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between gap-4 z-10 w-fit md:w-full md:px-8">
						{/* <img
							src={circleHalf}
							alt="circlefull"
							className="object-cover md:hidden object-center debug absolute -top-20 -right-24 w-[180px] h-[180px] -z-10 opacity-20"
						/> */}
						<div className="md:w-3/4 lg:w-1/2 mb-4 md:mb-0 pt-4 md:pt-28">
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.2, duration: 0.5 },
								}}
								viewport={{ once: false, amount: 0.5 }}
								className="mt-10 md:mt-0 mb-4 md:mb-10 relative"
							>
								<ReactTyped
									strings={[
										'Unlock Exclusive <br /> Rewards with Prosperi',
										'Enjoy our unique <br /> loyalty and rewards program',
									]}
									typeSpeed={100}
									backSpeed={600}
									loop
									className="text-grey-700 font-extrabold text-4xl md:text-5xl xl:text-6xl leading-10 mb-2 hidden md:block"
								/>
								<ReactTyped
									strings={[
										'Unlock Exclusive Rewards with Prosperi',
										'Enjoy our unique loyalty and rewards program',
									]}
									typeSpeed={100}
									backSpeed={600}
									loop
									className="text-grey-700 font-bold text-2xl leading-10  md:hidden"
								/>
							</motion.div>
							<motion.h3
								initial={{ opacity: 0, y: 50 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.2, duration: 0.5 },
								}}
								viewport={{ once: false, amount: 0.5 }}
								className="text-sm md:text-3xl md:font-bold"
							>
								With blockchain productivity
							</motion.h3>
							<div className="w-full flex mt-6 md:mt-10 gap-3 justify-start items-center">
								<button className="px-3 md:px-10 py-2 md:py-3 whitespace-nowrap md:font-semibold bg-white rounded-md border-1 text-[#007BFF] hover:bg-[#53A6FF] hover:border-[#007BFF] shadow-sm shadow-[#53A6FF] transition-all duration-150 ease-in-out">
									Get Started
								</button>
								<button className="px-2 md:px-10 py-2 md:py-3 ml-1 md:ml-4 text-white whitespace-nowrap md:font-semibold rounded-md border-2 border-white hover:border-[#06002B] hover:bg-[#06002B] shadow-sm shadow-[#53A6FF] md:shadow-[#06002B] transition-all duration-150 ease-in-out">
									Read Our Docs
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full container mx-auto md:mt-10 relative z-20 mb-64 lg:mb-64 xl:mb-0">
				<div className="relative w-full h-[260px]  md:h-[420px] md:flex items-center ">
					<div className="absolute right-40 top-4  h-full  z-10 lg:hidden">
						<img
							src={headerPhone}
							alt="Background Image"
							className="object-cover object-center w-full h-full z-10"
						/>
						<motion.img
							initial={{ opacity: 0, x: -50 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							src={notification}
							alt="notification left"
							className="object-cover object-center absolute top-0 -left-14 z-50 "
						/>
						<motion.img
							initial={{ opacity: 0, x: 50 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.5, duration: 0.5 },
							}}
							src={notification}
							alt="notification right"
							className="object-cover object-center absolute bottom-44 -right-24 z-10"
						/>
						{/* <img
							src={circlefull}
							alt="circlefull"
							className="object-cover opacity-20 object-center absolute -top-10 -right-16 w-[180px] h-[180px] -z-10"
						/> */}
						<img
							src={coinImage}
							alt="circlefull"
							className="object-cover object-center absolute bottom-10 -right-12 w-[70px] h-[70px] -z-10"
						/>
						<img
							src={coinFull}
							alt="circlefull"
							className="object-cover object-center absolute bottom-12 -left-20 w-[90px] h-[90px] z-10"
						/>
					</div>
					<div className="absolute -bottom-60 right-0  z-10  md:hidden">
						<BouncingImage src={robotHand} alt="robotHand" />
					</div>
					<div className="z-50 xl:z-10 hidden md:block absolute md:left-12 lg:left-24 md:top-24 lg:top-14 lg:bottom-14">
						<img
							src={ikImage}
							alt="appstore"
							className="object-cover object-center z-10 hidden lg:block"
						/>
						<img
							src={ikImage}
							alt="appstore"
							className="object-cover object-center w-[320px] z-10 lg:hidden"
						/>
					</div>
					<div className="z-10 hidden md:block -right-32 -bottom-[400px] absolute lg:-right-12 lg:-bottom-16">
						<BouncingImage src={robotHand} alt="robotHand" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
