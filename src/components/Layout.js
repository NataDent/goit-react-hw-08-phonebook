import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';
import { Box, Text } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box
      py={2}
      // bgGradient="
      // linear(to-r,
      //   rgba(254, 215, 226, 0.7),
      //   rgba(82, 27, 65, 0.7)
      // )"

      // bgImage="url('/src/images/bokeh-2072271_1280.jpg')"
      // bgPosition="center"
      // bgRepeat="no-repeat"
      // bgSize="cover"
    >
      <Header />
      <Suspense fallback={<Text color="brand.900">Loading...</Text>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
