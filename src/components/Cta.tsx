import appstore from './../assets/appstore.png';
import { motion } from 'framer-motion';

function Cta() {
	return (
		<section className="py-16 px-2  w-full">
			<h2 className="text-white text-sm md:text-lg font-semibold mb-2 text-center">
				What are you waiting for download{' '}
				<span className="text-[#0181F8]">Prosperi</span> app{' '}
				<br className="hidden md:block" /> & get started now
			</h2>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.2, duration: 0.5 },
				}}
				viewport={{ once: false, amount: 0.5 }}
				className="w-full flex justify-center mt-4"
			>
				<button className="mr-2 cursor-pointer">
					<img
						src={appstore}
						alt="appstore"
						className="object-cover object-center w-full h-full"
					/>
				</button>
				<button className="mr-2 cursor-pointer">
					<img
						src={appstore}
						alt="appstore"
						className="object-cover object-center w-full h-full"
					/>
				</button>
			</motion.div>
		</section>
	);
}

export default Cta;
