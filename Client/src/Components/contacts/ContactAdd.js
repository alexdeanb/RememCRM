import { useState } from "react";

export const ContactAdd = () => {
  const [newContact, setNewContact] = useState({
    PrimaryFirstName: "",
    PrimaryLastName: "",
    PrimaryEmail: null,
    PrimaryDOB: null,
    SecondaryFirstName: null,
    SecondaryLastName: null,
    SecondaryEmail: null,
    SecondaryDOB: null,
    Address: null,
    City: null,
    State: null,
    Zip: null,
    HomePhone: null,
    HomePhoneNotes: null,
    CellPhone: null,
    CellPhoneNotes: null,
    Notes: null,
    ReferralUserId: null,
    SourceId: 0,
    StatusId: 0,
  });

  const [sources, setSources] = useState([]);
  const [statuses, setStatuses] = useState([]);

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
              <label htmlFor="first_name" className="">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="last_name" className="">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="email_address" className="">
                Email Address
              </label>
              <input
                type="text"
                id="email_address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.PrimaryEmail = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-1">
            <div className="w-full">
              <label htmlFor="last_name" className="">
                DOB
              </label>
              <input
                type="date"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="first_name" className="">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="last_name" className="">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="email_address" className="">
                Email Address
              </label>
              <input
                type="text"
                id="email_address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.SecondaryEmail = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="flex col-span-1">
            <div className="w-full">
              <label htmlFor="last_name" className="">
                DOB
              </label>
              <input
                type="date"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="first_name" className="">
                Address
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="city" className="">
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="state" className="">
                State
              </label>
              <input
                type="text"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="zip" className="">
                Zip
              </label>
              <input
                type="text"
                id="zip"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="reference" className="">
                Referred By
              </label>
              <select
                id="reference"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.ReferralContactId = event.target.value;
                  setNewContact(copy);
                }}
              ></select>
            </div>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <label htmlFor="CellPhone" className="">
                Cell Phone
              </label>
              <input
                type="text"
                id="CellPhone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="CellPhoneNote" className="">
                Notes
              </label>
              <input
                type="text"
                id="CellPhoneNote"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.CellPhoneNotes = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-3 row-span-2">
            <label htmlFor="SpecialNotes" className="">
              Special Notes
            </label>
            <textarea
              id="SpecialNotes"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              onChange={(event) => {
                const copy = { ...newContact };
                copy.Notes = event.target.value;
                setNewContact(copy);
              }}
            ></textarea>
          </div>
          <div className="flex col-span-2">
            <div className="w-full">
              <label htmlFor="HomePhone" className="">
                Home Phone
              </label>
              <input
                type="text"
                id="HomePhone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
              <label htmlFor="HomePhoneNote" className="">
                Notes
              </label>
              <input
                type="text"
                id="HomePhoneNote"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                onChange={(event) => {
                  const copy = { ...newContact };
                  copy.HomePhoneNotes = event.target.value;
                  setNewContact(copy);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
