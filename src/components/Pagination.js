import React from "react";
import Button from "@mui/material/Button";

export default function PaginationPokemon({ offsetData, setOffsetData }) {
  const handleNextPage = () => {
    setOffsetData(offsetData + 12);
  };

  const handlePreviousPage = () => {
    setOffsetData(offsetData - 12);
  };

  return (
    <div className="sidebar__pagination">
      <Button
        variant="contained"
        disabled={offsetData === 0}
        onClick={handlePreviousPage}
        style={{ marginRight: "15px" }}
      >
        Prev
      </Button>
      <Button variant="contained" onClick={handleNextPage}>
        Next
      </Button>
    </div>
  );
}
