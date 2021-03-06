import { Button, Grid, Heading, Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import Link from "next/link";
import Image from "next/image"

const Index = () => (
    <Container maxW={"-webkit-max-content"}>
        <Heading size="4xl" sx={{m:12}}>Hardware-Accelerated ALPR Using PYNQ </Heading>
        <Heading mb={6} size="xl">By The FPGA Purists</Heading>
        <Grid            
            h="100%"
            w='80%'
            templateColumns='repeat(2, 1fr)'
            gap={10}
            m={5}
        >
            <Link href="/stream"><Button size="lg" mb={6}>View Demo Page</Button></Link>
            <Link href="https://github.com/wtriddle/lpd-client"><Button size="lg" mb={6}>View Client Repository</Button></Link>
        </Grid>

        <Grid
            h="100%"
            w='90%'
            templateColumns='repeat(2, 1fr)'
            gap={10}
            m={50}
        >
            <Container>
                <Image src="/pynq.jpg" width={700} height={450}></Image>
                <Text fontSize='s'>Figure 1 PYNQ IoT Device</Text>
            </Container>
            
            <Container>
                <Heading size="xl">About the Web App</Heading>
                <Container m={5}>
                    <Heading size="md">Goal</Heading> 
                    <Text textAlign={"center"}>Develop a computer vision connected web service using modern web technologies and an edge point AI</Text>
                </Container>
                <Container m={5}>
                    <Heading size="md">Background</Heading> 
                    <Text textAlign={"center"}>Modern web application development tools and AI technologies have seen an explosion of open-sourced and well documented growth</Text>
                    <Text mt={5} textAlign={"center"}>The techonologies can be connected in a myraid of ways to provide application specific services and experiences to end users</Text>
                    <Text mt={5} textAlign={"center"}>Here, the application focus is on creating a License Plate/Vehicle Identification Computer Vision connected web service for a remotely operational edge point AI on an IoT device in the field</Text>

                </Container>
            </Container>
        </Grid>
        <Grid
            h="100%"
            w='90%'
            templateColumns='repeat(2, 1fr)'
            gap={10}
            m={50}
        >
            <Container>
                <Heading size="xl">Server Design</Heading>

                <Container m={5}>
                    <Text textAlign={"center"}>The server stores registered car metadata and records car users by license plate in a database. <br/> Figure 2 shows the server design with the following technologies: <br/>
                        <Link href="https://expressjs.com/"><Text fontSize={35} _hover={{"textDecoration": "underline", "cursor": "pointer"}}>ExpressJS</Text></Link>
                        <Link href="https://graphql.org"><Text fontSize={35} _hover={{"textDecoration": "underline", "cursor": "pointer"}}>GraphQL</Text></Link>
                        <Link href="https://www.postgresql.org/"><Text fontSize={35} _hover={{"textDecoration": "underline", "cursor": "pointer"}}>PostgreSQL</Text></Link>
                        <Link href="https://mikro-orm.io/"><Text fontSize={35} _hover={{"textDecoration": "underline", "cursor": "pointer"}}>MikroOrm</Text></Link>
                        <div> 
                            The server was developed using excellent web technologies and documentations. <br/> 
                            The server was deployed on a DigitalOcean VPS with Dokku and Docker. <br/> 
                            The overall server design is capable of scaling with more complex vehicle management system requirements. 
                        </div>
                    </Text>
                    <Link href="https://lpd.mosaicsensed.com/graphql"><Button size="lg" m={6}>View API</Button></Link>
                </Container>
            </Container>

            <Container>
                <Image src="/ServerDesign.jpg" width={974} height={540}></Image>
                <Text fontSize='s'>Figure 2 Server Design</Text>
            </Container>
            
        </Grid>
        <Grid
            h="100%"
            w='90%'
            templateColumns='repeat(2, 1fr)'
            gap={10}
            m={50}
        >
            <Container>
                <Image src="/ClientDesign.jpg" width={1069} height={391}></Image>
                <Text fontSize='s'>Figure 3 Client Design</Text>
            </Container>

            <Container>
                <Heading size="xl">Client Design</Heading>

                <Container m={5}>
                    <Text textAlign={"center"}>The client recieves streams of PYNQ identified license plates by fetching in-capture cars from the server API. <br/> Figure 3 shows the Client design with the following technologies: <br/>
                        <Link href="https://cloudinary.com/"><Text fontSize={35} _hover={{"textDecoration": "underline", "cursor": "pointer"}}>Cloudinary</Text></Link>
                        <Link href="https://www.apollographql.com"><Text fontSize={35} _hover={{"textDecoration": "underline", "cursor": "pointer"}}>Apollo</Text></Link>
                        <Link href="https://nextjs.org/"><Text fontSize={35} _hover={{"textDecoration": "underline", "cursor": "pointer"}}>NextJS</Text></Link>
                        <Link href="https://reactjs.org/"><Text fontSize={35} _hover={{"textDecoration": "underline", "cursor": "pointer"}}>ReactJS</Text></Link>
                        <div>
                            The client was developed using the NextJS and ReactJS frameworks. <br/> 
                            The client was deployed on Vercel.  <br/>
                            The overall client design presents streams of data provided by the server and can be scaled alongside the server.  <br/>
                        </div>
                    </Text>
                    <Link href="/stream"><Button size="lg" m={6}>View Demo</Button></Link>
                </Container>
            </Container>
            
        </Grid>
        <Text m={10}>Thank you to the Cal Poly Pomona Electrical and Computer Engineering Department and all faculty for involved!</Text>
    </Container>
);

export default Index