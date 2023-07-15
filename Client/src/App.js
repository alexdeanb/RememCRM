import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./Components/views/ApplicationViews";
import { NavBar } from "./Components/nav/NavBar";

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <div className="dark">
              <ApplicationViews />
              <NavBar />
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
