import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

export const ContactTableEntry = (contact) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Link to={`/MyContacts/details/${contact.id}`}>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {contact.primaryFirstName} {contact.primaryLastName}
        </Table.Cell>
      </Link>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {contact.cellPhone}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {contact.status.name}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {contact.source.name}
      </Table.Cell>
      <Table.Cell className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Link to={`edit/${contact.id}`}>Edit</Link>
      </Table.Cell>
    </Table.Row>
  );
};
