import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import ArrowUp from '../components/ArrowUp';

const Index = () => {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<Faq />
			
			<ArrowUp />
			<Footer />
		</div>
	);
};

export default Index;
