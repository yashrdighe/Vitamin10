import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const res = await fetch("https://my-flask-api.onrender.com/quote");
    const data = await res.json();
    setQuote(data.quote);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Quote of the Day</h1>
      <p>{quote || "Click below to get a quote!"}</p>
      <button onClick={fetchQuote}>Get Quote</button>
    </div>
  );
}

export default App;
