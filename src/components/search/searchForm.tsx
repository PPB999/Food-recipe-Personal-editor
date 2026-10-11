interface SearchFormProps {
  recipeSearch: string;
  setRecipeSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm = (props: SearchFormProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setRecipeSearch(e.target.value);
  };
  return (
    <div>
      <input
        value={props.recipeSearch}
        onChange={handleOnChange}
        className="p-2.5  border border-black  text-sm rounded-lg focus:ring-[#375EAA] block w-50"
      />
    </div>
  );
};

export default SearchForm;
