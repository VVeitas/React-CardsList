import React from 'react';
import './search-box-styles.css';

type SearchBoxProps = {
  placeholder: string;
  handleChange: any;
};

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  handleChange,
}) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
