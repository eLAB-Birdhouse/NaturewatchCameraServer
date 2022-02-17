import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
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
                My Nature Watch
            </h1>
            <Container>
                <Row>
                    <Heading>Project information</Heading>
                </Row>
                <Row>
                    <Column>
                        <FooterLink href="#">Version date</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Commit hash</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Project</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
