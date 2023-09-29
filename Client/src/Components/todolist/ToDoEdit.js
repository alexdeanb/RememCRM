import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import "flowbite";
import { getAllPriorities } from "../../modules/ListOptionManager";
import { getAllUserContacts } from "../../modules/contactManager";
import { editToDo } from "../../modules/ToDoManager";
import { useNavigate, useParams } from "react-router-dom";
import { ContactModal } from "../spareparts/ContactModal";
import { getAllToDoById } from "../../modules/ToDoManager";

export const ToDoEdit = ({ userProfile, setUserToDos }) => {
  const [editingToDo, setEditingToDo] = useState();

  const { id } = useParams();

  const [ToDo, setToDo] = useState();

  const [priorities, setPriorities] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [chosenContact, setChosenContact] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    getAllPriorities().then(setPriorities);
    getAllUserContacts(userProfile.id).then(setContacts);
    getAllToDoById(id).then(setEditingToDo);
  }, []);

  useEffect(() => {
    const copy = { ...editingToDo };
    copy.userId = userId;
    setEditingToDo(copy);
  }, [userId]);

  useEffect(() => {
    const copy = { ...editingToDo };
    copy.contactId = chosenContact;
    setEditingToDo(copy);
  }, [chosenContact]);

  const navigate = useNavigate();

  const handleToDoSubmit = () => {
    editToDo(editingToDo).then(() => {
      setUserToDos();
      navigate("/ToDos");
    });
  };

  if (editingToDo) {
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
                value={editingToDo.description}
                required
                rows={4}
                onChange={(event) => {
                  const copy = { ...editingToDo };
                  copy.description = event.target.value;
                  setEditingToDo(copy);
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
                  userProfile={userProfile}
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
                  const copy = { ...editingToDo };
                  copy.Due = event.target.value;
                  setEditingToDo(copy);
                }}
              />
            </div>
            <div className="col-span-3">
              <Label htmlFor="priority">Priority</Label>
              <Select
                id="priority"
                onChange={(event) => {
                  const copy = { ...editingToDo };
                  copy.priorityId = parseInt(event.target.value);
                  setEditingToDo(copy);
                }}
                value={editingToDo.priorityId}
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
                UPDATE TODO
              </Button>
            </div>
            <div className="col-span-3" />
          </div>
        </div>
      </div>
    );
  }
};
