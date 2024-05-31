import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step == 4) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      fontSize="18px"
    >
      {step === 1 && (
        <>
          <Typography variant="h6">You're just a few steps ahead!</Typography>
          <Typography>
            Please help us with more information about you!
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            maxWidth="500px"
            marginTop="20px"
          >
            <Typography variant="subtitle1">1. First Name</Typography>
            <TextField
              type="text"
              id="firstName"
              name="firstName"
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
            />
            <Box
              display="flex"
              justifyContent="flex-end"
              width="100%"
              marginTop="20px"
            >
              <Button
                onClick={handleNext}
                size="small"
                sx={{
                  backgroundImage:
                    "linear-gradient(to right, #007bff, #8a2be2)",
                  color: "white",
                }}
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Box>
          </Box>
        </>
      )}
      {step === 2 && (
        <>
          <Typography variant="h6">Woah! Just a few more steps</Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            maxWidth="500px"
            marginTop="20px"
          >
            <Typography variant="subtitle1">2. Last Name</Typography>
            <TextField
              type="text"
              id="lastName"
              name="lastName"
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
            />
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              marginTop="20px"
            >
              <Button
                onClick={handlePrevious}
                variant="outlined"
                color="primary"
              >
                Previous
              </Button>
              <Button onClick={handleNext} variant="contained" color="primary">
                Next
              </Button>
            </Box>
          </Box>
        </>
      )}
      {step === 3 && (
        <>
          <Typography variant="h6">You're almost there!</Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            maxWidth="500px"
            marginTop="20px"
          >
            <Typography variant="subtitle1">3. Current Role</Typography>
            <TextField
              type="text"
              id="currentRole"
              name="currentRole"
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
            />
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              marginTop="20px"
            >
              <Button
                onClick={handlePrevious}
                variant="outlined"
                color="primary"
              >
                Previous
              </Button>
              <Button onClick={handleNext} variant="contained" color="primary">
                Next
              </Button>
            </Box>
          </Box>
        </>
      )}
      {step === 4 && (
        <>
          <Typography variant="h6">You're almost there!</Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            maxWidth="500px"
            marginTop="20px"
          >
            <Typography variant="subtitle1">4. Company Name</Typography>
            <TextField
              type="text"
              id="companyName"
              name="companyName"
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
            />
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              marginTop="20px"
            >
              <Button
                onClick={handlePrevious}
                variant="outlined"
                color="primary"
              >
                Previous
              </Button>
              <Button onClick={handleNext} variant="contained" color="primary">
                Next
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
