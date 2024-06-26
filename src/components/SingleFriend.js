import ReusableButton from "../helpers/Button";

function SingleFriend({ friendData, handleSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friendData.id;
  return (
    <li key={friendData.id} className={isSelected ? "selected" : ""}>
      <img src={friendData.image} alt={friendData.name} />
      <h3>{friendData.name}</h3>
      {friendData.balance < 0 ? (
        <p className="red">
          You own {friendData.name} {Math.abs(friendData.balance)}$
        </p>
      ) : friendData.balance > 0 ? (
        <p className="green">
          {friendData.name} owns you {friendData.balance}$
        </p>
      ) : friendData.balance === 0 ? (
        <p>You and {friendData.name} are even</p>
      ) : (
        <div></div>
      )}
      <ReusableButton clickFunc={() => handleSelect(friendData)}>
        {isSelected ? "Close" : "Select"}
      </ReusableButton>
    </li>
  );
}
export default SingleFriend;
