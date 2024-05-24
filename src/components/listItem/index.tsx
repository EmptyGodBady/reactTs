interface InputTaskProps {
  inputClass: string;
}

export const InputTask: React.FC<InputTaskProps> = ({ inputClass }) => {
  return (
    <input
      type="text"
      className={`w-[400px] h-[40px] ${inputClass} pl-2`}
      autoFocus
      placeholder="New Task"
    />
  );
};
