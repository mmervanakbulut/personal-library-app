import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const MyBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await ApiService.get("/Book");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "burlywood" }}>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Page Number</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Publisher</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.description}</TableCell>
                <TableCell>{book.pageNumber}</TableCell>
                <TableCell>
                  {book.authorsName} {book.authorsSurname}
                </TableCell>
                <TableCell>{book.publisherName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MyBooks;
