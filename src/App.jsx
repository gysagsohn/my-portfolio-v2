import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />  {/* Catch-all */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
