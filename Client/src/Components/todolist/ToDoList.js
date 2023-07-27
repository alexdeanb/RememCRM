import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUserToDos } from "../../modules/ToDoManager";
import { Button } from "flowbite-react";
import { ToDo } from "./ToDo";

export const ToDoList = ({ userProfile, userToDos, setUserToDos }) => {
  if (userToDos) {
    return (
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {userToDos.map((todo) => {
              return <ToDo todo={todo} setUserToDos={setUserToDos} />;
            })}
            <div className="col-span-3"></div>
            <div className="col-span-1"></div>
            <Link to="/ToDos/add">
              <Button className="w-full">Add ToDo</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
