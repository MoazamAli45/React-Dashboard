import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Button, Stack, Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  collection,
  getDocs,
  //   addDoc,
  //   updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useContext } from "react";
import DashboardModal from "../shared/modal";
import Skeleton from "@mui/material/Skeleton";
import { DataContext } from "./../../store/list-context";
import { Box } from "@mui/material";

function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { rowsData, setRowsList } = useContext(DataContext);
  // using useContext
  // const [rows, setRows] = useState(rowsData);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  // for edit modal
  const [edit, setEdit] = useState(false);

  // edit Dtaa
  const [editData, setEditData] = useState({});

  const emptyCollectionRef = collection(db, "products");
  // now getting data from firebase
  // wrap this function in useCallback

  const getData = useCallback(async () => {
    const data = await getDocs(emptyCollectionRef);
    setRowsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [emptyCollectionRef, setRowsList]);

  useEffect(() => {
    getData();
  }, []); // I want only one time rerendering so

  // console.log(rowsData);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteProductHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3f51b5",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id); // now this will delete form firebase
      }
    });
  };

  // deletinvg functionn from firebase
  const deleteApi = async (id) => {
    // selecting the document to be deleted
    const userDocument = doc(db, "products", id);
    await deleteDoc(userDocument);
    Swal.fire("Deleted", "Item deleted Successfully", "success");
    // now again fetch Dtaa
    getData();
  };

  // filtering Data
  const filterData = (v) => {
    if (v) {
      console.log(v);
      setRowsList([v]);
    } else {
      console.log("no data");
      getData();
    }
  };

  /// Modal Opening Handler
  const openModalHandler = () => {
    setModalOpen(true);
  };

  const handleModalClose = (close) => {
    setModalOpen(close);
  };

  // for edit modal
  const openEditHandler = () => {
    setEdit(true);
    setModalOpen(true);
  };

  return (
    <>
      {rowsData.length === 0 && (
        <>
          <Paper
            sx={{
              width: {
                xs: "80vw",
                md: "90vw",
              },
              height: {
                xs: "60vh",
                md: "80vh",
              },
              overflow: "hidden",
              padding: "12px",
            }}
          >
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
          </Paper>
        </>
      )}

      {
        //  for add Modal
        !edit && <DashboardModal open={modalOpen} onClose={handleModalClose} />
      }
      {edit && (
        <DashboardModal
          open={modalOpen}
          onClose={handleModalClose}
          edit={true}
          data={editData}
        />
      )}
      {rowsData.length > 0 && (
        <Paper
          sx={{
            maxWidth: {
              xs: "80vw",
              md: "100%",
            },
            overflow: "hidden",
            padding: "12px",
          }}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ padding: "20px" }}
            >
              Products List
            </Typography>
            <Stack direction="row" spacing={2} className="my-2 mb-2 mr-2 ">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={rowsData}
                sx={{ width: 300 }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={(e, v) => filterData(v)} // for searching filter
                getOptionLabel={(rows) => rows.name || ""}
                renderInput={(params) => (
                  <TextField {...params} size="small" label="Search Products" />
                )}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <Button
                variant="contained"
                endIcon={<AddCircleIcon />}
                sx={{
                  marginX: "1rem",
                }}
                onClick={openModalHandler}
              >
                Add
              </Button>
            </Stack>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Category
                  </TableCell>
                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Price
                  </TableCell>

                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          {row.category}
                        </TableCell>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          {row.price}
                        </TableCell>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          {row.date}
                        </TableCell>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          <Stack direction="row" spacing={2}>
                            <EditIcon
                              sx={{
                                fontSize: "1.2rem",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                openEditHandler();
                                setEditData(row);
                              }}
                            />
                            <DeleteIcon
                              sx={{
                                fontSize: "1.2rem",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteProductHandler(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[3, 5, 10]}
            component="div"
            count={rowsData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}

export default React.memo(ProductList);
