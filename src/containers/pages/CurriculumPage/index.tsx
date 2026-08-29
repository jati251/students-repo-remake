import React, { useState } from "react";

interface TableRow {
  id: number;
  name: string;
  email: string;
}

const CurriculumPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data: TableRow[] = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
  }));

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Table with Pagination</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{row.id}</td>
              <td className="border border-gray-300 px-4 py-2">{row.name}</td>
              <td className="border border-gray-300 px-4 py-2">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } hover:bg-blue-400`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CurriculumPage;
