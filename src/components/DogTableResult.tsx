import React, { useEffect, useState } from "react";
import { alpha } from "@mui/material/styles";
import { Alert, Avatar, Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import SortIcon from "@mui/icons-material/Sort";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { setFavoriteIDs } from "../redux/slices/favoriteDogsIdSlice";
import {
  selectSortingStrategy,
  setInitialPageLoadSort,
  setSortingStrategy,
} from "../redux/slices/sortingStrategySlice";
import { selectFilterResponseObject } from "../redux/slices/filterResponseObjectSlice";
import { isObjectEmpty } from "../common/HelperFunctions";
import { useFetchDogData } from "./custom-hooks/useFetchDogData";
import { selectTabelDataProps } from "../redux/slices/tableDataPropsSlice";
import { useFetchInitialMountDogData } from "./custom-hooks/useFechInitialMountDogData";
import { useFetchPrevData } from "./custom-hooks/useFetchPrevData";
import { useFetchNextData } from "./custom-hooks/useFetchNextData";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
  favorite: string;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Dog;
  label: any;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "breed",
    numeric: true,
    disablePadding: true,
    label: <Button endIcon={<SortIcon />}>Breed</Button>,
  },
  {
    id: "age",
    numeric: true,
    disablePadding: false,
    label: "Age",
  },
  {
    id: "zip_code",
    numeric: true,
    disablePadding: false,
    label: "Zip_Code",
  },
  {
    id: "favorite",
    numeric: true,
    disablePadding: false,
    label: "Favorite",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Dog
  ) => void;

  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onRequestSort } = props;
  const createSortHandler =
    (property: keyof Dog) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
      // console.log("sorting breeds");
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center"> Image</TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            // padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.id === "breed" ? (
              <TableSortLabel onClick={createSortHandler(headCell.id)}>
                {headCell.label}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 && (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} {numSelected > 1 ? "Favorites" : "Favorite"}
        </Typography>
      )}
    </Toolbar>
  );
}

export default function DogTableResult() {
  /**useState hooks */

  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useAppDispatch();

  const { sortingStrategy, initialPageLoadSort } = useAppSelector(
    selectSortingStrategy
  );

  const { nextUrl, prevUrl, tablesData, tablePaginationCount } =
    useAppSelector(selectTabelDataProps);

  const { filterResponseObject } = useAppSelector(selectFilterResponseObject);

  const { fetchDogData } = useFetchDogData();
  const { onInitialMount } = useFetchInitialMountDogData();
  const { fetchPrevData } = useFetchPrevData();
  const { fetchNextData } = useFetchNextData();

  /**router dom hooks */
  const navigate = useNavigate();

  useEffect(() => {
    if (isObjectEmpty(filterResponseObject)) {
      onInitialMount();
    } else {
      setPage(0);
      fetchDogData();
    }
  }, [filterResponseObject, initialPageLoadSort]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Dog
  ) => {
    if (property !== "breed") return;
    event.preventDefault();
    if (isObjectEmpty(filterResponseObject)) {
      initialPageLoadSort === "asc"
        ? dispatch(setInitialPageLoadSort("desc"))
        : dispatch(setInitialPageLoadSort("asc"));

      return;
    }
    if (sortingStrategy === "asc") {
      dispatch(setSortingStrategy("desc"));
    } else {
      dispatch(setSortingStrategy("asc"));
    }
  };

  const handleClick = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];
    // console.log(event);
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(event);

    if (newPage > page && nextUrl) {
      fetchNextData(nextUrl);
    } else if (newPage < page && prevUrl) {
      fetchPrevData(prevUrl);
      console.log(prevUrl + "calling prev end point");
    } else {
      console.log("Check the newPage ore event");
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const matchMyFavDogs = () => {
    dispatch(setFavoriteIDs(selected));

    navigate("/favoritedogs");
  };

  // console.log(tablesData);
  // debugger;
  return (
    <>
      <Box sx={{ width: "100%", mt: 4 }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <Button
            sx={{ margin: "1em" }}
            variant="contained"
            disabled={selected.length ? false : true}
            onClick={() => matchMyFavDogs()}
          >
            Match My Fav Dogs
          </Button>
          <EnhancedTableToolbar numSelected={selected.length} />

          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                rowCount={tablesData.length}
              />
              <TableBody>
                {tablesData.map((dog, index) => {
                  const isItemSelected = isSelected(dog.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={() => handleClick(dog.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={dog.id}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          alt="Man's best friend"
                          src={String(dog.img)}
                          sx={{
                            height: { xs: 80, md: 120 },
                            width: { xs: 80, md: 120 },
                          }}
                        />
                      </TableCell>
                      <TableCell align="right">{dog.name}</TableCell>
                      <TableCell align="right">{dog.breed}</TableCell>

                      <TableCell align="right">{dog.age}</TableCell>
                      <TableCell align="right">{dog.zip_code}</TableCell>
                      <TableCell align="right">
                        <Checkbox
                          color="success"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                          icon={<FavoriteBorderIcon />}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[20]}
            component="div"
            count={tablePaginationCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

          {isLoading && <Alert severity="info">Loading Next Data</Alert>}
          {error && <Alert severity="info">Error Loading Next Data</Alert>}
        </Paper>
      </Box>
    </>
  );
}
