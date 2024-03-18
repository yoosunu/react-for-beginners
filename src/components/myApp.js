import { useState, useEffect } from "react";

function MyApp() {
  const [code, setCode] = useState();
  const onChange = (event) => {
    setCode(event.target.value);
  };
  const sendMessage = () => {
    console.log("sending message...");
  };
  useEffect(() => {
    if (code !== "") {
      sendMessage();
    }
  }, [code]);
  return (
    <div>
      <h1 onChange={onChange}>{code}hello</h1>
    </div>
  );
}

export default MyApp;
