import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { createClient, Provider } from 'urql';
import { CloudinaryContext } from "cloudinary-react";

console.log("process.env.API_URL = ", process.env.NEXT_PUBLIC_API_URL);
const client = createClient({
  url: process.env.NEXT_PUBLIC_API_URL as string,
});

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <CloudinaryContext cloudName="dsqw5kd59">
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true
          }}
        >
          <Provider value={client}>
            <Component {...pageProps} />
          </Provider>
        </ColorModeProvider>
      </ChakraProvider>
    </CloudinaryContext>
  )
}

export default MyApp
