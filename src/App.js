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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}
function FriendsList() {
  const friends = initialFriends;
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
      <button className="button">Select</button>
    </li>
  );
}

export default App;
