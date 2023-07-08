import './App.css';
import { Route, Routes } from "react-router-dom"
import First from './pages/First';
function App() {
  return (
   <Routes>
    <Route path="/" element={<First />} />
   </Routes>
  );
}

export default App;
