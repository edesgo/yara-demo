import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface selectItems {
  text: string;
  value: number | string;
}
interface SelectProps {
  labelText: string;
  hasError: boolean;
  selectItems: selectItems[];
  getVal: any; 
  setVal: any; 
}

export default function SelectInput(props: SelectProps) {
  const { labelText, hasError, selectItems, getVal, setVal } = props;
  const handleChange = (event: SelectChangeEvent) => {
    getVal(event.target.value);
  };

  if (hasError) {
    return (
      <FormControl fullWidth size="small" error>
        <InputLabel>{labelText}</InputLabel>
        <Select value={setVal} label={labelText} onChange={handleChange}>
          {selectItems.map((item) => (
            <MenuItem value={item.value}>{item.text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  return (
    <FormControl fullWidth variant="standard" size="small">
      <InputLabel>{labelText}</InputLabel>
      <Select value={setVal} label={labelText} onChange={handleChange}>
        {selectItems.map((item,index) => (
          <MenuItem key={index}value={item.value}>{item.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
