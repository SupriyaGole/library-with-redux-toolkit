import React, {useState} from "react";
import PageHeader from "./PageHeader";
import {FormControl, FormLabel, Input, Text, Button} from "@chakra-ui/react";

const AddNewBook = () => {
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
               onChange={(event) => handleChange(event.target.value, "title")}
        />
        <FormLabel>Author</FormLabel>
        <Input type="text" placeholder="J.R.R Tolkien"
               onChange={(event) => handleChange(event.target.value, "author")}/>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default AddNewBook;
