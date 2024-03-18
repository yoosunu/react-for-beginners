import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
/* useEffect: if some state changes, do not call
some function every time. Just call one time.*/

function Hello() {
  useEffect(() => {
    console.log("Hi");
    return () => console.log("bye");
  });
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const [show, setShow] = useState(false);
  const onShow = () => setShow((current) => !current);
  // console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("I run when the keyword changes.");
    }
  }, [keyword]);
  useEffect(() => {
    if (counter !== 0) {
      console.log("I run when the counter changes.");
    }
  }, [counter]);
  return (
    <div>
      <h1>Google</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      {/* <h1 className={styles.title}>hello guys~</h1> */}
      <h1>{counter}</h1>
      <button className="btn" onClick={onClick}>
        click!
      </button>
      <button onClick={onShow}>{show ? "Hide" : "Show"}</button>
      {show ? <Hello /> : null}
      {/* <Button text={"Click!"} /> */}
    </div>
  );
}

export default App;
