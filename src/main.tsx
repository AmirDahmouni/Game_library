import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from "./theme"
import { RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store'
import router from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>

  </React.StrictMode>,
)
