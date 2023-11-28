import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./PPT/Pages/StartPage";
import MainPage from "./PPT/Pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the "element" prop to specify the component for each route */}
        <Route path="/slides" element={<MainPage />} />
        <Route path="/" element={<StartPage />} />
        {/* <MainPage /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
