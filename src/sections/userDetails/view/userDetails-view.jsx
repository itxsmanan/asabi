import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function UserDetails() {
  const details = [
    { lable: 'Address1' },
    { lable: 'Address2' },
    { lable: 'Country' },
    { lable: 'Postal Code' },
    { lable: 'Vehicle' },
    { lable: 'Required Services' },
    // { lable: 'Provisional Licence No' },
    // { lable: 'Theory Passed(Yes,No)' },
    // { lable: 'Current Driving Experince' },
  ];

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Services Provider Details</Typography>
      </Stack>
      <Card variant="outlined" sx={{ maxWidth: 660 }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h6" component="div">
              Name
            </Typography>
            {/* <Typography gutterBottom variant="h6" component="div">
              w
            </Typography> */}
          </Stack>
          <Typography color="text.secondary" variant="body2">
            Here we will add additional information
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="h6">
            Details
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
            {details.map((items, i) => (
              <Chip label={items.lable} size="small" sx={{ m: 5 }} key={i} />
            ))}
          </Stack>
        </Box>
      </Card>
    </Container>
  );
}
