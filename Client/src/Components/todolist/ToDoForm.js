import { DatePicker } from "antd";
import { Label, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import "flowbite";
import Datepicker from "tailwind-datepicker-react";

export const ToDoForm = ({ userProfile }) => {
  const [ToDo, setToDo] = useState({
    UserId: 0,
    Description: "",
    ContactId: 0,
    PriorityId: 0,
    Due: "",
    Complete: false,
  });

  const options = {
    title: "Due Date",
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background:
        "rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "text-gray-300",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "en",
  };

  const [selectedDate, setSelectedDate] = useState();

  const [show, setShow] = useState(false);

  const handleChange = () => {
    console.log(selectedDate);
  };
  const handleClose = () => {
    setShow(!show);
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-8 gap-4 mb-4">
          <div className="col-span-8 row-span-3">
            <Label htmlFor="summary" className="text-center">
              Summary
            </Label>
            <Textarea id="summary" required rows={4} />
          </div>
          <div className="col-span-2">
            <Label htmlFor="contact">Contact</Label>
          </div>
          <div className="col-span-2">
            <Label htmlFor="date">Due Date</Label>
            <Datepicker
              options={options}
              onChange={(evt) => {
                setSelectedDate(evt);
              }}
              show={show}
              setShow={handleClose}
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="priority">Priority</Label>
          </div>
          <div className="col-span-2">
            <Label htmlFor="status">Status</Label>
          </div>
        </div>
      </div>
    </div>
  );
};
