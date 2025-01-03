import {
  Text,
  Flex,
  VStack,
  Box,
  Heading,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { get_user_profile_data } from "../api/endpoints";

import { SERVER_URL } from "../constants/constants";
function UserProfile() {
  const get_username_from_url = () => {
    const url_split = window.location.pathname.split("/");
    // return url_split(url_split.length - 1);
    return url_split[url_split.length - 1];
  };

  const [username, setUsername] = useState(get_username_from_url());

  useEffect(() => {
    setUsername(get_username_from_url());
  }, []);
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <VStack w="75%" mt="40px">
          <Box>
            <UserDetails username={username} />
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

const UserDetails = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get_user_profile_data(username);
        console.log(data);
        setBio(data.bio);
        setProfileImage(data.profile_image);
        setFollowersCount(data.follower_count);
        setFollowingCount(data.following_count);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <VStack alignItems="start" w="100%" gap="40px">
      <Heading>@{username}</Heading>
      <HStack gap="20px">
        <Box
          boxSize="150px"
          border="2px solid"
          borderColor="gray.700"
          bg="white"
          borderRadius="full"
        >
          <Image
            // src="http://127.0.0.1:8000/api/media/profile_image/spiderman.jpg"
            src={loading ? "" : `${SERVER_URL}${profileImage}`}
            boxSize="100%"
            objectFit="cover"
          ></Image>
        </Box>
        <VStack gap="20px">
          <HStack gap="20px" fontSize="18px">
            <VStack>
              <Text>Followers</Text>
              <Text>{loading ? "-" : followersCount}</Text>
            </VStack>
            <VStack>
              <Text>Following</Text>
              <Text>{loading ? "-" : followingCount}</Text>
            </VStack>
          </HStack>
          <Button w="100%">Edit Profile</Button>
        </VStack>
      </HStack>
      <Text fontSize="18px">{loading ? "-" : bio}</Text>
    </VStack>
  );
};

export default UserProfile;
