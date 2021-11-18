import React, {useState} from "react";
import {useDispatch} from "react-redux";
import PageHeader from "./PageHeader";
import {Button, FormControl, FormLabel, Input, Text, useToast} from "@chakra-ui/react";
import bookSlice from "../reducers/bookSlice";

const AddNewBook = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [bookInfo, setBookInfo] = useState({title: "", author: ""});
  const handleChange = (value, type) => {
    setBookInfo({...bookInfo, [type]: value});
  };

  return (
    <div className="add-new-book">
      <PageHeader/>
      <FormControl id="new-book" isRequired>
        <Text fontSize="xl">Add Book</Text>
        <FormLabel>Title</FormLabel>
        <Input type="text" isRequired placeholder="The lord of the rings"
               value={bookInfo.title}
               onChange={(event) => handleChange(event.target.value, "title")}
        />
        <FormLabel>Author</FormLabel>
        <Input type="text" placeholder="J.R.R Tolkien"
               value={bookInfo.author}
               onChange={(event) => handleChange(event.target.value, "author")}/>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          onClick={() => {
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
          }}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default AddNewBook;
