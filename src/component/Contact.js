import { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.name.value,
      e.target.email.value,
      e.target.message.value
    );
  };

  return (
    <div>
      <h2>Contact</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={(e) => setValue({ name: e.target.value })}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={(e) => setValue({ email: e.target.value })}
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={value.message}
            onChange={(e) => setValue({ message: e.target.value })}
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
