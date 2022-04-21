import React from "react";

export interface Column<T> {
  label: string;
  key: keyof T;
  className?: string;
  formatFn?: (value: any) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  cellPadding?: number;
}

export default function Table<T>({ data, columns, cellPadding }: TableProps<T>) {
  return (
    <table className="font-roboto table-fixed mx-auto">
      {/* Display header row */}
      <thead>
        <tr className="sticky border-2 text-slate-600 font-bold ">
          {columns.map((column) => (
            <td key={column.key as string} className={`py-${cellPadding ?? 2} px-4`}>
              {column.label}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Display data rows */}
        {data.map((row, idx) => (
          <tr key={idx} className="border-2 text-slate-600 ">
            {columns.map((col) => (
              <td
                key={col.key as string}
                className={`py-${cellPadding ?? 2} px-4 ${col.className}`}
              >
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
