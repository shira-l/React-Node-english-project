import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const styleOfContactFormElements = {
    color: '#ffffff',
    borderRadius: "25px",
    height: "48px",
    fontSize: "16px",
    fontWeight: "bold"
  }

  const styleOfTextField = {
    "& .MuiInputBase-input": {
      ...styleOfContactFormElements,
      backgroundColor: 'rgba(45, 64, 168, 1)',
      padding: "12px 15px",
      "&::before, &::after": {
        display: "none", // מסיר את הקווים התחלתיים והתחתיים
      },
    },
    "& .MuiInput-underline:before, & .MuiInput-underline:after": {
      display: "none", // מסיר את הקו התחתי
    }
  }

  const { contact, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      massage: '',
    }
  });

  const handleSubmit=()=>{
    
  }
  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      direction: "rtl"
    }}>
      <Typography gutterBottom sx={{}}>
        תמיכה טכנית
      </Typography>
      <Typography gutterBottom sx={{}}>
        תדברו איתנו, לא חייב באנגלית:)
      </Typography>


      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 3,
          width: '620px'
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className='textField'
          defaultValue="שם"
          variant="standard"
          fullWidth
          dec
          sx={styleOfTextField}
          {...contact("name")}
        />
        <TextField
          defaultValue="מייל"
          variant="standard"
          fullWidth
          type="email"
          required
          sx={styleOfTextField}
          {...contact("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'נא להזין אימייל חוקי'
            }
          })}
          helperText={errors.email ? errors.email?.message : ''}
        />
        <TextField
          defaultValue="הודעה"
          variant="standard"
          fullWidth
          multiline
          required
          sx={{
            ...styleOfTextField,
            borderRadius: "25px",
            height: "166px",
            resize: "none",
            overflow: "hidden",
            backgroundColor: 'rgba(45, 64, 168, 1)'
          }}
          {...contact("massage")}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            ...styleOfContactFormElements,
            mt: 2,
            background: "linear-gradient(154.24deg, #A82D7A -7.66%, #082B93 129.98%)"
          }}
        >
          שליחה
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
