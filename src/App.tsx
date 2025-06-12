// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Header from "./components/shared/Header";

function App() {
  return (
    <Router>
      <main className="p-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<></>} />
          <Route path="/dashboard" element={<></>} />
          <Route path="/courses/:courseId" element={<Course />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
