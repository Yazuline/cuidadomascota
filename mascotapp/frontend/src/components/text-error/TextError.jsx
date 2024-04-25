import React from "react";
import { TextRed } from "./TextErrorStyled";

const TextError = ({ children, block }) => {
  return (
    <TextRed $block={block} className="w-fit">
      {children}
    </TextRed>
  );
};

export default TextError;
