interface SearchFormProps {
  handleOnChange: (text: any) => void;
}

const SearchForm = ({ handleOnChange }: SearchFormProps) => {
  return (
    <div>
      <input
        onChange={handleOnChange}
        className="p-2.5  border border-black  text-sm rounded-lg focus:ring-[#375EAA] block w-50"
      />
    </div>
  );
};

export default SearchForm;
