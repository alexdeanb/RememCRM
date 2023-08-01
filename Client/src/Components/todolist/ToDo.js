import { DescriptionsContext } from "antd/es/descriptions";
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  deleteToDo,
  editToDo,
  getAllUserToDos,
} from "../../modules/ToDoManager";
import { Link } from "react-router-dom";

export const ToDo = ({ todo, setUserToDos }) => {
  let dueDate = todo.due.split("T")[0];

  const handleUpdateClick = () => {
    todo.completed = true;
    editToDo(todo).then(() => {
      setUserToDos();
    });
  };

  const handleDelete = () => {
    deleteToDo(todo.id).then(() => {
      setUserToDos();
    });
  };

  if (todo) {
    return (
      <Card className="col-span-1">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {todo?.contact.primaryFirstName} {todo?.contact.primaryLastName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>{todo.description}</p>
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Due: {dueDate}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Priority: {todo?.priority.name}
        </p>
        <div className="grid grid-cols-3 ">
          <Button
            className="col-span-1 m-2"
            color="failure"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
          <div className="col-span-1 m-2">
            <Link to={`edit/${todo.id}`}>
              <Button className="w-full">Edit</Button>
            </Link>
          </div>
          <Button
            className="col-span-1 m-2"
            color="success"
            onClick={() => {
              handleUpdateClick();
            }}
          >
            Mark Complete
          </Button>
        </div>
      </Card>
    );
  }
};
