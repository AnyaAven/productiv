import "./Header.test";
import { useState } from "react";
import Button from "./Button.jsx";

const INSPO_API = "https://inspo-quotes-api.herokuapp.com/quotes/random"

/** get random quote
 *
 * Possible return:
 * All our knowledge has its origins in our perceptions. -Leonardo da Vinci
 */
async function getRandomInspoQuote() {
  const resp = await fetch(INSPO_API);
  const data = await resp.json();

  return data.quote.text + " -"+ data.quote.author;
}

/** Header with inspirational quote
 *
 * state:
 * buttonVal -> str
 * inspoQuote -> str
 */
function Header() {
  const [buttonVal, setButtonVal] = useState("Click here for an inspirational quote!")
  const [inspoQuote, setInspoQuote] = useState("");

  async function handleClick(){
    setInspoQuote(await getRandomInspoQuote());
    setButtonVal("New quote");
  }

  return (
    <header className="container-fluid pt-4 pb-1">
      <div className="container">
        <h1>Prøductïv</h1>
        <p className="lead">The best name in todo list management.</p>
        <p className="lead">{inspoQuote}</p>
      </div>
    <Button onClick={handleClick}>{buttonVal}</Button>
    </header>
  );
}

export default Header;