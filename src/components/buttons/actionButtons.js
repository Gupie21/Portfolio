import React from "react";
import Button from '@mui/material/Button';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function PrimaryActionBtn(props){
    return <Button size="large" variant="contained" href={props.src}>{props.text}</Button>;
}

function CTABtn(props){
    return <Button size="large" variant="outlined" href={props.src}  target="_blank" download><ArrowBackIosOutlinedIcon/> {props.text} <ArrowForwardIosOutlinedIcon/></Button>;
}

export {PrimaryActionBtn, CTABtn};