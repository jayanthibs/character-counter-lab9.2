// components/TextInput/TextInput.tsx
import React from "react";
import type { TextInputProps } from "../../types";

// Function to send text to parent
// Placeholder text
// Initial text value
const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing your content here...",
  initialValue = "",
}) => {
  return (
    <div className="common-align">
      <textarea
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};

export default TextInput;
