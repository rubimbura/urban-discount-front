import TextField from '@mui/material/TextField'


type Props = {
  label: string,
  value: any,
  onChange: any,
  shrink?:boolean,
  required?:boolean,
  type?:string,
}

export default function inputField({label, value, onChange, shrink, required, type}: Props) {
  return (
      <TextField 
        id="outlined-basic" 
        label={label} 
        variant="outlined"
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className='text-input-field-component' 
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
          '&:focus-within fieldset': {
            border: '1px solid #ebac6e !important',
          }
        }}
        InputLabelProps={{
          style: {
            fontSize: '16px',
            color: '#838AA2',
            fontWeight: 400,
          },
          shrink: shrink,
        }}
      />
  )
}