import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/formContext";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Create from "./pages/Create";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
