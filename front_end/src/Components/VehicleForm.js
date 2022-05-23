import React, { Component } from 'react';
import { Box, TextField, Grid, Button } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropzone from 'react-dropzone';

class VehicleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"", name:"", phonerNumber:"", picturesURLs:"", picture:""
        };
    }

    componentDidMount = () => {
        
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        }); 
    };

    VehicleData = async (e) => {
        e.preventDefault();
    
        const { email, name, phonerNumber, picture } = this.state;
    
        const data = { email, name, phonerNumber, picture };

        const isValid = this.validate();

        if(isValid){
            axios.post(`https://hook.us1.make.com/vbv61km18q7d3k7fps1psrg3qyr3643p`, data)
            .then((res) => {
                console.log("response: ", res);
                if(res.status === 200){
                    toast.success("Data Submit", {
                        toastId: "toastAvoidsDuplicates",
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
              .catch(err => {
                  console.log(err);
              });
        }
        
      };

      validate =() =>{
        let userName = this.state.name;
        let userPhonerNumber = this.state.phonerNumber;

        if(!this.state.name || userName.length < 3){
            toast.error("Invalid Name", {
                toastId: "toastAvoidsDuplicates",
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        } else if(!this.state.phonerNumber || userPhonerNumber.length < 11 || userPhonerNumber.length > 11) {
            toast.error("Invalid Phone Number", {
                toastId: "toastAvoidsDuplicates",
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        } else {
            return true;
        }

     }

     onDrop = (acceptedFiles) => {
        if(acceptedFiles){
          let file = acceptedFiles[0];
          let url = URL.createObjectURL(file)
  
        this.setState({picture: url, picturesURLs: file});
  
        }
      }

    render() {
        return (
            <>
                <div className='mainDiv'>
                    <div className='innerDiv'>
                        <Box
                            component="form"
                            autoComplete="off"
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField label="Name" variant="standard" className='formInput' name="name" id="name" value={this.state.name} required="required" autoComplete="off" onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField label="Email" variant="standard" className='formInput' name="email" id="email" value={this.state.email} required="required" autoComplete="off" onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField label="Phone Number" variant="standard" className='formInput' name="phonerNumber" id="phonerNumber" value={this.state.phonerNumber} required="required" autoComplete="off" onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Dropzone onDrop={this.onDrop} accept="image/png, image/jpeg" minSize={0}>
                                        {({getRootProps, getInputProps}) => {
                                        return (
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} style={{borderBottom:"1px solid grey", marginTop:"20px"}} />
                                                {this.state.picture !== '' ?
                                                    <>
                                                        <div>
                                                            <img id="picture" name="picture" src={this.state.picture} alt="Image" style={{width:"250px"}} />
                                                        </div>
                                                    </>
                                                    :
                                                    <span style={{color:"lightgray"}}>
                                                        Select Image
                                                    </span>
                                                }
                                            </div>
                                        )}
                                        }
                                    </Dropzone>
                                </Grid>

                                <div className='buttonDiv' onClick={this.VehicleData}>
                                    <Button variant="contained">Submit</Button>
                                </div>
                            </Grid>
                        </Box>
                    </div>
                </div>

                <ToastContainer transition={Zoom} />
            </>
        );
    }
}

export default VehicleForm;