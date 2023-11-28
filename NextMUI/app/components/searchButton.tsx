import { styled } from '@mui/material';

const StyledSearchButton = styled('button')({
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px',
  borderColor: '#607d8b',
});

export default function SearchButton() {
  function openSearchModalHandler() {
    console.log('open search');
  }

  return (
    <StyledSearchButton onClick={openSearchModalHandler}>
      <div>
        <span></span>
      </div>
      <div></div>
    </StyledSearchButton>
  );
}
