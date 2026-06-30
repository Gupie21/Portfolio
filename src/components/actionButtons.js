import React from "react";
import Button from '@mui/material/Button';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function PrimaryActionBtn(props){
    return <Button size="large" variant="contained" href={props.src} sx={{ textTransform: 'none' }}>{props.text}</Button>;
}

function CTABtn(props){
    return (
        <Button
            size="large"
            variant="outlined"
            href={props.src}
            target={props.download ? undefined : "_blank"}
            rel={props.download ? undefined : "noreferrer"}
            sx={{ borderWidth: 3, textTransform: 'none' }}
            download={props.download}
            aria-label={props.ariaLabel || props.text}
        >
            <ArrowBackIosOutlinedIcon/> {props.text} <ArrowForwardIosOutlinedIcon/>
        </Button>
    );
}

export {PrimaryActionBtn, CTABtn};