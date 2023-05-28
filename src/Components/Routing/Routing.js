import {Home, About, Menu, Reservations, OrderOnline, Login, Confirmation} from '../../pages';

import { Routes, Route } from 'react-router-dom';


export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}
