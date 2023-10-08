import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


type Props = {
  label: string, 
  required: boolean,
  menuItems?: {
    label: string,
    value: string
  }[],
  handleChange: (item: SelectChangeEvent) => void,
  value: string,
}

export default function Selectfield({label, required, menuItems, handleChange, value}: Props) {

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        required={required}
        value={value}
        label="Districst"
        className='select-field-component'
        sx={{
          '& fieldset': {
            borderRadius: '8px',
            border: '1px solid #E6E8EF',
          },
          '&:hover fieldset': {
            border: '1px solid #ebac6e !important',
          },
          marginBottom: '16px',
          '& input': {
            fontFamily: 'sofia-regular !important',
            textAlign: 'start',
            color: '#2A2F4E',
          },
          '&:focus-within': {
            '& fieldset': {
              border: '1px solid #ebac6e !important',
            },
          },
        }}
        onChange={handleChange}>
          {menuItems?.map((el, id) => {
            return(
              <MenuItem key={id} value={el.value}>{el.label}</MenuItem>
            )
          })}
      </Select>
    </FormControl>
  )
}