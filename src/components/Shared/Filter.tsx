// src/components/Filter.tsx
import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface FilterProps {
  setColorFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ setColorFilter }) => {
  const handleChange = (value: string) => {
    setColorFilter(value);
  };

  return (
    <Select
      placeholder="Filter by Color"
      onChange={handleChange}
      style={{ marginBottom: 20, width: 200 }}
    >
      <Option value="">All Colors</Option>
      <Option value="Black">Black</Option>
      <Option value="Stone">Stone</Option>
      <Option value="Red">Red</Option>
      {/* Add other colors as needed */}
    </Select>
  );
};

export default Filter;
