import { Typography, styled, Box } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SysHelper from '@/utility/sysHelper';
import { FC } from 'react';

const StyledSearchButton = styled('button')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  border: '2px solid',
  borderColor: '#e0e0e0',
  padding: '3px 7px 3px 7px',
  borderRadius: '10px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '1rem',
  marginBottom: '1rem',
  backgroundColor: 'white',
  cursor: 'pointer',
  alignItems: 'center',
  background: '#f5f5f5',
  minWidth: '170px'
}));

const SysSpecificCommand: FC = () => {
  const operationSys = SysHelper.GetSys();
  

  if (operationSys != undefined) {
    if (operationSys === 'win') {
      return (
        <>
          <Typography color={'#757575'} fontWeight={500} variant='caption' >
            Ctrl+
          </Typography>
          <Typography color={'#757575'} fontWeight={500} variant='caption'>
            k
          </Typography>
        </>
      );
    }

    if (operationSys === 'mac') {
      return (
        <>
          <KeyboardCommandKeyIcon sx={{ width: 14, color: '#757575' }} />
          <Typography color={'#757575'} fontWeight={500} variant='caption'>
            K
          </Typography>
        </>
      );
    }
  }

  return <div>Cant Detect</div>;
};

export default function SearchButton() {
  function openSearchModalHandler() {
    console.log('open search');
  }

  return (
    <StyledSearchButton onClick={openSearchModalHandler}>
      <Box sx={{ display: 'flex', gap: '0.05rem', alignItems: 'center' }}>
        <SearchRoundedIcon sx={{ width: 20, color: '#1976d2' }} />
        <Typography color={'#78909c'} fontWeight={400} variant='caption'>
          Quick search...
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          paddingRight: '2px',
          paddingLeft: '2px',
          border: '1px solid #9e9e9e',
          borderRadius: '5px',
        }}
      >
        <SysSpecificCommand />
      </Box>
    </StyledSearchButton>
  );
}
