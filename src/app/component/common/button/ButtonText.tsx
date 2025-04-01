import React from "react";

interface ButtonTextInterface {
  name: string;
  type?: "button" | "submit" | "reset"; 
  onClick: () => void;
}

const ButtonText: React.FC<ButtonTextInterface> = ({ name, onClick, type = "button" }) => {
  return (
    <button
      className="btn-gradient  text-white font-medium py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  );
};

export default ButtonText;
