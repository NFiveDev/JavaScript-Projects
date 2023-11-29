import { Typography, styled, Box } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';

const StyledSearchButton = styled('button')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  border: '2px solid',
  borderColor: '#e0e0e0',
  padding: '5px 8px 5px 8px',
  borderRadius: '10px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '1rem',
  marginBottom: '1rem',
  backgroundColor: 'white',
  width: '180px',
  cursor: 'pointer'
}));

export default function SearchButton() {
  function openSearchModalHandler() {
    console.log('open search');
  }

  return (
    <StyledSearchButton onClick={openSearchModalHandler}>
      <Box sx={{ display: 'flex', gap: '0.1rem', alignItems: 'center' }}>
        <SearchRoundedIcon sx={{ color: '#1976d2' }} />
        <Typography
          color={'#bdbdbd'}
          fontWeight={600}
          variant='subtitle2'
        >
          Quick search...
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <KeyboardCommandKeyIcon sx={{ width: 16, color: '#757575' }} />
        <Typography
          color={'#757575'}
          fontWeight={500}
          variant='subtitle2'
        >
          K
        </Typography>
      </Box>
    </StyledSearchButton>
  );
}