import { useState, useEffect } from "react";
import { Button, Select, TextInput, Textarea } from "flowbite-react";
import { getAllStatuses, getAllSources } from "../../modules/ListOptionManager";
import { addContact } from "../../modules/contactManager";
import { useNavigate } from "react-router-dom";
import { Label } from "flowbite-react";
import { ContactModal } from "../spareparts/ContactModal";

export const ContactAdd = ({ userProfile }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [chosenContact, setChosenContact] = useState();

  const [newContact, setNewContact] = useState({
    AssignedUserId: userProfile.id,
    PrimaryFirstName: "",
    PrimaryLastName: "",
    PrimaryEmailAddress: null,
    PrimaryDOB: null,
    SecondaryFirstName: null,
    SecondaryLastName: null,
    SecondaryEmailAddress: null,
    SecondaryDOB: null,
    Address: null,
    City: null,
    State: null,
    Zip: null,
    HomePhone: null,
    HomePhoneNote: null,
    CellPhone: null,
    CellPhoneNote: null,
    Notes: null,
    ReferralContactId: null,
    SourceId: 0,
    StatusId: 0,
  });

  const [sources, setSources] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllStatuses().then(setStatuses);
    getAllSources().then(setSources);
  }, []);

  useEffect(() => {
    const copy = { ...newContact };
    copy.ReferralContactId = chosenContact;
    setNewContact(copy);
  }, [chosenContact]);

  const addAContact = () => {
    addContact(newContact).then(navigate("/MyContacts"));
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-8 gap-4 mb-4">
          <div className="flex col-span-1 ">
            <div className="flex items-end justify-end h-auto w-full">
              <p className="text-xl text-gray-400 dark:text-gray-500">
                PRIMARY
              </p>
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="first_name" className="dark:text-gray-400">
                First name
              </Label>
              <TextInput
                sizing="md"
                type="text"
                required
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.PrimaryFirstName = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="last_name" className="dark:text-gray-400">
                Last name
              </Label>
              <TextInput
                sizing="md"
                type="text"
                required
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.PrimaryLastName = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="email_address" className="dark:text-gray-400">
                Email Address
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.PrimaryEmailAddress = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-1">
            <div className="w-full">
              <Label htmlFor="last_name" className="dark:text-gray-400">
                DOB
              </Label>
              <TextInput
                sizing="md"
                type="date"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.PrimaryDOB = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-1">
            <div className="flex items-end justify-end h-auto w-full">
              <p className="text-xl text-gray-400 dark:text-gray-500">OTHER</p>
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="first_name" className="dark:text-gray-400">
                First name
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.SecondaryFirstName = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="last_name" className="dark:text-gray-400">
                Last name
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.SecondaryLastName = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="email_address" className="dark:text-gray-400">
                Email Address
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.SecondaryEmailAddress = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-1">
            <div className="w-full">
              <Label htmlFor="last_name" className="dark:text-gray-400">
                DOB
              </Label>
              <TextInput
                sizing="md"
                type="date"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.SecondaryDOB = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <hr className="col-span-8" />
          <div className="flex col-span-3">
            <div className="w-full">
              <Label htmlFor="first_name" className="dark:text-gray-400">
                Address
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.Address = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-5"></div>
          <div className="flex col-span-1">
            <div className="w-full">
              <Label htmlFor="city" className="dark:text-gray-400">
                City
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.City = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-1">
            <div className="w-full">
              <Label htmlFor="state" className="dark:text-gray-400">
                State
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.State = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-1">
            <div className="w-full">
              <Label htmlFor="zip" className="dark:text-gray-400">
                Zip
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.Zip = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-2"></div>
          <div className="flex col-span-3">
            <div className="w-full">
              <Label htmlFor="contact">Referred By:</Label>
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
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="CellPhone" className="dark:text-gray-400">
                Cell Phone
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.CellPhone = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="CellPhoneNote" className="dark:text-gray-400">
                Notes
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.CellPhoneNote = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-3 row-span-2">
            <Label htmlFor="SpecialNotes" className="dark:text-gray-400">
              Special Notes
            </Label>
            <Textarea
              id="SpecialNotes"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              onChange={(event) => {
                const copy = { ...newContact };
                copy.Notes = event.target.value;
                setNewContact(copy);
              }}
            />
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="HomePhone" className="dark:text-gray-400">
                Home Phone
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.HomePhone = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <Label htmlFor="HomePhoneNote" className="dark:text-gray-400">
                Notes
              </Label>
              <TextInput
                sizing="md"
                type="text"
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.HomePhoneNote = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-4">
            <div className="w-full">
              <Label htmlFor="HomePhoneNote" className="dark:text-gray-400">
                Source
              </Label>
              <Select
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.SourceId = parseInt(event.target.value);
                  setNewContact(copy);
                }}
              >
                <option value="0">Select a Source</option>
                {sources.map((source) => {
                  return (
                    <option value={source.id}>
                      {source.name} - {source.code}
                    </option>
                  );
                })}
              </Select>
            </div>
          </div>
          <div className="flex col-span-4">
            <div className="w-full">
              <Label htmlFor="HomePhoneNote" className="dark:text-gray-400">
                Status
              </Label>
              <Select
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.StatusId = parseInt(event.target.value);
                  setNewContact(copy);
                }}
              >
                <option value="0">Status?</option>
                {statuses.map((status) => {
                  return <option value={status.id}>{status.name}</option>;
                })}
              </Select>
            </div>
          </div>
          <div className="col-span-3"></div>
          <div className="col-span-2">
            <div>
              <Button onClick={addAContact}>Submit New Contact</Button>
            </div>
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
    </div>
  );
};
