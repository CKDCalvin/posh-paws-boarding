import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

//Customer pages
import Home from './pages/customer/Home';
import About from "./pages/customer/About";
import Rates from "./pages/customer/Rates";
import CheckIn from "./pages/customer/CheckIn";
import Contact from "./pages/customer/Contact";
import ReservationLookup from "./pages/customer/ReservationLookUp";
import ReservationForm from "./pages/customer/ReservationForm";

//admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import EditReservation from "./pages/admin/EditReservation";


function App() {

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<ReservationLookup />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/reservation/form" element={<ReservationForm />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/edit/:reservationId" element={<EditReservation />} />

      </Routes>
    </div>
  )
};
export default App;
