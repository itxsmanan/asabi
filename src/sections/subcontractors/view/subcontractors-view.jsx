import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Card, Stack, Typography } from '@mui/material';

import SubcontractorsOne from '../subcontractor 1/subContractorOne-view';
import SubcontractorsTwo from '../subcontractor 2/subContractorTwo-view';

export default function SubcontractorsView() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Sub-Contractors </Typography>
      </Stack>
      <Card sx={{ width: '100%', padding: 1, typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="ADI" value="1" />
              <Tab label="PDI" value="2" />
            </TabList>
          </Box>
          <TabPanel sx={{ padding: 0 }} value="1">
            <SubcontractorsOne />
          </TabPanel>
          <TabPanel sx={{ padding: 0 }} value="2">
            <SubcontractorsTwo />
          </TabPanel>
        </TabContext>
      </Card>
    </div>
  );
}
