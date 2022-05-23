import React, { Component } from 'react';
import { Box, TextField, Grid, Button } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from "../config";
const BASEPATH = config.BASEPATH;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"", password:""
        };
    }

    componentDidMount = () => {
        
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        }); 
    };

    userSignin = async (e) => {
        e.preventDefault();
    
        const { email, password } = this.state;
    
        const userData = { email, password };
        
        axios.post(`${BASEPATH}/user/login`, userData)
        .then((res) => {
            if(res.data.code === 0) {
                toast.success(res.data.message, {
                    toastId: "toastAvoidsDuplicates",
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                this.setState({
                    email:"", password:""
                });    
                this.props.history.push("/VehicleForm");            
            } else if(res.data.code === -1) {
                toast.error(res.data.error, {
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
      };

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
                                    <TextField label="Email" variant="standard" className='formInput' name="email" id="email" value={this.state.email} required="required" autoComplete="off" onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField label="Password" variant="standard" className='formInput' name="password" id="password" value={this.state.password} required="required" autoComplete="off" onChange={this.handleChange} />
                                </Grid>

                                <div className='buttonDiv' onClick={this.userSignin}>
                                    <Button variant="contained">Login</Button>
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

export default Login;