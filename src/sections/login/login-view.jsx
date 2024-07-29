import { useRef, useState } from 'react';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function LoginView() {
  const email = useRef();
  const password = useRef();

  const [error, setError] = useState({ email: '', password: '' });
  const [alert, setAlert] = useState('');

  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    // console.log('Email:', emailValue);
    // console.log('Password:', passwordValue);

    // Reset error messages
    setError({ email: '', password: '' });
    setAlert('');

    if (emailValue === 'admin@admin.com' && passwordValue === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('emailData', emailValue);
      localStorage.setItem('passwordData', passwordValue);
      console.log('Data stored in localStorage');
      router.push('/dashboard');
    } else {
      // Set error messages
      setError({
        email: emailValue !== 'admin@admin.com' ? 'Invalid email' : '',
        password: passwordValue !== 'admin' ? 'Invalid password' : '',
      });
      setAlert('Invalid email or password. Please try again.');
    }
  };

  const renderForm = (
    <>
      {alert && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">{alert}</Alert>
        </Stack>
      )}
      <Stack spacing={3} sx={{ my: 3 }}>
        <TextField
          name="email"
          label="Email address"
          inputRef={email}
          error={Boolean(error.email)}
        />

        <TextField
          name="password"
          label="Password"
          inputRef={password}
          error={Boolean(error.password)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="flex-end" >
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#d32f2f' } }}
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" sx={{ mb: 5 }}>
            Sign in to ASABI
          </Typography>

          {/* <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography> */}

          {/* <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack> */}

          {/* <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider> */}

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
