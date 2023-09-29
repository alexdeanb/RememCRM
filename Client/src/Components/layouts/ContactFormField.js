import React from "react";
import { Label, TextInput } from "flowbite-react";

const ContactFormField = ({
  children,
  colSpan,
  rowSpan = 1,
  onChange,
  labelText,
  type,
}) => {
  return (
    <div className={`flex col-span-${colSpan} row-span-${rowSpan}`}>
      <div className="w-full">
        <Label className="dark:text-gray-400">{labelText}</Label>
        <TextInput sizing="md" type={type} onChange={onChange} />
      </div>
    </div>
  );
};

export default ContactFormField;
