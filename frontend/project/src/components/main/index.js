import { Routes, Route } from "react-router-dom";
import People from "../../pages/cars/";
import Show from "../../pages/show/";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/cars/:id" element={<Show />} />
      </Routes>
    </main>
  );
};

export default Main;

  