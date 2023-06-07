import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Stack, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  //   updateDoc,
  //   doc,
  // deleteDoc,
} from "firebase/firestore";

import { useCallback, useEffect } from "react";
import { DataContext } from "../../store/list-context";
import { useContext } from "react";
import Swal from "sweetalert2";
const options = [
  {
    value: "Laptop",
    label: "Laptop",
  },
  {
    value: "Mobile",
    label: "Mobile",
  },
  {
    value: "Accessories",
    label: "Accesssories",
  },
  {
    value: "Food",
    label: "Food",
  },
];

const AddForm = (props) => {
  // useContext for data
  const { setRowsList } = useContext(DataContext);

  //   console.log(setRowsList);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const emptyCollectionRef = collection(db, "products");

  const getData = useCallback(async () => {
    const data = await getDocs(emptyCollectionRef);
    setRowsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [emptyCollectionRef, setRowsList]);

  useEffect(() => {
    getData();
  }, [getData]);

  const submitHandler = async (e) => {
    e.preventDefault();

    await addDoc(emptyCollectionRef, {
      name: name,
      price: price,
      category: category,
      date: String(new Date()),
    });
    setName("");
    setPrice("");
    setCategory("");
    props.onClose(true); // now closing modal
    getData();

    Swal.fire("Successfully", "Product Added Successfully", "success");
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textAlign: "center",
        }}
      >
        Add Products
      </Typography>
      <Grid
        container
        rowGap={2}
        columnGap={2}
        sx={{
          marginTop: "1rem",
        }}
      >
        <Grid item xs={12}>
          <TextField
            label="Name"
            size="small"
            required
            sx={{
              width: "100%",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Price"
            type="number"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs</InputAdornment>
              ),
            }}
            required
            sx={{
              width: "100%",
            }}
            min={0}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Category"
            size="small"
            required
            sx={{
              width: "100%",
            }}
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button variant="contained" onClick={submitHandler}>
            Add product
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default AddForm;
