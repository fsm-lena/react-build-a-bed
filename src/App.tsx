import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Builder from "./screen/Builder";
import { AboutYou } from "./screen/AboutYou";
import ChooseBase from "./screen/ChooseBase";
import Subtotal from "./screen/Subtotal";
import Accessories from "./screen/Accessories";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutYou />} />
      </Routes>
      <Routes>
        <Route path="/build" element={<Builder />} />
      </Routes>
      <Routes>
        <Route path="/base" element={<ChooseBase />} />
      </Routes>
      <Routes>
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
      <Routes>
        <Route path="/review" element={<Subtotal />} />
      </Routes>
    </BrowserRouter>
  );
}
