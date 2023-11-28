import { Typography, styled } from '@mui/material';

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
  
  '& .search-text': {
    color: '#607d8b',
    
  }
}));

export default function SearchButton() {
  function openSearchModalHandler() {
    console.log('open search');
  }

  return (
    <StyledSearchButton onClick={openSearchModalHandler}>
      <div>
        <Typography color={'#607d8b'} fontWeight={600} variant='subtitle2'>Quick search...</Typography>
        <span className='search-text'></span>
      </div>
      <div></div>
    </StyledSearchButton>
  );
}
