import { FooterContainer, VersionText, DevelopedBy } from "./footerStyles";

export const Footer = props => {
     
    return(
        <FooterContainer>
            <VersionText>Version: Alpha 0.2</VersionText>
            <DevelopedBy>Author: Ole Walberg <br/> GitHub: <a href="https://github.com/TheFlyingWhale/pressure-log">Pressure Log</a></DevelopedBy>
        </FooterContainer>
    );
}