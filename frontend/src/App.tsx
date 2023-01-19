import react from "react";
import "./styles/global.css";
import { Habit } from "./components/Habit";

export function App() {
  return (
    <>
      <Habit completed={5} />
      <Habit completed={15} />
      <Habit completed={25} />
      <Habit completed={35} />
    </>
  );
}
