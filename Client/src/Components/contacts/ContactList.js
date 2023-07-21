import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { getAllUserContacts } from "../../modules/contactManager";
import { ContactTableEntry } from "./ContactTableEntry";
export const ContactList = ({ userProfile }) => {
  const [myContacts, setMyContacts] = useState([]);

  useEffect(() => {
    getAllUserContacts(userProfile.id).then(setMyContacts);
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Source</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {myContacts.map((contact) => {
              return ContactTableEntry(contact);
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
