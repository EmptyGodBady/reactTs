interface  serachInterface {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const MySearching: React.FC<serachInterface> = ({
    onChange
  }) => {
    return(
        <input onChange={onChange} type="text" placeholder="Search" className=" placeholder-white text-white pl-2 w-[548px] h-[45px] bg-[#62676e] border rounded-lg mb-[200px] mt-8"/>
    )
}