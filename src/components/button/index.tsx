import Button from '@mui/material/Button'

type Props = {
  label: string,
  onClick?: () => void,
  disabled?: boolean,
  type?: string,
}

export default function PrimaryButton({onClick, label, type, disabled}: Props) {
  return (
    <Button 
      variant="text"
      className='primary-button-component'
      style={{backgroundColor: disabled ? '#EBAC6E' : '#EB7C0F'}}
      onClick={onClick}
      type='submit'
      disabled={disabled}
    >
      {label}
    </Button>
  )
}