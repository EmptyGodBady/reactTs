import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children?: ReactNode;
  buttonWidth: number;
};
export const MyButton = ({ onClick, buttonWidth, children }: Props) => {
  return (
    <button
      type="submit"
      className={`ml-[24px] border rounded-lg w-[${buttonWidth}px] h-[40px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};