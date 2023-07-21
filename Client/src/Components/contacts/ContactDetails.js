import { useState } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "../../modules/contactManager";

export const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState();

  useEffect(() => {
    getContactById(id).then(setContact);
  }, []);

  return <div></div>;
};
