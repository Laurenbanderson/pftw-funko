import "./App.css";
import { FunkoRow } from "./FunkoRow";
function App() {
  const funkoPops = [
    {
      funko: "Agent P",
      from: "Phineas & Ferb",
      number: "1627",
      released: "2025",
      onDisplay: true,
      image: "./agentP.png"
    },
    {
      funko: "Holiday Groot",
      from: "Guardians of the Galaxy",
      number: "536",
      released: "2019",
      onDisplay: false,
      image: "./holidayGroot.png"
    },
    {
      funko: "Yzma",
      from: "The Emperor's New Groove",
      number: "1032",
      released: "2021",
      onDisplay: false,
      image: "./yzma.png"
    },
    {
      funko: "Alien",
      from: "Toy Story",
      number: "525",
      released: "2019",
      onDisplay: true,
      image: "./alien.png"
    },
    {
      funko: "Alien in Claw",
      from: "Toy Story",
      number: "1595",
      released: "2025",
      onDisplay: true,
      image: "./alienClaw.png"
    },
    {
      funko: "Alien remix as Randall",
      from: "Toy Story & Monsters INC.",
      number: "761",
      released: "2021",
      onDisplay: true,
      image: "./alienRandall.png"
    },
    
  ]
  return (
    <>
    <h1>Lauren's Funko Collection</h1>
    <h4>My favorite Funkos in my collection:</h4>
    <div className="funko-collection">
  {funkoPops.map((funko) => (
    <FunkoRow
      key={funko.image}
      funko={funko.funko}
      from={funko.from}
      number={funko.number}
      released={funko.released}
      onDisplay={funko.onDisplay}
      image={funko.image}
    />
  ))}
</div>
<h4>I first started collecting Funkos in 2021 when I met my now husband.</h4>
    </>
  )
}

export default App;