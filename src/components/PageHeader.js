import React from "react";
import {Heading, Button, ButtonGroup, Flex, Spacer} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const PageHeader = () => {
  return (
    <div className="page-header">
      <Flex>
        <Link to="/">
          <Heading as="h1">Library App</Heading>
        </Link>
        <Spacer/>
        <ButtonGroup spacing="2" colorScheme="blue" size="md">
          <Link to="/">
          <Button>List Books</Button>
          </Link>
          <Link to="/add-new-book">
            <Button>Add Book</Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default PageHeader;
