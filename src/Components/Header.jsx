import React from "react";

export default function Header(props) {
  const [newWord, updateNewWord] = React.useState("");

  function searchWord(event) {
    updateNewWord(event.target.value);
  }

  function passWord(event) {
    event.preventDefault();

    props.update(newWord);
  }

  return (
    <div className="header">
      <h1>
        <b>React Movie Search</b>
      </h1>
      <form onSubmit={passWord}>
        <label>
          <b>Movie name:</b>
        </label>
        <input
          type="text"
          name="search"
          onChange={searchWord}
          placeholder="Search movies..."
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
