import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ScrollToTop from './ScrollToTop';

// App shell: fixed top header, routed content, footer, sticky bottom mobile nav.
const AppLayout = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <ScrollToTop />
    <Header />
    {/* pt clears the fixed header; pb clears the bottom mobile nav. */}
    <main className="flex-1 pt-[72px] pb-20 lg:pb-0">
      <Outlet />
    </main>
    <Footer />
    <MobileNav />
  </div>
);

export default AppLayout;
