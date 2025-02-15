import { NextPage } from "next";
import Gradient from "./Gradient";

interface Props {
  text: string;
  emoji?: string;
  gradient?: boolean;
}

const Title: NextPage<Props> = ({ text, emoji, gradient }) => {
  return (
    <h1 className="my-8 text-6xl md:text-8xl font-bold leading-normal md:leading-snug">
      {gradient ? <Gradient text={text} /> : <span>{text}</span>} {emoji}
    </h1>
  );
};

export default Title;
