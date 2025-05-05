import Button from "../../atoms/button/Button";
import "./paginationControls.css"
export const PaginationControls = ({ pagination, onPageChange }) => {
  if (!pagination) return null;

  return (
    <div className="pagination-controls">
      <Button
        label="First"
        onClick={() => onPageChange("first")}
        disabled={!pagination.first || pagination.first === ""}
      />
      <Button
        label="< Previous"
        onClick={() => onPageChange("previous")}
        disabled={!pagination.previous || pagination.previous === ""}
      />
      <Button
        label="Next >"
        onClick={() => onPageChange("next")}
        disabled={!pagination.next || pagination.next === ""}
      />
      <Button
        label="Last"
        onClick={() => onPageChange("last")}
        disabled={!pagination.last || pagination.last === ""}
      />
    </div>
  );
};
