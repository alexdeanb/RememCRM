import { Modal, Button, Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { getAllUserContacts } from "../../modules/contactManager";
import { ContactModalTableEntry } from "./ContactModalTableEntry";

export const ContactModal = ({
  modalState,
  setModalState,
  contactState,
  contactSetterFunction,
  userProfile,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [contacts, setContacts] = useState();

  useEffect(() => {
    getAllUserContacts(userProfile.id).then(setContacts);
  }, []);

  const handleClose = () => {
    setModalState(false);
  };

  if (contacts) {
    return (
      <>
        <Modal show={modalState} onClose={handleClose}>
          <Modal.Header>Select a Contact</Modal.Header>
          <Modal.Body>
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Phone</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Source</Table.HeadCell>
                <Table.HeadCell>SELECT</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {contacts.map((contact) => {
                  return (
                    <ContactModalTableEntry
                      key={contact.id}
                      contact={contact}
                      contactSetterFunction={contactSetterFunction}
                      setModalState={setModalState}
                    />
                  );
                })}
              </Table.Body>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};
