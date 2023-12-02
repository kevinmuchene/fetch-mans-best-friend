import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox, ListItemText } from "@mui/material";
import React from "react";
import { FormikErrors } from "formik";
import { TypeIntialValues } from "../common/Interfaces";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "40vh",
    },
  },
};

interface SelectBreedComponentProps {
  selectedItems: string[];
  setSelectedItems: (
    field: string,
    value: any
  ) => Promise<void> | Promise<FormikErrors<TypeIntialValues>>;
  label: string;
  dropDownItems: string[];
}

const MultiSelectComponent: React.FC<SelectBreedComponentProps> = ({
  selectedItems,
  setSelectedItems,
  label,
  dropDownItems,
}) => {
  const handleChange = React.useCallback(
    (event: { target: { value: any } }) => {
      setSelectedItems("breeds", event.target.value);
    },
    []
  );

  return (
    <FormControl sx={{ width: "100%" }} size="medium">
      <InputLabel id="multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="multiple-checkbox-label"
        id="multiple-checkbox"
        multiple
        value={selectedItems}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-checkbox" label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {dropDownItems.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={selectedItems.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelectComponent;
