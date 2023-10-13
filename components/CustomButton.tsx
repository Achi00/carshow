"use cleint";

import { CustomBtnProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  hanldeClick,
  btnType,
}: CustomBtnProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={hanldeClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
