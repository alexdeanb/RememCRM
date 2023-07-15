import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/nav/NavBar";

export const RememCRM = () => {
  return (
    <Routes>
      {/*<Route path="/login" element={<Login />} />*/}

      <Route
        path="*"
        element={
          <>
            <ApplicationViews />
            <NavBar />
          </>
        }
      />
    </Routes>
  );
};
