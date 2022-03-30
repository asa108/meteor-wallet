import React, { useState } from "react";
import { ContactCollection } from "../api/ContactCollection";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const saveContact = (e) => {
    e.preventDefault();
    ContactCollection.insert({ name, email, imageUrl });
    setName("");
    setEmail("");
    setImageUrl("");
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          value={imageUrl}
          type="text"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <button tyoe="button" onClick={saveContact}>
          Save
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
