import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./piersze_kroki/Start";
import Test1 from "./piersze_kroki/Test1";
import WpisBlogowy from "./piersze_kroki/WpisBlogowy";
import OpisProduktu from "./piersze_kroki/OpisProduktu";
import PytanieiOdpowiedz from "./piersze_kroki/PytanieiOdpowiedz";
import TwojeArtykuly from "./piersze_kroki/TwojeArtykuly";
import Historia from "./piersze_kroki/Historia";
import ReklamaPro from "./piersze_kroki/ReklamaPro";
import Konto from './piersze_kroki/Konto';

function App() {
  return <div>
    <BrowserRouter>
      <Start>
        <Routes>
          <Route path="/" element={<Test1></Test1>} />
          <Route path="/dashboard" element={<>dashboard</>} />
          <Route path="/wpisblogowy" element={<WpisBlogowy></WpisBlogowy>} />
          <Route path="/opisproduktu" element={<OpisProduktu></OpisProduktu>}/>
          <Route path="/pytanieiodpowiedz"element={<PytanieiOdpowiedz></PytanieiOdpowiedz>}/>
          <Route path="/twojeartykuly" element={<TwojeArtykuly></TwojeArtykuly>}/>
          <Route path="/historia" element={<Historia></Historia>}/>
          <Route path="/reklamapro" element={<ReklamaPro/>}/>
          <Route path="/konto" element={<Konto/>}/>
        </Routes>
      </Start>
    </BrowserRouter>
  </div >;
}

export default App;