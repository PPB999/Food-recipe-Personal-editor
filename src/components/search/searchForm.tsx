interface SearchFormProps {
  recipeSearch: string;
  setRecipeSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm = (props: SearchFormProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setRecipeSearch(e.target.value);
  };
  return (
    <div className="relative w-full">
      <svg
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="m16 16 4 4" />
      </svg>

      <input
        placeholder="Search"
        value={props.recipeSearch}
        onChange={handleOnChange}
        className="bg-white pl-12 py-3 pr-5 border border-black text-sm text-stone-800 rounded-full focus:border-[#B85C38] focus:ring-[#B85C38]/20 w-full focus:ring-2 shadow-sm outline-none transition-all duration-200 placeholder:text-stone-400 hover:border-stone-400 block"
      />
    </div>
  );
};

export default SearchForm;
