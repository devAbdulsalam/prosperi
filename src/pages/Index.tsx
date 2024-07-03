import Navbar from '../components/NavBar';
import Header from '../components/Header';
import Part from '../components/Part';
import Why from '../components/Why';
import AboutUs from '../components/AboutUs';
import Testimonial from '../components/Testimonial';
import Download from '../components/Download';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import ArrowUp from '../components/ArrowUp';

const App = () => {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative overflow-hidden">
			<Navbar />
			<Part />
			<Header />
			<Download />
			<Why />
			<AboutUs />
			<Testimonial />
			<Cta />
			<div className="w-full relative">
				<ArrowUp />
			</div>
			<Footer />
		</div>
	);
};

export default App;
