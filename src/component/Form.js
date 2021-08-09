import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("I am learning React!");

  const handleForm = (event) => {
    event.preventDefault();
    setTitle(event.target.name.value);
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleForm}>
        <input
          name="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
