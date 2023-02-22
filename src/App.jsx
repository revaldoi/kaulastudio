import NavBar from './components/NavBar'
import Home from './Home';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import BookingForm from './BookingForm';

function App() {
  return (
    <BrowserRouter>
      <NavBar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
