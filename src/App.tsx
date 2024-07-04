import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Career from './pages/Career';
import UserGuide from './pages/UserGuide';
import Faq from './pages/Faq';
import License from './pages/License';
import NotFound from './NotFound';
import About from './pages/About';
import Ambassadors from './pages/Ambassadors';
import Blog from './pages/Blog';
import TermofUse from './pages/TermofUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/career" element={<Career />} />
				<Route path="/about" element={<About />} />
				<Route path="/ambassadors" element={<Ambassadors />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/term-of-use" element={<TermofUse />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/license" element={<License />} />
				<Route path="/user-guide" element={<UserGuide />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
