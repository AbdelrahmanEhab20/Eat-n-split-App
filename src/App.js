import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  function handleShowAddFriendForm() {
    setShowAddFriend((show) => !show);
  }
  function handleAddingNewFriend(friend) {
    setFriendsList((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friendsList} />
        {showAddFriend && <AddFriendForm addFriend={handleAddingNewFriend} />}
        <ReusableButton clickFunc={handleShowAddFriendForm}>
          {showAddFriend ? "Close" : "Add Friend"}
        </ReusableButton>
      </div>
      <SplitBillForm />
    </div>
  );
}
function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((singleFriend) => {
        return <SingleFriend key={singleFriend.id} friendData={singleFriend} />;
      })}
    </ul>
  );
}
function SingleFriend({ friendData }) {
  return (
    <li key={friendData.id}>
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
      <ReusableButton>Select</ReusableButton>
    </li>
  );
}
function AddFriendForm({ addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmitAddForm(e) {
    e.preventDefault();
    if (!name || !image) return;
    const GenerativeId = uuidv4();
    const newFriend = {
      id: GenerativeId,
      name,
      balance: 0,
      image: `${image}?${GenerativeId}`,
    };
    addFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form onSubmit={(e) => handleSubmitAddForm(e)} className="form-add-friend">
      <label>👬 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label>🌄 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <ReusableButton>Add</ReusableButton>
    </form>
  );
}
function SplitBillForm() {
  return (
    <form className="form-split-bill">
      <h2>Split Bill With XX</h2>
      <label>💰 Bill Value</label>
      <input type="text" />

      <label>👨🏻‍💻 Your Expense</label>
      <input type="text" />

      <label>👬 X's Expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value={"user"}>You</option>
        <option value={"friend"}>X</option>
      </select>
      <ReusableButton>Split bill</ReusableButton>
    </form>
  );
}
function ReusableButton({ children, clickFunc }) {
  return (
    <button onClick={clickFunc} className="button">
      {children}
    </button>
  );
}
export default App;
