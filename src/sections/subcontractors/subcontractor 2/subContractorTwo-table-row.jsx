import { useState } from 'react';
import PropTypes from 'prop-types';

// import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  id,
  // selected,
  name,
  sname,
  number,
  email,
  avatarUrl,
  services,
  type,
  // role,
  // isVerified,
  // status,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  // const [isVerified, setIsVerified] = useState(false);

  // // Function to simulate verification
  // const handleVerify = () => {
  //   // Simulate verification logic here
  //   const verificationStatus = true; // Change this to your verification logic
  //   setIsVerified(verificationStatus);
  // };
  // const buttonColor = isVerified ? 'success' : 'error';
  // const buttonText = isVerified ? 'Verified' : 'Verify';

  return (
    <>
      <TableRow hover tabIndex={-1}>
        {/* <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell> */}

        <TableCell component="th" scope="row" sx={{ padding: '2' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{sname}</TableCell>

        <TableCell>{number}</TableCell>
        <TableCell>{email}</TableCell>

        <TableCell align="center">{services}</TableCell>
        {/* <TableCell>
          <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
        </TableCell> */}

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 120 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>{' '}
        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  id: PropTypes.string,
  handleClick: PropTypes.func,
  // isVerified: PropTypes.func,
  name: PropTypes.any,
  sname: PropTypes.any,
  email: PropTypes.any,
  number: PropTypes.any,
  services: PropTypes.any,
  type: PropTypes.any,
  // status: PropTypes.string,
};
