import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getContactById } from "../../modules/contactManager";
import { getContractsByContactId } from "../../modules/contractManager";
import { getCompletedToDoByContactId } from "../../modules/ToDoManager";
import { Table, Tooltip } from "flowbite-react";

export const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState();
  const [contract, setContract] = useState();
  const [completedTasks, setCompletedTasks] = useState([]);
  let conCloseDate = null;
  let primDob = null;
  let seconDob = null;

  if (contact) {
    if (contract) {
      conCloseDate = new Date(Date.parse(contract.closeDate));
      conCloseDate = conCloseDate.toLocaleDateString("en-US");
    }
    if (contact.primaryDOB) {
      primDob = new Date(Date.parse(contact.primaryDOB));
      primDob = primDob.toLocaleDateString("en-US");
    }
    if (contact.primaryDOB) {
      seconDob = new Date(Date.parse(contact.secondaryDOB));
      seconDob = seconDob.toLocaleDateString("en-US");
    }
  }

  useEffect(() => {
    getContactById(id).then(setContact);
  }, []);

  useEffect(() => {
    if (contact) {
      getContractsByContactId(contact.id).then(setContract);
      getCompletedToDoByContactId(contact.id).then(setCompletedTasks);
    }
  }, [contact]);

  if (contact) {
    return (
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3">
            <div className="LeftBox dark:text-white col-span-1 ">
              <div className="grid grid-cols-4">
                <h1 className="col-span-4 text-5xl text-center py-2">
                  Contact Details
                </h1>
                <h2 className="col-span-4 text-4xl text-center py-2">
                  {contact.primaryFirstName} {contact.primaryLastName}
                </h2>
                <p className="col-span-2 text-center py-2">
                  {contact.primaryEmailAddress}
                </p>
                <p className="col-span-2 text-center py-2">
                  Born: {primDob ? primDob : ""}
                </p>
                {contact.secondaryFirstName ? (
                  <>
                    <h2 className="col-span-4 text-4xl text-center py-2">
                      {contact.secondaryFirstName} {contact.secondaryLastName}
                    </h2>
                  </>
                ) : (
                  ""
                )}
                {contact.secondaryEmailAddress ? (
                  <p className="col-span-2 text-center py-2">
                    {contact.secondaryEmailAddress}
                  </p>
                ) : (
                  ""
                )}
                {contact.secondaryDOB ? (
                  <p className="col-span-2 text-center py-2">
                    Born: {seconDob ? seconDob : ""}
                  </p>
                ) : (
                  ""
                )}
                <div className="col-span-4"></div>
                <h2 className="col-span-4 text-3xl text-center py-2">
                  Details
                </h2>
                <div className="col-span-4"></div>
                {contact.address ? (
                  <p className="col-span-4 text-center py-2">
                    {contact.address} {contact.city}, {contact.state}{" "}
                    {contact.zip}
                  </p>
                ) : (
                  ""
                )}
                {contact.homePhone ? (
                  <p className="col-span-2 text-center py-2">
                    Home Phone: {contact.homePhone}
                  </p>
                ) : (
                  ""
                )}
                {contact.homePhoneNote ? (
                  <p className="col-span-2 text-center py-2">
                    Home Phone Notes: {contact.homePhoneNote}
                  </p>
                ) : (
                  ""
                )}
                {contact.cellPhone ? (
                  <p className="col-span-2 text-center py-2">
                    Cell Phone: {contact.cellPhone}
                  </p>
                ) : (
                  ""
                )}
                {contact.cellPhoneNote ? (
                  <p className="col-span-2 text-center py-2">
                    Cell Phone Notes: {contact.cellPhoneNote}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {contract ? (
              <div className="MiddleBox dark:text-white col-span-1">
                <div className="grid grid-cols-1">
                  <div className="col-span-1 flex justify-center">
                    <Tooltip
                      content="Click to Edit Contract"
                      placement="bottom"
                    >
                      <Link to={`/Contract/edit/${contract.id}`}>
                        <h1 className=" text-5xl text-center py-2">
                          Contract Details
                        </h1>
                      </Link>
                    </Tooltip>
                  </div>
                  <p className="col-span-1 text-xl text-center py-2">
                    Contract Type - {contract.contractType.name}
                  </p>
                  <p className="col-span-1 text-xl text-center py-2">
                    Funeral Amount - ${contract.funeralAmount}
                  </p>
                  <p className="col-span-1 text-xl text-center py-2">
                    Travel Amount - ${contract.travelAmount}
                  </p>
                  <p className="col-span-1 text-xl text-center py-2">
                    Close Date - {conCloseDate ? conCloseDate : ""}
                  </p>
                </div>
              </div>
            ) : (
              <div className="MiddleBox dark:text-white col-span-1">
                <div className="grid grid-cols-1">
                  <h1 className="col-span-1 text-5xl text-center py-2">
                    Contract Not Added
                  </h1>
                </div>
              </div>
            )}
            <div className="RightBox dark:text-white col-span-1">
              {completedTasks.length > 0 ? (
                <>
                  <h1 className="col-span-1 text-5xl text-center py-2 pb-4">
                    Completed Actions
                  </h1>
                  <Table>
                    <Table.Head>
                      <Table.HeadCell>Due Date</Table.HeadCell>
                      <Table.HeadCell>Description</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                      {completedTasks.map((task) => {
                        let taskDue = new Date(Date.parse(task.due));
                        taskDue = taskDue.toLocaleDateString("en-US");
                        return (
                          <>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                              <Table.Cell>{taskDue}</Table.Cell>
                              <Table.Cell>{task.description}</Table.Cell>
                            </Table.Row>
                          </>
                        );
                      })}
                    </Table.Body>
                  </Table>
                </>
              ) : (
                <h1 className="col-span-1 text-5xl text-center py-2">
                  No Actions Taken
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
