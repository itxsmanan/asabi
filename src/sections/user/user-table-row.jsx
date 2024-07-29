import Swal from 'sweetalert2';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useRouter } from 'src/routes/hooks';

// import Label from 'src/components/label';
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
  // company,
  // role,
  // isVerified,
  // status,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const router = useRouter();

  const handleDetails = (i) => {
    router.push(`/servicesProviderDetails/${i}`);
    console.log('id:', i);
  };
  const router2 = useRouter();

  const handleSubContractors = (i) => {
    router2.push('/subContractorsView');
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  const [isVerified, setIsVerified] = useState(false);

  // Function to simulate verification

  const handleVerify = () => {
    // Simulate verification logic here

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, verify it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const verificationStatus = true; // Change this to your verification logic
        setIsVerified(verificationStatus);
        Swal.fire({
          title: 'Verified!',
          icon: 'success',
        });
      }
    });
  };
  const buttonColor = isVerified ? 'success' : 'error';
  const buttonText = isVerified ? 'Verified' : 'Verify now';

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

        <TableCell align="center">
          <Button
            onClick={handleVerify}
            variant="outlined"
            color={buttonColor} // Use the color prop to set button color
          >
            {buttonText}
          </Button>
        </TableCell>

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
          sx: { width: 180 },
        }}
      >
        {/* <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>{' '} */}
        <MenuItem onClick={() => handleDetails({ id })}>
          <Iconify icon="eva:list-fill" sx={{ mr: 2 }} />
          Details
        </MenuItem>
        <MenuItem onClick={() => handleSubContractors({ id })}>
          <Iconify icon="eva:people-fill" sx={{ mr: 2 }} />
          Sub-Contractors
        </MenuItem>
        {/* <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem> */}
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
  // role: PropTypes.any,
  // selected: PropTypes.any,
  // status: PropTypes.string,
};
