import React from "react";

export interface Column<T> {
  label: string;
  key: keyof T;
  className?: string;
  formatFn?: (value: any) => React.ReactNode;
}

export default function Table<T>({ data, columns }: { data: T[]; columns: Column<T>[] }) {
  return (
    <table className="font-roboto">
      {/* Display header row */}
      <thead>
        <tr className="border-2 odd:bg-slate-600 text-slate-100 border-b-2 ">
          {columns.map((column) => (
            <td key={column.key as string} className="p-4">
              {column.label}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Display data rows */}
        {data.map((row, idx) => (
          <tr key={idx} className="border-2 ">
            {columns.map((col) => (
              <td key={col.key as string} className={"p-4 border-x-2 " + col.className}>
                {/* If formatFn exist, format the value, else display the value as is */}
                {col.formatFn
                  ? col.formatFn(row[col.key] as unknown as string)
                  : (row[col.key] as unknown as string)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
