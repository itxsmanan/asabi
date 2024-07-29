// import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

// import Logo from 'src/components/logo';
// import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function NewService() {
  const theme = useTheme();

  const router = useRouter();

  // const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push('/services');
  };

  const renderForm = (
    <div>
      <Stack spacing={3} sx={{ my: 3 }}>
        <TextField name="title" label="Title" />

        <TextField name="type" label="Service Type" />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#d32f2f' } }}
        onClick={handleClick}
      >
        Add Service
      </LoadingButton>
    </div>
  );

  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">New Services</Typography>
      </Stack>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
          }),
          height: 1,
        }}
      >
        <Stack sx={{ height: 1 }}>
          <Card
            sx={{
              p: 2,
              width: 1,
              maxWidth: 500,
            }}
          >
            {renderForm}
          </Card>
        </Stack>
      </Box>
    </div>
  );
}
