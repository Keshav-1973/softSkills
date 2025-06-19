// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Header from "./components/shared/Header";
import ScrollToTop from "./components/shared/ScrollToTop";
import Review from "./pages/Review/Review";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="p-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<></>} />
          <Route path="/dashboard" element={<></>} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/courses/:courseId" element={<Course />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
