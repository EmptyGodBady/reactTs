import { PropsWithChildren, useState } from "react";

type Props = {
  className?: string;
  onClick?: () => void;
};

export const MyButton = ({
  onClick,
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={`h-[26px] border border-orange-50 w-[100px] bg-zinc-500 rounded-2xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
