import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { ContactAdd } from "../contacts/ContactAdd";
import { ToDoList } from "../todolist/ToDoList";
import { ContactList } from "../contacts/ContactList";
import { ToDoForm } from "../todolist/ToDoForm";
import { ContactEdit } from "../contacts/ContactEdit";
import { ContactDetails } from "../contacts/ContactDetails";
import { ToDoEdit } from "../todolist/ToDoEdit";
import { ContractAdd } from "../contracts/ContractAdd";

export const UserViews = ({ userProfile, userToDos, setUserToDos }) => {
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
          <Route
            index
            element={
              <ToDoList
                userProfile={userProfile}
                userToDos={userToDos}
                setUserToDos={setUserToDos}
              />
            }
          />
          <Route
            path="Add"
            element={
              <ToDoForm
                userProfile={userProfile}
                userToDos={userToDos}
                setUserToDos={setUserToDos}
              />
            }
          />
          <Route
            path="edit/:id"
            element={
              <ToDoEdit
                userProfile={userProfile}
                userToDos={userToDos}
                setUserToDos={setUserToDos}
              />
            }
          />
        </Route>
        <Route
          path="addContact"
          element={<ContactAdd userProfile={userProfile} />}
        />
        <Route
          path="addContract"
          element={<ContractAdd userProfile={userProfile} />}
        />
      </Route>
      <Route path="/MyContacts">
        <Route index element={<ContactList userProfile={userProfile} />} />
        <Route path="details/:id" element={<ContactDetails />} />
        <Route
          path="edit/:id"
          element={<ContactEdit userProfile={userProfile} />}
        />
      </Route>
    </Routes>
  );
};
