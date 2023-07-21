import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { ContactAdd } from "../contacts/ContactAdd";
import { ToDoList } from "../todolist/ToDoList";
import { ContactList } from "../contacts/ContactList";
import { ToDoForm } from "../todolist/ToDoForm";

export const UserViews = ({ userProfile }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path="" element={<Home />} />
        <Route path="/ToDos">
          <Route index element={<ToDoList />} />
          <Route path="Add" element={<ToDoForm userProfile={userProfile} />} />
        </Route>
        <Route
          path="addContact"
          element={<ContactAdd userProfile={userProfile} />}
        />
        <Route
          path="MyContacts"
          element={<ContactList userProfile={userProfile} />}
        />
      </Route>
    </Routes>
  );
};
