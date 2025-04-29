import React from "react";
import "./card.css";

export interface CardProps {
  title: string;
  content: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}

export const Card = ({
  title,
  content,
  backgroundColor = "#fff",
  size = "medium",
  ...props
}: CardProps) => {
  return (
    <div
      className={["card", `card--${size}`].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};
