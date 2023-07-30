import React, { useContext, useState } from 'react';
import './DocCard.css';
import { Box, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import {Button} from '@mui/material';
import axios from 'axios';
import Authcontext from '../context/Authcontext';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
  borderRadius:'8px'
};

const textStyle = {
    color:'blue',
    fontFamily:'Montserrat',
    fontWeight:'bold',
    textTransform:'capitalize',
    marginBottom:'20px'
}

function DocCard(props) {

    const [openi, setOpeni] = useState(false);

    const handleClicki = () => {
    setOpeni(true);
    };

    const handleClosei = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpeni(false);
    };

    const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClosei}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let {user} = useContext(Authcontext);

  const [no,setNo] = useState("");
  const [err,setErr] = useState(false);

  const getDoc = async (e) =>{
    e.preventDefault()
    let category = props.title;
    console.log(user)
    try{
        let res = await axios.get(`http://127.0.0.1:8000/${props.title}/${no}/`)
        setErr(false)
        console.log(res.data)
        let image = 'http://127.0.0.1:8000' + res.data.image
        try {
            let response = await fetch(`http://127.0.0.1:8000/issue/`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    "category": category,
                    "username": user,
                    "firstname": res.data.firstname,
                    "lastname": res.data.lastname,
                    "gender": res.data.gender,
                    "card_no": no,
                    "dob": res.data.dob,
                    "image": image
                })
            })
            handleClose();
            handleClicki();
            setNo("");
        } catch (error) {
            // setErr(true)
            console.log(error.message)
        }
    }catch(error){
        setErr(true)
        console.log(error.message)
    }
    
  }
  return (
    <div>
    <div className="doccard" onClick={handleOpen}>
        <Typography variant='h6' id="doccard-title">
            {props.title} Card
        </Typography>
    </div>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
        <Typography variant='h5' sx={textStyle}>Get {props.title} Card</Typography>
        <form action="" onSubmit={getDoc}>
        <label htmlFor="">{props.title} No</label>
            <TextField variant='outlined' type='text' onChange={(e)=>setNo(e.target.value)} value={no} label={props.title}></TextField>
            <Button variant="contained" type='submit' sx={{marginTop:'8px'}}>Get</Button>
        </form>
        {!err?<span></span>:<span style={{color:'red'}}>Card Not Found!</span>}
    </Box>
    </Modal>
    <Snackbar
        open={openi}
        autoHideDuration={6000}
        onClose={handleClosei}
        message="Card added"
        action={action}
      />
    </div>
  )
}

export default DocCard