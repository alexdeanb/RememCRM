import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { ContactAdd } from "../contacts/ContactAdd";
import { ToDoList } from "../todolist/ToDoList";
import { ContactList } from "../contacts/ContactList";
import { ToDoForm } from "../todolist/ToDoForm";

export const UserViews = () => {
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
          <Route path="Add" element={<ToDoForm />} />
        </Route>
        <Route path="/addContact" element={<ContactAdd />} />
        <Route path="/MyContacts" element={<ContactList />} />
      </Route>
    </Routes>
  );
};
