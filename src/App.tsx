import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./piersze_kroki/Start";
import Test1 from "./piersze_kroki/Test1";

function App() {
  return <div>
    <BrowserRouter>
      <Start>
        <Routes>
          <Route path="/" element={<Test1></Test1>} />
          <Route path="/kontakt" element={<>cos2</>} />
        </Routes>
        123
      </Start>
    </BrowserRouter>
  </div >;
}

export default App;