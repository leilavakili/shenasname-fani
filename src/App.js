import './App.css';
import { Route, Routes } from "react-router-dom"
import First from './pages/First';
import Second from './pages/Second';
function App() {
  return (
   <Routes>
    <Route path="/" element={<First />} />
    <Route path="/Second" element={<Second />} />
   </Routes>
  );
}

export default App;
