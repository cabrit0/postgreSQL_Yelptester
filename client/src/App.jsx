import React from "react";
//  there is a -> Link for Navigation ( to="/")
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";
import Error from "./routes/Error";
import { RestaurantContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/restaurants/:id/update" element={<UpdatePage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </RestaurantContextProvider>
  );
};

export default App;
