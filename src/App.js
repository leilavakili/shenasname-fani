import './App.css';
import { Route, Routes } from "react-router-dom"
import Empty from './pages/Empty';
import First from './pages/First';
import First2 from './pages/First2';
import Second from './pages/Second';
function App() {
  return (
   <Routes>
    <Route path="/" element={<First />} />
    <Route path="First" element={<First2 />} />
    <Route path="/Empty" element={<Empty />} />
    <Route path="/Second" element={<Second />} />
   </Routes>
  );
}

export default App;
