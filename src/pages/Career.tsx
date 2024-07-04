import { motion } from 'framer-motion';
import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import ArrowUp from '../components/ArrowUp';

const Index = () => {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<div className="container md:max-w-6xl mx-auto flex flex-col md:flex-row p-4 md:p-8">
				<div className="flex-1 text-white">
					<h2 className="text-xl md:text-3xl font-semibold mt-20 md:mt-0 mb-4">
						Career
					</h2>
					<motion.h3
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						className="text-lg md:text-2xl font-semibold mb-4 text-[#007BFF]"
					>
						Join Our
					</motion.h3>
				</div>
				<div className="flex-1">
					<div className="py-4">
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							className="mt-2 text-white md:text-lg"
						>
							Are you passionate about fintech and blockchain technology?
							Prosperi is looking for talented individuals to join our growing
							team. We offer a dynamic work environment, opportunities for
							growth, and the chance to make a real impact. Check out our
							current job openings and apply to become part of the Prosperi
							family.
						</motion.p>
					</div>
				</div>
			</div>

			<ArrowUp />
			<Footer />
		</div>
	);
};

export default Index;
