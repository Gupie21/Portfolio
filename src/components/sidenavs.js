import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SidenavRight(props){
    return (
        <div className='sidenav' sidenav-orientation="right">
            <a href="mailto:arturo.miranda.diaz.1995@gmail.com">arturo.miranda.diaz.1995@gmail.com</a>
        </div>
    );
}

function SidenavLeft(){
    return (
        <div className='sidenav' sidenav-orientation="left">
            <ul>
                <li>
                    <a href="https://github.com/gupie21" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <GitHubIcon/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gupie27" aria-label="Instagram" target="_blank" rel="noreferrer">
                        <InstagramIcon/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/arturo-miranda-diaz-542855138" aria-label="Linkedin" target="_blank" rel="noreferrer">
                        <LinkedInIcon/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export {SidenavRight, SidenavLeft};