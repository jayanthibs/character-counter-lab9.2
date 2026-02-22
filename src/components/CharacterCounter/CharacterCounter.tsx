import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";

function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps) {
  // State to store the current text input
  const [text, setText] = useState("");

  // Updates state when TextInput changes
  const handleChange = (event: string) => {
    setText(event);
  };

  //filter(Boolean) -It removes falsy values like:  ""  null  undefined

  let words = text.trim().split(/\s+/).filter(Boolean);
  // Count the number of words
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
      {/* Input component where user types text */}
      <TextInput onTextChange={handleChange} />

      {/* Component that displays calculated stats */}
      <StatsDisplay stats={stats} showReadingTime={true} />
      {/* Display optional min/max words and target reading time if all are provided */}
      {minWords && maxWords && targetReadingTime && (
        <p>
          Min: {minWords} | Max: {maxWords} | Target Reading Time:{" "}
          {targetReadingTime}
        </p>
      )}
    </div>
  );
}

export default CharacterCounter;
