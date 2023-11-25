import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox, ListItemText } from "@mui/material";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "20vh",
      overflow: "auto",
    },
  },
};

export default function MultiSelectComponent({
  selectedItems = [],
  setSelectedItems,
  items,
  label,
}) {
  const handleChange = (event) => {
    setSelectedItems("breeds", event.target.value);
  };

  return (
    <div>
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
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={selectedItems.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
