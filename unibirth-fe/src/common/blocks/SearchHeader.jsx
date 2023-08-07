import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigation } from "../../hooks/useNavigation";
import { SEARTCH_LIST } from "../../constants/constants";

const SearchHeader = ({ buttons, category, setCategory, query, setQuery }) => {
  const { navigateToSearchCommon } = useNavigation();

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", query);
    console.log("카테고리:", category);
    navigateToSearchCommon(query, category);
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      {buttons &&
        buttons.map((button, index) => {
          const ButtonComponent = button.component;
          return (
            <ButtonComponent
              key={index}
              className="font-TAEBAEKmilkyway"
              value={button.value}
              onClick={button.onClick}
              icon={button.icon}
            />
          );
        })}
      <input
        className="font-TAEBAEKmilkyway"
        type="text"
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={handleSearchInputChange}
      />
      <div className="flex flex-col items-center justify-center rounded-lg border-double font-TAEBAEKmilkyway">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {SEARTCH_LIST.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button className="font-TAEBAEKmilkyway" onClick={handleSearch}>
        <BiSearchAlt />
      </button>
    </div>
  );
};

export default SearchHeader;
