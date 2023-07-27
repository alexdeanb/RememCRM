import { Table } from "flowbite-react";

export const ContactModalTableEntry = ({
  contact,
  contactSetterFunction,
  setModalState,
}) => {
  const setContact = () => {
    contactSetterFunction(contact.id);
    setModalState(false);
  };

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {contact.primaryFirstName} {contact.primaryLastName}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {contact.cellPhone}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {contact.status.name}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {contact.source.name}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <a
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          onClick={setContact}
        >
          <p>Select</p>
        </a>
      </Table.Cell>
    </Table.Row>
  );
};
