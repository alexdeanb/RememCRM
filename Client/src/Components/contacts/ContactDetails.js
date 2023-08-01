import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "../../modules/contactManager";
import { getContractsByContactId } from "../../modules/contractManager";

export const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState();
  const [contract, setContract] = useState();
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
                  <h1 className="col-span-1 text-5xl text-center py-2">
                    Contract Details
                  </h1>
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
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
};
