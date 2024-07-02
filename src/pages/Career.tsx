import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import ArrowUp from '../components/ArrowUp';

const Index = () => {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<div className='py-10 text-white'>
			<div className='container mx-auto py-10 text-white'>
				<h2 className="text-3xl font-semibold text-white mb-4">Career</h2>
				<h2 className="text-2xl font-semibold text-white mb-4">Join Our</h2>
				<p>
					Team Are you passionate about fintech and blockchain technology?
					Prosperi is looking for talented individuals to join our growing team.
					We offer a dynamic work environment, opportunities for growth, and the
					chance to make a real impact. Check out our current job openings and
					apply to become part of the Prosperi family.
				</p>
			</div>
			</div>
			<ArrowUp />
			<Footer />
		</div>
	);
};

export default Index;
