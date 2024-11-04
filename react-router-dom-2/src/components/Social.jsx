import React from "react";
import { useParams } from "react-router-dom";

const Social = () => {
  const { social } = useParams();

  return <div> {social} Contact</div>;
};

export default Social;
