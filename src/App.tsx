import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Acases from "./pages/ActiveCases/Acases";
import Cases from "./pages/cases/Cases";
import CaseResult from "./pages/cases/Caseresult";
import Solve from "./pages/solveMystries/Solve";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/active-cases" element={<Acases/>}/>
        <Route path="/cases" element={<Cases/>} />
        <Route path="/case-result" element={<CaseResult />} />
        <Route path="/mysteries" element={<Solve />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;