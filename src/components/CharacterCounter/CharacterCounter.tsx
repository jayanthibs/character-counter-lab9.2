import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";

function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps) {
  const [text, setText] = useState("");

  const handleChange = (event: string) => {
    setText(event);
  };
//filter(Boolean) -It removes falsy values like:  ""  null  undefined

  let words = text.trim().split(/\s+/).filter(Boolean);  

  let wordCount = words.length;
  let totalSeconds = Math.ceil(wordCount / 3);

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let stats = {
    characterCount: text.length,
    wordCount: wordCount,
    readingTime: `${minutes} min ${seconds} sec`,
  };
  // let stats = {
  //   characterCount: text.length,
  //   wordCount: text.split(" ").length,
  //   readingTime: text.split(" ").length / 3,
  // };

  return (
    <div className="common-align">
      <TextInput onTextChange={handleChange} />

      <StatsDisplay stats={stats} showReadingTime={true} />

      <p>
        Min: {minWords} | Max: {maxWords} | Target Reading Time:{" "}
        {targetReadingTime}
      </p>
    </div>
  );
}

export default CharacterCounter;
