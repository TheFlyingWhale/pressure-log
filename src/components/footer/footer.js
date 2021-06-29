import { FooterContainer, VersionText, DevelopedBy, LeftSideContainer, RightSideContainer, Logo, FooterItem } from "./footerStyles";

import rrlLogo from '../../graphics/rrlLogo.svg';

export const Footer = props => {
     
    return(
        <FooterContainer>
            <FooterItem>
                <LeftSideContainer>
                    <Logo alt="Redline Racing League" src={rrlLogo}/>
                </LeftSideContainer>
                <RightSideContainer>
                    <VersionText>Version: Alpha 0.3.1</VersionText>
                    <DevelopedBy>Author: Ole Walberg <br/> GitHub: <a href="https://github.com/TheFlyingWhale/pressure-log">Pressure Log</a></DevelopedBy>
                </RightSideContainer>
            </FooterItem>
        </FooterContainer>
    );
}