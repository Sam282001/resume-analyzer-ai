import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeStyle: string;
  let text: string;

  if (score > 70) {
    badgeStyle = "bg-badge-green text-badge-green-text";
    text = "Strong";
  } else if (score > 50) {
    badgeStyle = "bg-badge-yellow text-badge-yellow-text";
    text = "Good";
  } else {
    badgeStyle = "bg-badge-red text-badge-red-text";
    text = "Need Work";
  }

  return (
    <div className={`score-badge ${badgeStyle}`}>
      <p>{text}</p>
    </div>
  );
};

export default ScoreBadge;
