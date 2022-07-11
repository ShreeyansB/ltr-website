import { DarkMode } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Error";
import Header from "./header/Header";
import Banner from "./home/Banner";
import Footer from "./home/Footer";
import Sections from "./home/Sections";
import Info from "./info/Info";

function App() {
  return (
    <BrowserRouter>
      <DarkMode>
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            exact
            element={
              <div>
                <Banner />
                <Sections />
              </div>
            }
          />
          <Route path="/info/*" element={<Info />} />
        </Routes>
        <Footer />
      </DarkMode>
    </BrowserRouter>
  );
}

export default App;
