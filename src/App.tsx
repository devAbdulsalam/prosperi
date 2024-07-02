import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Career from './pages/Career';
import UserGuide from './pages/UserGuide';
import Faq from './pages/Faq';
import License from './pages/License';
import NotFound from './NotFound';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/career" element={<Career />} />
			<Route path="/license" element={<License />} />
			<Route path="/user-guide" element={<UserGuide />} />
			<Route path="/faq" element={<Faq />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
