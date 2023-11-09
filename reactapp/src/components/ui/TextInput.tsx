import TextField from "@mui/material/TextField";

interface TitleProps {
  labelText: string;
  hasError: boolean;
  setVal: any; 
  getVal: any; 
  number?: boolean;
}

export default function TextInput(props: TitleProps) {
  const { labelText, hasError, getVal, setVal , number} = props;
  function handleChange(val: string){
    getVal(val);
  }

  if (number) {
    return (
      <TextField
        fullWidth
        size="small"
        id="standard-search"
        label={labelText}
        type="search"
        variant="standard"
        value={setVal}
        onChange={(event) => {
            handleChange(event.currentTarget.value)
          }}
          onKeyDown={(event) => {
            if (
              (event.key < "0" || event.key > "9") &&
              event.key !== "Backspace"
            ) {
              event.preventDefault();
            }
          }}
      />
    );
  }

  if (hasError) {
    return (
      <TextField
        fullWidth
        size="small"
        id="standard-search"
        label={labelText}
        type="search"
        variant="standard"
        value={setVal}
        error
        onChange={(event) => {
            handleChange(event.currentTarget.value)
          }}
      />
    );
  }
  return (
    <TextField
      fullWidth
      size="small"
      id="standard-search"
      label={labelText}
      type="search"
      value={setVal}
      variant="standard"
      onChange={(event) => {
        handleChange(event.currentTarget.value)
      }}

    />
  );
}
