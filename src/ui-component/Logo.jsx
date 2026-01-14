// material-ui
import { useTheme } from '@mui/material/styles';

// project imports

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function Logo() {
  const theme = useTheme();

  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="24"
        fontSize="22"
        fontWeight="bold"
        fontFamily="Inter, sans-serif"
        fill={theme.vars.palette.primary.main}
      >
        Bedirhan
      </text>
    </svg>
  );
}
