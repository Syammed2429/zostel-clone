import './App.css';
import { Layout } from './components/Layout/Layout';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Booking } from './components/Description/Booking/Booking';
import { Pay } from './components/checkout/CheckOut'
import { Router } from 'react-router-dom';
import { Routers } from './components/Home/Routers/Routers';

function App() {
  return (
    <div>
      {/* <Layout /> */}
      <Routers />

    </div>

  );
}

export default App;
