import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from '@/components/layout/AppLayout';
import HomePage from '@/pages/HomePage';
import ItineraryPage from '@/pages/ItineraryPage';
import DayDetailPage from '@/pages/DayDetailPage';
import StaysPage from '@/pages/StaysPage';
import StayDetailPage from '@/pages/StayDetailPage';
import RoomsPage from '@/pages/RoomsPage';
import CarsPage from '@/pages/CarsPage';
import LinksPage from '@/pages/LinksPage';
import PracticalPage from '@/pages/PracticalPage';
import GalleryPage from '@/pages/GalleryPage';
import NotFoundPage from '@/pages/NotFoundPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/itinerary/:dayId" element={<DayDetailPage />} />
        <Route path="/stays" element={<StaysPage />} />
        <Route path="/stays/:stayId" element={<StayDetailPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/practical" element={<PracticalPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
