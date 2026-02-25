import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Layout from "./pages/layout";
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
