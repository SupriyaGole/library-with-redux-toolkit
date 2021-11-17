import React from "react";
import {Heading, Button, ButtonGroup, Flex, Spacer, Divider} from "@chakra-ui/react"

const PageHeader = () => {
  return (
    <div className="page-header">
      <Flex>
        <Heading as="h1">Library App</Heading>
        <Spacer />
        <ButtonGroup spacing="2" colorScheme="blue" size="md">
          <Button>List Books</Button>
          <Button>Add Book</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default PageHeader;
