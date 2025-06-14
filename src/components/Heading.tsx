import React from "react";

type HeadingProps = {
  className?: string;
  title: string;
  text: string;
  tag: string;
};

const Heading: React.FC<HeadingProps> = ({ className, title, text, tag }) => {
  return (
    <div className={className}>
      <span className="text-sm font-bold uppercase tracking-widest text-primary">
        {tag}
      </span>
      <h2 className="text-4xl font-bold text-white mt-2">{title}</h2>
      <p className="text-lg text-gray-400 mt-4">{text}</p>
    </div>
  );
};

export default Heading;
