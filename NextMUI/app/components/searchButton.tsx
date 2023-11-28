import { Typography, styled, Box } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const StyledSearchButton = styled('button')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  border: '2px solid',
  borderColor: '#e0e0e0',
  padding: '5px 10px 5px 10px',
  borderRadius: '10px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '1rem',
  marginBottom: '1rem',
  backgroundColor: 'white',
}));

export default function SearchButton() {
  function openSearchModalHandler() {
    console.log('open search');
  }

  return (
    <StyledSearchButton onClick={openSearchModalHandler}>
      <Box sx={{display: 'flex', gap: '0.1rem'}}>
        <SearchRoundedIcon sx={{color: '#1976d2'}} />
        <Typography color={'#607d8b'} fontWeight={600} variant='subtitle2'>Quick search...</Typography>
      </Box>
      <div></div>
    </StyledSearchButton>
  );
}
