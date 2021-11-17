import React from "react";
import {useSelector} from "react-redux";
import {SimpleGrid, Box, Text} from "@chakra-ui/react";

const BookList = () => {
  const {books} = useSelector((state) => state.book);
  return (<SimpleGrid
    h="100px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={10}
    p={10}
  >
    {books.map(book =>
      <Box p="5" boxShadow="xl" rounded="md" bg="lightgray" color="black" key={book.title}>
        <Text fontSize="xl">{book.title}</Text>
        <Text fontSize="l">{book.author}</Text>
      </Box>)
    }
  </SimpleGrid>)
};

export default BookList;
