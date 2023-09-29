import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { ToDo } from "./ToDo";
import { userContext } from "../../App";
import MainLayout from "../layouts/MainLayout";

export const ToDoList = () => {
  const { userProfile, userToDos } = useContext(userContext);
  const [userProfileValue, setUserProfileValue] = userProfile;
  const [userToDosValue, setUserToDosValue] = userToDos;

  if (userToDosValue) {
    return (
      <MainLayout>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {userToDosValue.map((todo) => {
            return <ToDo todo={todo} />;
          })}
          <div className="col-span-3"></div>
          <div className="col-span-1"></div>
          <Link to="/ToDos/add">
            <Button className="w-full">Add ToDo</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }
};
