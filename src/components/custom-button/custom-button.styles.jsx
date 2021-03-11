import styles, { css } from 'styled-components';

const invertedButtonStyles = css`
background-color: white;
color: black;
border: 1px solid black;
position: absolute;
margin-top: 220px;
&:hover {
background-color: black;
color: white;
border: none;
}
`;

const googleSignInStyles = css`
background-color: #4285f4;
color: white;

&:hover {
background-color: #357ae8;
border: none;
}
`;

const buttonStyles = css`
background-color: black;
color: white;
border: none;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styles.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
line-height: 50px;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
margin: 0 5px;
cursor: pointer;
display: flex;
justify-content: center;

${getButtonStyles}
`;