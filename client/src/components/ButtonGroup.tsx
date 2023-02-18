import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { ButtonProps } from './types'

interface ButtonGroupProps {
  leftButtonProps: ButtonProps
  rightButtonProps: ButtonProps
  extraButtonProps?: ButtonProps
  leftButtonDisabled?: boolean
  rightButtonDisabled?: boolean
  extraButtonDisabled?: boolean
}

export default function ButtonGroup({
  leftButtonProps,
  rightButtonProps,
  extraButtonProps,
  leftButtonDisabled = false,
  rightButtonDisabled = false,
  extraButtonDisabled = false,
}: ButtonGroupProps) {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}
    >
      <Button
        disabled={leftButtonDisabled}
        onClick={leftButtonProps.action}
        color={leftButtonProps.color}
        sx={{ mt: 3, ml: 1 }}
      >
        {leftButtonProps.text}
      </Button>
      <Button
        variant="contained"
        disabled={rightButtonDisabled}
        onClick={rightButtonProps.action}
        color={rightButtonProps.color}
        sx={{ mt: 3, ml: 1 }}
      >
        {rightButtonProps.text}
      </Button>
      {extraButtonProps && (
        <Button
          variant="contained"
          disabled={extraButtonDisabled}
          onClick={extraButtonProps.action}
          color={extraButtonProps.color}
          sx={{ mt: 3, ml: 1 }}
        >
          {extraButtonProps?.text}
        </Button>
      )}
    </Box>
  )
}
