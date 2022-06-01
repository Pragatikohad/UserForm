// import React from 'react'
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// function User() {
//     return(
//       <Paper elevation={2} sx={{padding:'8px'}}>
//         <Grid
//         ml={5}
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '30ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//      <Typography variant="h4">
//          User Management
//       </Typography>
//         <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" />
//         <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" />
//         <TextField id="outlined-basic" label="Email" variant="outlined" size="small" />
//         <TextField id="outlined-basic" label="Contact" variant="outlined" size="small" />
//         <TextField id="outlined-basic" label="Phone" variant="outlined" size="small" />
//         <div>
//         <Button variant="contained">Add User</Button>
//         </div>
//       </Grid>
//       </Paper>
//     );
// }

// export default User;

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TextFieldSizes() {
  return (
  
    <Paper elevation={2} sx={{padding:'8px'}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m:1, width: '45ch'},
      }}
      noValidate
      autoComplete="off"
    >
    <Typography variant="h4" ml={2}>
          User Management
       </Typography>
      <Grid>
        <TextField
          label="First Name"
          id="outlined-size-small"
          size="Normal"
        />
        <TextField label="Last Name" id="outlined-size-normal" />
      </Grid>
      <Grid>
        <TextField
          label="Email"
          id="outlined-size-small"
          size="Normal"
        />
        <TextField label="Contact" id="outlined-size-normal"  />
      </Grid>
         <div>
         <Button variant="contained">Add User</Button>
         </div>
    </Box>
     </Paper>
  );
}