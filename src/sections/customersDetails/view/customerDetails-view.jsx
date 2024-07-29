import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Iconify from 'src/components/iconify';

export default function CustomerDetails() {
  const label = {
    label1: 'Address',
    label2: 'Country',
    label3: 'Postal Code',
    label4: 'Vehicle ',
    label5: 'Required Service ',
  };
  const details = {
    address: '321,velancia town,vectoria',
    country: 'Egypt',
    postalCode: '4570111111',
    vehicle: 'GLI',
    requiredServices: 'PDI Services',
  };

  // { label: 'Provisional Licence No' },
  // { label: 'Theory Passed(Yes,No)' },
  // { label: 'Current Driving Experince' },

  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Customer Details</Typography>
      </Stack>
      <Card variant="outlined" sx={{ maxWidth: 660 }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h6" component="div">
              Jose Englis
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

          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemIcon>
                {' '}
                <Iconify icon="eva:pin-fill" sx={{ mr: 2 }} />
              </ListItemIcon>
              <ListItemText primary={label.label1} />
              <ListItemText primary={details.address} align="center" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                {' '}
                <Iconify icon="mdi:earth" sx={{ mr: 2 }} />
              </ListItemIcon>
              <ListItemText primary={label.label2} />
              <ListItemText align="left" primary={details.country} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                {' '}
                <Iconify icon="mdi:mailbox" sx={{ mr: 2 }} />
              </ListItemIcon>
              <ListItemText primary={label.label3} />
              <ListItemText align="left" primary={details.postalCode} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                {' '}
                <Iconify icon="mdi:car" sx={{ mr: 2 }} />
              </ListItemIcon>
              <ListItemText primary={label.label4} />
              <ListItemText align="left" primary={details.vehicle} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                {' '}
                <Iconify icon="mdi:toolbox" sx={{ mr: 2 }} />
              </ListItemIcon>
              <ListItemText primary={label.label5} />
              <ListItemText align="left" primary={details.requiredServices} sx={{ padding: 0 }} />
            </ListItem>
          </List>
        </Box>
      </Card>
    </div>
  );
}
