import { useState } from "react";
import ReusableButton from "./helpers/Button";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendsForm";
import SplitBillForm from "./components/SplitBillForm";

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
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriendForm() {
    setShowAddFriend((show) => !show);
  }
  function handleAddingNewFriend(friend) {
    setFriendsList((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelectingNewFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplitTheBill(value) {
    setFriendsList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friendsList}
          selectedFriend={selectedFriend}
          onSelection={handleSelectingNewFriend}
        />
        {showAddFriend && <AddFriendForm addFriend={handleAddingNewFriend} />}
        <ReusableButton clickFunc={handleShowAddFriendForm}>
          {showAddFriend ? "Close" : "Add Friend"}
        </ReusableButton>
      </div>
      {selectedFriend && (
        <SplitBillForm
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitTheBill}
        />
      )}
    </div>
  );
}

export default App;
