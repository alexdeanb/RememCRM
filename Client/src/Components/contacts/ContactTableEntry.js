import { Table, Tooltip } from "flowbite-react";
import { Link } from "react-router-dom";

export const ContactTableEntry = (contact, key) => {
  return (
    <Table.Row
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
      key={key}
    >
      <Link to={`/MyContacts/details/${contact.id}`}>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          <Tooltip content="View Details">
            {contact.primaryFirstName} {contact.primaryLastName}
          </Tooltip>
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
      <Link to={`edit/${contact.id}`}>
        <Table.Cell className="bg-white dark:border-gray-700 dark:bg-gray-800">
          Edit
        </Table.Cell>
      </Link>
    </Table.Row>
  );
};
