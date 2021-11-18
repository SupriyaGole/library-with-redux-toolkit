import React, {useState} from "react";
import {useDispatch} from "react-redux";
import PageHeader from "./PageHeader";
import {Button, FormControl, FormLabel, Input, Heading, Flex, Box, useToast} from "@chakra-ui/react";
import bookSlice from "../reducers/bookSlice";

const AddNewBook = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [bookInfo, setBookInfo] = useState({title: "", author: ""});
  const handleChange = (value, type) => {
    setBookInfo({...bookInfo, [type]: value});
  };

  const handleSubmit = () => {
    setBookInfo({title: "", author: ""});
    dispatch(bookSlice.actions.addNewBook({id: new Date().getTime(), ...bookInfo}));
    toast({
      title: "Book Added.",
      description: "Book is been added to the list",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    })
  };

  return (
    <div className="add-new-book">
      <PageHeader/>
      <Flex height="100vh" justifyContent="center" alignItems="center" flexDirection="column">
        <Box width="50%" d="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <FormControl id="new-book" isRequired>
            <Box d="flex" flexDirection="row" justifyContent="space-between" marginBottom="20px">
              <Heading color="white">Add Book</Heading>
            </Box>
            <FormLabel>Title</FormLabel>
            <Input type="text" isRequired placeholder="The lord of the rings"
                   value={bookInfo.title}
                   onChange={(event) => handleChange(event.target.value, "title")}
            />
            <FormLabel mt={4}>Author</FormLabel>
            <Input type="text" placeholder="J.R.R Tolkien"
                   value={bookInfo.author}
                   onChange={(event) => handleChange(event.target.value, "author")}/>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </div>
  );
};

export default AddNewBook;
