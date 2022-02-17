import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    FooterText,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                // color: "green",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                electroLAB - Birdhouse
            </h1>
            <Container>
                <Column>
                    <Row>
                        <Heading>Informations</Heading>
                    </Row>
                    <Row>
                        <Column>
                            <FooterLink href="/api/version/date">Date de version</FooterLink>
                            <FooterText id='version_date'>date</FooterText>
                        </Column>
                        <Column>
                            <FooterLink href="/api/version/redirect_to/commit_url">Commit hash (court)</FooterLink>
                            <FooterText id='version_hash'>hash</FooterText>
                        </Column>
                        <Column>
                            <FooterLink href="/api/version/redirect_to/url">Répertoire du projet</FooterLink>
                        </Column>
                    </Row>
                </Column>
                <Column>
                    <Row>
                        <Heading>Maintenance</Heading>
                    </Row>
                    <Row>
                        <Column>
                            <FooterLink href="/api/reboot">Redémarrer</FooterLink>
                        </Column>
                        <Column>
                            <FooterLink href="/api/shutdown">Éteindre</FooterLink>
                        </Column>
                    </Row>
                </Column>
            </Container>
        </Box>
    );
};
export default Footer;
