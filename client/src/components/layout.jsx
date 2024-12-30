import { VStack, Box } from "@chakra-ui/react";
import Navbar from "./navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <VStack w="100vw" minH="100vh" bg="#FCFCFC">
        <Navbar />
        <Box w="100vw">{children}</Box>
      </VStack>
    </div>
  );
};

export default Layout;
