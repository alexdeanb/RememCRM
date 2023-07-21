import { Table } from "flowbite-react";

export const ContactTableEntry = (contact) => {
  return (
    <Table.Row>
      <Table.Cell>
        {contact.primaryFirstName} {contact.primaryLastName}
      </Table.Cell>
      <Table.Cell>{contact.cellPhone}</Table.Cell>
      <Table.Cell>{contact.status.name}</Table.Cell>
      <Table.Cell>{contact.source.name}</Table.Cell>
    </Table.Row>
  );
};
