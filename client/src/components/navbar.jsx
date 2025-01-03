import { Flex, Text, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const nav = useNavigate();

  const handleNavigate = (route) => {
    nav(`/${route}`);
  };
  return (
    <>
      <Flex
        w="100vw"
        h="90px"
        bg="blue.600"
        justifyContent="center"
        alignContent="center"
      >
        {/* <Text>Navbar</Text> */}
        <HStack w="90%" justifyContent="space-between" color="white">
          <Text fontSize="24px" fontWeight="bold">
            SocialHub
          </Text>
          <HStack>
            <Text onClick={(route) => handleNavigate("saiharshith")}>
              <FaUser size="20px" />
            </Text>
          </HStack>
        </HStack>
      </Flex>
    </>
  );
};
export default Navbar;
