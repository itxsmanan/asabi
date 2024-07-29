import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Stack, Container, Typography } from '@mui/material';

import SubcontractorsOne from '../subcontractor 1/subContractorOne-view';
import SubcontractorsTwo from '../subcontractor 2/subContractorTwo-view';

export default function SubcontractorsView() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Sub-Contractors </Typography>
      </Stack>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Sub Contractor 1" value="1" />
              <Tab label="Sub Contractor 2" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SubcontractorsOne />
          </TabPanel>
          <TabPanel value="2">
            <SubcontractorsTwo />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
