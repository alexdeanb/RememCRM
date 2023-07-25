import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "../../modules/contactManager";

export const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState();

  useEffect(() => {
    getContactById(id).then(setContact);
  }, []);

  if (contact) {
    return (
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3">
            <div className="LeftBox dark:text-white col-span-2">
              <div className="grid grid-cols-4">
                <h1 className="col-span-4 text-5xl text-center">
                  {contact.primaryFirstName} {contact.primaryLastName}
                </h1>
                <p className="col-span-2">{contact.primaryEmailAddress}</p>
                <p className="col-span-2">{contact.primaryDOB}</p>
                <h1 className="col-span-4 text-5xl text-center">
                  {contact.secondaryFirstName} {contact.secondaryLastName}
                </h1>
                <p className="col-span-2">{contact.secondaryEmailAddress}</p>
                <p className="col-span-2">{contact.secondaryDOB}</p>
                <div className="col-span-4"></div>
                <h2 className="col-span-4 text-3xl text-center">Details</h2>
                <div className="col-span-4"></div>
                {contact.address ? (
                  <p className="col-span-4 text-center">
                    {contact.address} {contact.city},{contact.state}{" "}
                    {contact.zip}
                  </p>
                ) : (
                  ""
                )}
                {contact.homePhone ? (
                  <p className="col-span-2">Home Phone: {contact.homePhone}</p>
                ) : (
                  ""
                )}
                {contact.homePhoneNote ? (
                  <p className="col-span-2">
                    Home Phone Notes :{contact.homePhoneNote}
                  </p>
                ) : (
                  ""
                )}
                {contact.cellPhone ? (
                  <p className="col-span-2">Cell Phone: {contact.cellPhone}</p>
                ) : (
                  ""
                )}
                {contact.cellPhoneNote ? (
                  <p className="col-span-2">
                    Cell Phone Notes: {contact.cellPhoneNote}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
