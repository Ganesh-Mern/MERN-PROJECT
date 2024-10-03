import { Box } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs"; // Assuming you are using this icon

const TableComponent = ({ column, data }) => {
  return (
    <div className="sm:col-span-9 w-full font-poppins">
      {/* Add MUI Box to enable scrolling */}
      <Box
        sx={{
          maxHeight: "auto", // Set the max height for the scrollable area
          overflowY: "auto", // Enable vertical scrolling
          width: "100%", // Ensure full width
        }}
      >
        <table className="border-spacing-4 w-full">
          <thead className="text-customGray">
            <tr className="border-b">
              {column.map((column, index) => (
                <td key={index} className="py-2 text-nowrap sm:py-4 px-2">
                  {column}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b">
                  {column.map((columnKey, colIndex) => (
                    <td key={colIndex} className="sm:py-4 py-2 text-nowrap px-2 ">
                      {/* Check if the columnKey is 'ID' to handle the profile image rendering */}
                      {columnKey === "ID" ? (
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full flex items-center">
                            <img
                              src={row["profile"]} // Access profile from row
                              alt=""
                              className="w-5 h-5 rounded-full"
                            />
                          </span>
                          <h1 className="text-sm font-normal font-poppins">
                            {row["ID"]} {/* Render ID */}
                          </h1>
                        </div>
                      ) : // Render normal cells for other columns
                      row[columnKey] !== undefined ? (
                        row[columnKey]
                      ) : (
                        "N/A"
                      )}
                    </td>
                    
                  ))}
                  <td className="sm:py-4 py-2 text-nowrap px-2">
                  <BsThreeDotsVertical size={15} className="rotate-90" />
                </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={column.length} className="text-center py-4">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Box>
    </div>
  );
};

export default TableComponent;
