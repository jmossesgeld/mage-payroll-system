import Modal from "../../UI/Modal";
import useEmployees from "../../../hooks/useEmployees";
import { uniqueID } from "../../../lib";

interface EmployeeFormProps {
  id?: number;
  children: React.ReactNode;
  className?: string;
}

export default function EmployeeForm({ id, children, className }: EmployeeFormProps) {
  const { findEmployee } = useEmployees();
  uniqueID();

  return (
    <Modal label={children} className={className}>
      <div className="bg-white shadow-lg w-96 h-96 shadow-sky-700 opacity-100 rounded-xl">
        <h1>Employee Form</h1>
      </div>
    </Modal>
  );
}
