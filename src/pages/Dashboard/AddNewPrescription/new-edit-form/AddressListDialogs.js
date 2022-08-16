import PropTypes from 'prop-types';
import { Dialog, ListItemButton, Stack, Typography, Button } from '@mui/material';

AddressListDialogs.propTypes = {
  addressOptions: PropTypes.array,
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  open: PropTypes.bool,
  selected: PropTypes.func,
};

export default function AddressListDialogs({ open, selected, onClose, onSelect, addressOptions }) {
  const handleSelect = (address) => {
    onSelect(address);
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
        {addressOptions.map((address) => (
          <ListItemButton
            key={address.id}
            selected={selected(address.id)}
            onClick={() => handleSelect(address)}
            sx={{
              p: 1.5,
              borderRadius: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="subtitle2">{address.name}</Typography>
            <Typography variant="caption" sx={{ color: 'primary.main', my: 0.5, fontWeight: 'fontWeightMedium' }}>
              {address.Email}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {address.address}
            </Typography>
          </ListItemButton>
        ))}
      </Dialog>
  );
}
