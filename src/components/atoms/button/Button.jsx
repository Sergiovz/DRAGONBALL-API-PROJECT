const Button = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      {label}
    </button>
  );
};
export default Button;
