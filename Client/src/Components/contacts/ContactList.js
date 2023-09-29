import { Table } from "flowbite-react";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { getAllUserContacts } from "../../modules/contactManager";
import { ContactTableEntry } from "./ContactTableEntry";
import { userContext } from "../../App";
import MainLayout from "../layouts/MainLayout";
export const ContactList = () => {
  const [myContacts, setMyContacts] = useState([]);
  const { userProfile } = useContext(userContext);
  const [userProfileValue, setUserProfileValue] = userProfile;

  useLayoutEffect(() => {
    getAllUserContacts(userProfileValue.id).then(setMyContacts);
  }, []);

  return (
    <MainLayout>
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
            return ContactTableEntry(contact, contact.id);
          })}
        </Table.Body>
      </Table>
    </MainLayout>
  );
};
