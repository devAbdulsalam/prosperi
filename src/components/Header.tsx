import layer1 from './../assets/layer1.png';
import layer2 from './../assets/layer2.png';
import notification from './../assets/notification.png';
import ikImage from './../assets/1kImage.png';
import circlefull from './../assets/circlefull.png';
import coinImage from './../assets/coinImage.png';
import headerPhone from './../assets/header-phone-icon.png';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
const Header = () => {
	return (
		<header
			id="home"
			className="bg-white text-white py-6 pt-20 relative w-full"
		>
			<div className="absolute top-0 left-0 w-full h-full z-10">
				<img
					src={layer2}
					alt="appstore"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div className="absolute top-0 left-0 w-full h-full z-10">
				<img
					src={layer1}
					alt="appstore"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div className="container mx-auto">
				<div className="relative w-full h-[320px]  md:h-[420px]">
					<div className="absolute right-40 top-20  h-full hidden md:block z-10">
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
							className="object-cover object-center absolute bottom-44 -right-36 z-10"
						/>
						<img
							src={circlefull}
							alt="circlefull"
							className="object-cover object-center absolute -top-10 -right-16 w-[180px] h-[180px] -z-10"
						/>
						<img
							src={coinImage}
							alt="circlefull"
							className="object-cover object-center absolute bottom-10 -right-12 w-[70px] h-[70px] -z-10"
						/>
					</div>
					<div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between z-10">
						<div className="md:w-1/2 mb-4 md:mb-0">
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.2, duration: 0.5 },
								}}
								viewport={{ once: false, amount: 0.5 }}
								className="mb-10 relative"
							>
								<ReactTyped
									strings={[
										'Empower <br /> your finance',
										'Spend <br /> an get rewarded',
										'with block-chain powered productivity',
									]}
									typeSpeed={80}
									backSpeed={60}
									loop
									className="text-grey-700 font-extrabold text-4xl md:text-5xl leading-10 mb-2"
								/>
							</motion.div>
							<img
								src={ikImage}
								alt="appstore"
								className="object-cover object-center z-10"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
