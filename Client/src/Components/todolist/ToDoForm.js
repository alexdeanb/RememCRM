import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import "flowbite";
import { getAllPriorities } from "../../modules/ListOptionManager";
import { getAllUserContacts } from "../../modules/contactManager";
import { addToDo } from "../../modules/ToDoManager";
import { useNavigate } from "react-router-dom";
import { ContactModal } from "../spareparts/ContactModal";
import { userContext } from "../../App";

export const ToDoForm = () => {
  const { userProfile, userToDos } = useContext(userContext);
  const [userProfileValue, setUserProfileValue] = userProfileValue;
  const [userToDosValue, setUserToDosValue] = userToDos;

  const defaultDate = new Date();
  const [ToDo, setToDo] = useState({
    UserId: 0,
    Description: "",
    ContactId: 0,
    PriorityId: 0,
    Due: defaultDate.toISOString(),
    Completed: false,
  });

  const [priorities, setPriorities] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [chosenContact, setChosenContact] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    getAllPriorities().then(setPriorities);
    getAllUserContacts(userProfileValue.id).then(setContacts);
    setUserId(userProfileValue.id);
  }, []);

  useEffect(() => {
    const copy = { ...ToDo };
    copy.UserId = userId;
    setToDo(copy);
  }, [userId]);

  useEffect(() => {
    const copy = { ...ToDo };
    copy.ContactId = chosenContact;
    setToDo(copy);
  }, [chosenContact]);

  const navigate = useNavigate();

  const handleToDoSubmit = () => {
    addToDo(ToDo).then(() => {
      setUserToDosValue();
      navigate("/ToDos");
    });
  };

  if (priorities.length > 0) {
    return (
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-9 gap-4 mb-4">
            <div className="col-span-9 row-span-3">
              <Label htmlFor="summary" className="text-center">
                Summary
              </Label>
              <Textarea
                id="summary"
                required
                rows={4}
                onChange={(event) => {
                  const copy = { ...ToDo };
                  copy.Description = event.target.value;
                  setToDo(copy);
                }}
              />
            </div>

            <div className="col-span-3">
              <Label htmlFor="contact">Contact</Label>
              <Button
                id="contact"
                color="light"
                className="w-full"
                onClick={setModalOpen}
              >
                Select Contact
              </Button>
              {modalOpen ? (
                <ContactModal
                  modalState={modalOpen}
                  setModalState={setModalOpen}
                  contactState={chosenContact}
                  contactSetterFunction={setChosenContact}
                />
              ) : (
                ""
              )}
            </div>
            <div className="col-span-3">
              <Label htmlFor="date">Due Date</Label>
              <TextInput
                sizing="md"
                type="date"
                onChange={(event) => {
                  const copy = { ...ToDo };
                  copy.Due = event.target.value;
                  setToDo(copy);
                }}
              />
            </div>
            <div className="col-span-3">
              <Label htmlFor="priority">Priority</Label>
              <Select
                id="priority"
                onChange={(event) => {
                  const copy = { ...ToDo };
                  copy.PriorityId = parseInt(event.target.value);
                  setToDo(copy);
                }}
              >
                <option value={0}>Select a Priority</option>
                {priorities.map((priority) => {
                  return (
                    <option value={priority.id} key={priority.id}>
                      {priority.name}
                    </option>
                  );
                })}
              </Select>
            </div>
            <div className="col-span-3" />
            <div className="col-span-3">
              <Button className="w-full" onClick={handleToDoSubmit}>
                ADD TODO
              </Button>
            </div>
            <div className="col-span-3" />
          </div>
        </div>
      </div>
    );
  }
};
