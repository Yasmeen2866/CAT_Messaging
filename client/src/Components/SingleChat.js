import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getSender } from "../config/ChatLogics";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const {user,selectedChat,setSelectedChat} = ChatState();

    return (
      <>
        {selectedChat ? (
          <>
            <Text
              fontSize={{ base:"26px", md: "38px"}}
              pb={3}
              px={3}
              w="100%"
              fontFamily="Helvetica"
              alignItems="center"
              d="flex"
              justifyContent="space-between"
            >
            
              <IconButton
              d={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
              mr={5}
              />
              
                {!selectedChat.isGroupChat ? (
                  <>
                    {getSender(user, selectedChat.users )}
                
                  </>
                ) : (
                  <>
                    {selectedChat.chatName.toUpperCase()}
                    <UpdateGroupChatModal
                      fetchAgain={fetchAgain}
                      setFetchAgain={setFetchAgain}
                    />
                  </>
                  
                )} 
              </Text>
              <Box
                d="flex"
                flexDir="column"
                justifyContent="flex-end"
                p={3}
                bg="#E8E8E8"
                w="100%"
                h="100%"
                borderRadius="lg"
                overflowY="hidden"
              >
              </Box>

          </>
        ) : (
          <Box display="flex" alignItems="center" justifyContent="center" h="100%">
            <Text fontSize="3xl" pb={3} fontFamily="Helvetica">
              Click on a user to start chatting
            </Text>
          </Box>
        )}
      </>
    );
};

export default SingleChat;