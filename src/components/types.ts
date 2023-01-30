export interface ButtonProps {
  text: string
  color?: ButtonColors
  action: () => void
}

export enum ButtonColors {
  ERROR = 'error',
  INHERIT = 'inherit',
  WARNING = 'warning',
  SUCCESS = 'success',
  INFO = 'info',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
