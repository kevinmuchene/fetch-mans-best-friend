import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox, ListItemText } from "@mui/material";
import React, { useContext } from "react";
import { DogContext } from "../context/DogContext";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "40vh",
      // overflow: "auto",
    },
  },
};

const MultiSelectComponent = React.memo(function MultiSelectComponent({
  selectedItems = [],
  setSelectedItems,
  // items,
  label,
}) {
  const { breedData } = useContext(DogContext);
  // const [breedsData] = useFetchBreeds();
  const handleChange = React.useCallback((event) => {
    setSelectedItems("breeds", event.target.value);
  }, []);

  console.log("Multi-select component");

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
        {breedData.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={selectedItems.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default MultiSelectComponent;
