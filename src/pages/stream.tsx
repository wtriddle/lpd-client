/* Main Streaming Page recieving InCapture Car stream from GraphQL */
import { Button, Center, Grid, GridItem, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'urql'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Container } from '../components/Container'
import moment from 'moment'
import Link from 'next/link'
import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react"


const CarsStream = `
query Car_stream {
    car_stream {
      cars {
        id
        lp
        car_model
        createdAt
        car_color
        updatedAt
        location
        state
        name
        inCapture
      }
    }
}
`
const Stream:  React.FC = ({}) => {
    const [version, setVersion] = useState("");
    /* GraphQL Cars Stream Fetch */
    useEffect(() => {
        fetch("https://lpd.mosaicsensed.com/version")
        .then(response => response.json())
        .then(data => setVersion(data.version))
    },[]);
    const [{data, fetching, error}, reExecQuery] = useQuery({
        query: CarsStream
    });
    if (fetching) return <div>loading...</div>;
    if (error) return <div>There was an error...</div>;
    if (!fetching) console.log(data);
    let car_index = 0;
    const {car_stream} = data;
    let moment_repr: any;
    if(car_stream.cars == []) {
        /* Updated Time Conversion & Display */
        const time = car_stream.cars[0].updatedAt;
        const time_number = +time;
        moment_repr = moment(time_number).format('MMMM Do YYYY h:mm:ss a');
    }
    else {
        moment_repr = moment().format('MMMM Do YYYY h:mm:ss a');
    }

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dsqw5kd59'
        },
    });

    const myImage = cld.image('stream/latest').setVersion(version);

    return (
        <Container sx={{height:"100vh"}}>
            <Container sx={{display: "flex", flexDirection: "row"}}>
                <Link href={"/"}><Button size="lg" sx={{m:2.5}}>Home</Button></Link>
                <Link href="https://github.com/wtriddle/lpd-server"><Button size="lg" sx={{m:2.5}}>View API Repository</Button></Link>
            </Container>
            <DarkModeSwitch/>
            <Text fontSize='6xl'>Streaming Page</Text>
            <Text fontSize="xl">{moment_repr}</Text>
            <Container sx={{m:5}}>
                 <AdvancedImage cldImg={myImage} />
            </Container>
            {car_stream?.cars.length == 0 ? <Container sx={{pb:100}}>There are no cars in the stream</Container> : 
                <Center>
                    <Grid
                      templateColumns='repeat(3, 1fr)'
                      rowGap='20px'
                      columnGap='40px'
                      alignItems="center"
                      justify="center"
                    >
                    {car_stream.cars.map((car) => {
                    car_index+=1;
                    return(<GridItem key={car.lp}>
                            <Text>{car_index} License Plate Number: {car.lp}</Text>
                            <Table variant='simple'>
                            <Thead>
                                <Tr>
                                <Th>Field</Th>
                                <Th>Data</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Name</Td>
                                    <Td>{car.name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Model</Td>
                                    <Td>{car.car_model}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Color</Td>
                                    <Td>{car.car_color}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Location</Td>
                                    <Td>{car.location}</Td>
                                </Tr>
                                <Tr>
                                    <Td>State</Td>
                                    <Td>{car.state}</Td>
                                </Tr>
                            </Tbody>
                            </Table>

                    </GridItem>)})}
                    </Grid>
                </Center>
            }
                
    </Container>
    );
}


export default Stream;