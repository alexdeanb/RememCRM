import { useState, useEffect, useContext, useLayoutEffect } from "react";
import { Button, Select, TextInput, Textarea } from "flowbite-react";
import { getAllStatuses, getAllSources } from "../../modules/ListOptionManager";
import { addContact } from "../../modules/contactManager";
import { useNavigate } from "react-router-dom";
import { Label } from "flowbite-react";
import { ContactModal } from "../spareparts/ContactModal";
import MainLayout from "../layouts/MainLayout";
import ContactFormField from "../layouts/ContactFormField";
import { userContext } from "../../App";

export const ContactAdd = () => {
  const { userProfile } = useContext(userContext);
  const [userProfileValue, setUserProfileValue] = userProfile;

  const [modalOpen, setModalOpen] = useState(false);
  const [chosenContact, setChosenContact] = useState();

  const [newContact, setNewContact] = useState({
    AssignedUserId: userProfileValue.id,
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

  useLayoutEffect(() => {
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
    <MainLayout>
      <div className="grid grid-cols-8 gap-4 mb-4">
        <div className="flex col-span-1 ">
          <div className="flex items-end justify-end h-auto w-full">
            <p className="text-xl text-gray-400 dark:text-gray-500">PRIMARY</p>
          </div>
        </div>
        <ContactFormField
          colSpan={2}
          labelText={"First Name"}
          sizing={"md"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.PrimaryFirstName = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={2}
          labelText={"Last Name"}
          sizing={"md"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.PrimaryLastName = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={2}
          sizing={"md"}
          labelText={"Email Address"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.PrimaryEmailAddress = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={1}
          labelText={"DOB"}
          sizing={"md"}
          type={"date"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.PrimaryDOB = event.target.value;
            setNewContact(copy);
          }}
        ></ContactFormField>
        <div className="flex col-span-1">
          <div className="flex items-end justify-end h-auto w-full">
            <p className="text-xl text-gray-400 dark:text-gray-500">OTHER</p>
          </div>
        </div>
        <ContactFormField
          colSpan={2}
          labelText={"First Name"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.SecondaryFirstName = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={2}
          labelText={"Last Name"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.SecondaryLastName = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={2}
          labelText={"Email Address"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.SecondaryEmailAddress = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={1}
          labelText={"DOB"}
          type={"date"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.SecondaryDOB = event.target.value;
            setNewContact(copy);
          }}
        />
        <hr className="col-span-8" />
        <ContactFormField
          colSpan={3}
          labelText={"Address"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.Address = event.target.value;
            setNewContact(copy);
          }}
        />
        <div className="flex col-span-5"></div>
        <ContactFormField
          colSpan={1}
          labelText={"City"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.City = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={1}
          labelText={"State"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.State = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={1}
          labelText={"Zip"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.Zip = event.target.value;
            setNewContact(copy);
          }}
        />
        <div className="flex col-span-2"></div>
        <ContactFormField colSpan={3}>
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
        </ContactFormField>
        <ContactFormField
          colSpan={2}
          labelText={"Cell Phone"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.CellPhone = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={2}
          labelText={"Notes"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.CellPhoneNote = event.target.value;
            setNewContact(copy);
          }}
        />
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
        <ContactFormField
          colSpan={2}
          labelText={"Home Phone"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.HomePhone = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField
          colSpan={2}
          labelText={"Notes"}
          type={"text"}
          onChange={(event) => {
            const copy = { ...newContact };
            copy.HomePhoneNote = event.target.value;
            setNewContact(copy);
          }}
        />
        <ContactFormField colSpan={4}>
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
        </ContactFormField>
        <ContactFormField colSpan={4}>
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
        </ContactFormField>
        <div className="col-span-3"></div>
        <div className="col-span-2">
          <div>
            <Button onClick={addAContact}>Submit New Contact</Button>
          </div>
        </div>
        <div className="col-span-3"></div>
      </div>
    </MainLayout>
  );
};
