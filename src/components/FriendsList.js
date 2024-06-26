import SingleFriend from "./SingleFriend";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((singleFriend) => {
        return (
          <SingleFriend
            key={singleFriend.id}
            friendData={singleFriend}
            selectedFriend={selectedFriend}
            handleSelect={onSelection}
          />
        );
      })}
    </ul>
  );
}
export default FriendsList;
