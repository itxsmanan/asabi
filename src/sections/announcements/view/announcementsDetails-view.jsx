import { useState } from 'react';

import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import { Stack, Button, TextField, Typography } from '@mui/material';

export default function AnnouncementsPage() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Text:', text);
    // Perform form submission logic here
  };
  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Send Announcement</Typography>
      </Stack>
      <Box
        width={500}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 2,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          boxShadow: 1,
          bgcolor: 'background.paper',
        }}
      >
        <TextField
          label="Type your"
          multiline
          rows={7}
          variant="outlined"
          value={text}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#d32f2f' } }}
          ssx={{ mt: 2 }}
        >
          Send
        </Button>
      </Box>
    </div>
  );
}
