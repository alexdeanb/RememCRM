import { useState, useEffect } from "react";
import { Button, Select, TextInput, Textarea } from "flowbite-react";
import { getAllStatuses, getAllSources } from "../../modules/ListOptionManager";
import { editContact, getContactById } from "../../modules/contactManager";
import { useNavigate, useParams } from "react-router-dom";

export const ContactEdit = ({ userProfile }) => {
  const [contact, setContact] = useState({ id: 0 });

  const [sources, setSources] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getAllStatuses().then(setStatuses);
    getAllSources().then(setSources);
    getContactById(id).then(setContact);
  }, []);

  const updateContact = () => {
    editContact(contact).then(navigate("/MyContacts"));
  };

  if (contact.id != 0) {
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
                <label htmlFor="first_name" className="dark:text-gray-400">
                  First name
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  required
                  value={contact.primaryFirstName}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.primaryFirstName = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="last_name" className="dark:text-gray-400">
                  Last name
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.primaryLastName}
                  required
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.primaryLastName = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="email_address" className="dark:text-gray-400">
                  Email Address
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.primaryEmailAddress}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.primaryEmailAddress = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-1">
              <div className="w-full">
                <label htmlFor="last_name" className="dark:text-gray-400">
                  DOB
                </label>
                <TextInput
                  sizing="md"
                  type="date"
                  value={contact.primaryDOB}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.primaryDOB = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-1">
              <div className="flex items-end justify-end h-auto w-full">
                <p className="text-xl text-gray-400 dark:text-gray-500">
                  OTHER
                </p>
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="first_name" className="dark:text-gray-400">
                  First name
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.secondaryFirstName}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.secondaryFirstName = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="last_name" className="dark:text-gray-400">
                  Last name
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.secondaryLastName}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.secondaryLastName = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="email_address" className="dark:text-gray-400">
                  Email Address
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.secondaryEmailAddress}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.secondaryEmailAddress = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-1">
              <div className="w-full">
                <label htmlFor="last_name" className="dark:text-gray-400">
                  DOB
                </label>
                <TextInput
                  sizing="md"
                  type="date"
                  value={contact.secondaryDOB}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.secondaryDOB = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <hr className="col-span-8" />
            <div className="flex col-span-3">
              <div className="w-full">
                <label htmlFor="first_name" className="dark:text-gray-400">
                  Address
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.address}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.address = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-5"></div>
            <div className="flex col-span-1">
              <div className="w-full">
                <label htmlFor="city" className="dark:text-gray-400">
                  City
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.city}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.city = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-1">
              <div className="w-full">
                <label htmlFor="state" className="dark:text-gray-400">
                  State
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.state}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.state = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-1">
              <div className="w-full">
                <label htmlFor="zip" className="dark:text-gray-400">
                  Zip
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.zip}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.zip = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-2"></div>
            <div className="flex col-span-3">
              <div className="w-full">
                <label htmlFor="reference" className="dark:text-gray-400">
                  Referred By
                </label>
                <select
                  id="reference"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.referralContactId = event.target.value;
                    setContact(copy);
                  }}
                ></select>
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="CellPhone" className="dark:text-gray-400">
                  Cell Phone
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.cellPhone}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.cellPhone = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="CellPhoneNote" className="dark:text-gray-400">
                  Notes
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.cellPhoneNote}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.cellPhoneNote = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3 row-span-2">
              <label htmlFor="SpecialNotes" className="dark:text-gray-400">
                Special Notes
              </label>
              <Textarea
                id="SpecialNotes"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={contact.notes}
                onChange={(event) => {
                  const copy = { ...contact };
                  copy.notes = event.target.value;
                  setContact(copy);
                }}
              />
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="HomePhone" className="dark:text-gray-400">
                  Home Phone
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.homePhone}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.homePhone = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="w-full">
                <label htmlFor="HomePhoneNote" className="dark:text-gray-400">
                  Notes
                </label>
                <TextInput
                  sizing="md"
                  type="text"
                  value={contact.homePhoneNote}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.homePhoneNote = event.target.value;
                    setContact(copy);
                  }}
                />
              </div>
            </div>
            <div className="flex col-span-4">
              <div className="w-full">
                <label htmlFor="HomePhoneNote" className="dark:text-gray-400">
                  Source
                </label>
                <Select
                  value={contact.sourceId}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.sourceId = parseInt(event.target.value);
                    setContact(copy);
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
                <label htmlFor="HomePhoneNote" className="dark:text-gray-400">
                  Status
                </label>
                <Select
                  value={contact.statusId}
                  onChange={(event) => {
                    const copy = { ...contact };
                    copy.statusId = parseInt(event.target.value);
                    setContact(copy);
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
                <Button onClick={updateContact}>Update Contact</Button>
              </div>
            </div>
            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
    );
  }
};
