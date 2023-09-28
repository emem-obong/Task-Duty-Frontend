import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Navbar1 from "./components/Navbar1";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {

  const baseURL = "https://emydollars18.onrender.com"
  // const baseURL = "http://Localhost:3000"
  
  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask  baseURL={baseURL}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
