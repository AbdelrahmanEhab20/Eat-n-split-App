import { useState } from "react";
import ReusableButton from "../helpers/Button";
import { v4 as uuidv4 } from "uuid";
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
export default AddFriendForm;
