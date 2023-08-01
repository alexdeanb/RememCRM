import { useState, useEffect } from "react";
import { Label, TextInput, Button, Select } from "flowbite-react";
import { getAllContractTypes } from "../../modules/ListOptionManager";
import { ContactModal } from "../spareparts/ContactModal";
import { addContract } from "../../modules/contractManager";
import { useNavigate } from "react-router-dom";

export const ContractAdd = ({ userProfile }) => {
  const [contractTypes, setContractTypes] = useState();
  const [chosenContact, setChosenContact] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const [contract, setContract] = useState({
    ContactId: 0,
    UserId: 0,
    ContractTypeId: 0,
    FuneralAmount: 0,
    TravelAmount: 0,
    CloseDate: new Date(),
  });

  useEffect(() => {
    getAllContractTypes().then(setContractTypes);
  }, []);

  useEffect(() => {
    const copy = { ...contract };
    copy.ContactId = chosenContact;
    setContract(copy);
  }, [chosenContact]);

  useEffect(() => {
    const copy = { ...contract };
    copy.UserId = userProfile.id;
    setContract(copy);
  }, [userProfile]);

  const handleContractSubmit = () => {
    addContract(contract).then(() => {
      navigate("/MyContacts");
    });
  };

  if (contractTypes) {
    return (
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/*Select Contact*/}
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <Label htmlFor="contact">Contact</Label>
              <Button
                id="contact"
                color="light"
                className="w-full"
                onClick={setModalOpen}
              >
                Select Contact
              </Button>
              {modalOpen ? (
                <ContactModal
                  modalState={modalOpen}
                  setModalState={setModalOpen}
                  contactState={chosenContact}
                  contactSetterFunction={setChosenContact}
                  userProfile={userProfile}
                />
              ) : (
                ""
              )}
            </div>
            <div className="col-span-1"></div>

            {/*Select Contract Type*/}
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <Label htmlFor="contractType">Contract Type</Label>
              <Select
                id="contractType"
                onChange={(event) => {
                  const copy = { ...contract };
                  copy.ContractTypeId = parseInt(event.target.value);
                  setContract(copy);
                }}
              >
                <option value={0}>Select a Contract Type</option>
                {contractTypes.map((contractType) => {
                  return (
                    <option value={contractType.id} key={contractType.id}>
                      {contractType.name}
                    </option>
                  );
                })}
              </Select>
            </div>
            <div className="col-span-1"></div>

            {/*Funeral Amount*/}
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <Label htmlFor="funeralAmount">Funeral Amount</Label>
              <TextInput
                type="number"
                id="funeralAmount"
                onChange={(event) => {
                  const copy = { ...contract };
                  copy.FuneralAmount = parseInt(event.target.value);
                  setContract(copy);
                }}
              />
            </div>
            <div className="col-span-1"></div>

            {/*Travel Amount*/}
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <Label htmlFor="travelAmount">Travel Amount</Label>
              <TextInput
                type="number"
                id="travelAmount"
                onChange={(event) => {
                  const copy = { ...contract };
                  copy.TravelAmount = parseInt(event.target.value);
                  setContract(copy);
                }}
              />
            </div>
            <div className="col-span-1"></div>

            {/*Close Date*/}
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <Label htmlFor="closeDate">Close Date</Label>
              <TextInput
                type="date"
                id="closeDate"
                onChange={(event) => {
                  const copy = { ...contract };
                  copy.CloseDate = event.target.value;
                  setContract(copy);
                }}
              />
            </div>
            <div className="col-span-1"></div>
            {/* Add Button */}
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <Button
                className="w-full"
                onClick={() => {
                  handleContractSubmit();
                }}
              >
                Add Contract
              </Button>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    );
  }
};
