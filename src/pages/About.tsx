import { motion } from 'framer-motion';
import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import ArrowUp from '../components/ArrowUp';

function Index() {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<div className="container md:max-w-6xl mx-auto flex flex-col md:flex-row p-4 md:p-10 md:min-h-[60vh] items-center">
				<div className="flex-1 text-white">
					<h2 className="text-xl md:text-3xl font-semibold  mb-4 mt-20 md:mt-0">
						COMPANY
					</h2>
					<motion.h3
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						className="text-2xl font-semibold mb-4 text-[#007BFF]"
					>
						About Us
					</motion.h3>
				</div>
				<div className="flex-1">
					<div className="py-4">
						<h3 className="text-lg font-medium text-[#A2C4FE] my-4">
							About Us
						</h3>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							className="mt-2 text-white md:text-lg"
						>
							Prosperi is dedicated to transforming how you manage your
							finances. Our app leverages blockchain technology to provide
							secure, efficient, and user-friendly financial tools. Whether
							you're a freelancer, small business owner, or young professional,
							Prosperi helps you achieve financial freedom and security.
						</motion.p>
						<h3 className="text-lg font-medium text-[#A2C4FE] my-4">
							Contact Us
						</h3>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							className="mt-2 text-white md:text-lg"
						>
							Have questions or need support? Reach out to our customer service
							team at support@prosperi.app. We’re here to help you with any
							inquiries or issues you might have.
						</motion.p>
					</div>
				</div>
			</div>
			<ArrowUp />
			<Footer />
		</div>
	);
}

export default Index;
