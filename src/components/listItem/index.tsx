interface InputTaskProps {
  inputClass: string;
  value: string;
  status?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>)=>  void;
}

export const InputTask: React.FC<InputTaskProps> = ({
  inputClass,
  value,
  onChange,
  onKeyDown,
  status,
}) => {
  return (
    <input
      type="text"
      className={`w-[400px] h-[40px] ${inputClass} pl-2 ${status}`}
      autoFocus
      placeholder="New Task"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
