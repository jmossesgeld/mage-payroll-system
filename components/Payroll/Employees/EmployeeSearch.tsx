import { useState } from "react";
import { Button } from "../../UI/Button";
import Modal from "../../UI/Modal";

export default function EmployeeSearch(): JSX.Element {
  const modalState = useState(false);
  return (
    <Modal state={modalState} label={<Button color="secondary">Search Employee</Button>}>
      <div className="bg-white p-4 md:p-10 box-content shadow-lg max-w-lg shadow-sky-700 opacity-100 rounded-xl w-full font-segoeui text-slate-800 ">
Search Employee      </div>
    </Modal>
  );
}
