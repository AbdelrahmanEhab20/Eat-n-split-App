function ReusableButton({ children, clickFunc }) {
  return (
    <button onClick={clickFunc} className="button">
      {children}
    </button>
  );
}
export default ReusableButton;
