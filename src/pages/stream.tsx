/* Main Streaming Page recieving InCapture Car stream from GraphQL */
import { Box, Button, Center, Grid, GridItem, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'urql'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Image } from 'cloudinary-react'
import { Container } from '../components/Container'
import moment from 'moment'
import {MomentFormatSpecification} from 'moment'
import Link from 'next/link'

const CarsQuery = `
query Find_Car($lp: String!) {
    find_car(lp: $lp) {
      lp
      car_model
      car_color
      createdAt
      updatedAt
      location
      name
      state
    }
  }
`


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

    /* GraphQL Cars Stream Fetch */
    const [{data, fetching, error}, reExecQuery] = useQuery({
        query: CarsStream
    });
    if (fetching) return <div>loading...</div>;
    if (error) return <div>There was an error...</div>;
    if (!fetching) console.log(data);
    let car_index = 0;
    const {car_stream} = data;
    
    /* Updated Time Conversion & Display */
    const time = car_stream.cars[0].updatedAt;
    const time_number: number = +time;
    const corrected_time = new Date(time_number).toLocaleString();
    const moment_repr = moment(time_number).format('MMMM Do YYYY h:mm:ss a');
    
    return (
        <Container>
            <Link href={"/"}><Button>Home</Button></Link>
            <DarkModeSwitch/>
            <Text fontSize='6xl'>Streaming Page</Text>
            <div>{moment_repr}
            </div>
            <div>
                <Image
                    publicId={"stream/latest.jpg"}
                    width="400"
                    height="400"
                    radius="20"
                />
            </div>
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
                
    </Container>
    );
}


export default Stream;