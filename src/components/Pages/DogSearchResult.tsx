import React, { useContext, useState } from "react";
import { alpha } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useNavigate } from "react-router-dom";
import { DogContext } from "../../context/DogContext";
import useFetchMoreData from "../fetchData/useFetchNextData";
import DogAction from "../../Actions/DogAction";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

function createData(
  id: string,
  img: string,
  name: string,
  age: number,
  zip_code: string,
  breed: string
): Dog {
  return {
    id,
    img,
    name,
    age,
    zip_code,
    breed,
  };
}

// const rows = [
//   createData("1", "image1", "African Hound", 12, "52557", "Hound"),
//   createData("2", "image2", "Asian Hound", 18, "59874", "Asian"),
//   createData("3", "image3", "German Sherphed", 30, "12876", "German"),
//   createData("4", "image3", "Alaska Sherphed", 30, "12876", "German"),
//   createData("ke", "image3", "Ke Sherphed", 30, "12876", "German"),
// ];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Dog;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dog Name",
  },
  {
    id: "img",
    numeric: true,
    disablePadding: false,
    label: "Picture",
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
    id: "breed",
    numeric: true,
    disablePadding: false,
    label: "Breed",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Dog
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Dog) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={
              headCell.id === "breed" && orderBy === headCell.id ? order : false
            }
          >
            {headCell.id === "breed" ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
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
  const navigate = useNavigate();
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
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} Favorite
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Dogs
        </Typography>
      )}
      {numSelected > 0 ? (
        // <Tooltip title="favs">
        <Button onClick={() => navigate("/favoritedogs")}>Match</Button>
      ) : (
        // </Tooltip>
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function DogSearchResult({
  initialDogData,
  nextApi,
  endPointsList,
  totalItems,
}) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Dog>("breed");
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);

  // const { fetchMoreData } = useFetchMoreData(nextApi);

  const navigate = useNavigate();
  // console.log(page);

  const { setFavoriteDogs } = useContext(DogContext);

  // console.log(nextApi);
  console.log(initialDogData);
  // debugger;
  const [dogData, setDogData] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [nextEndpoint, setNextEndpoint] = useState<string | null>("");
  const [prevEndpoint, setPrevEndpoint] = useState<string | null>("");

  // const [paginationCount, setPaginationCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoreData = async () => {
    try {
      setIsLoading(true);
      // console.log(nextEndpoint);
      const nextPageResponse = await DogAction.fetchNextPageData(nextEndpoint);

      const newDogsData = await DogAction.fetchDogs(nextPageResponse.resultIds);

      console.log(newDogsData);
      setDogData((prevDogData) => {
        // Combine the existing data with the new data
        const combinedData = [...prevDogData, ...newDogsData];

        // Remove the first 25 elements
        const updatedDogData = combinedData.slice(25);

        return updatedDogData;
      });

      // setPaginationCount((prevCount) => prevCount + newDogsData.length);
      setNextEndpoint(nextPageResponse.next);
      setPrevEndpoint(nextPageResponse.prev);
      endPointsList.push({
        prev: nextPageResponse.prev ? nextPageResponse.prev : "",
      });
      // debugger;
      setIsLoading(false);
      // console.log(dogData);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setDogData(initialDogData);
    setNextEndpoint(nextApi);
    // setPaginationCount((prevCount) => prevCount + initialDogData.length);
  }, [initialDogData]);

  // React.useEffect(() => {
  //   if (nextEndpoint) {
  //     setPaginationCount((prevCount) => prevCount + initialDogData.length + 1);
  //   }
  // }, [nextEndpoint]);

  const favoriteDogData = (dogId: string) => {
    setFavoriteDogs((prevFavoriteDogs) => [dogId, ...prevFavoriteDogs]);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Dog
  ) => {
    if (property !== "breed") return;

    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = dogData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      favoriteDogData("" + id);
      // console.log("added" + id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      // console.log("removed" + id);
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      // console.log("removed" + id);
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    // debugger;
    // endPointsMap.set(page, )
    setPage(newPage);

    debugger;
    if (nextEndpoint) {
      // debugger;

      fetchMoreData();
    }
  };

  console.log(endPointsList);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dogData.length) : 0;
  console.log("Empty rows" + emptyRows);

  const visibleRows = React.useMemo(() => {
    // console.log("Recalculating visible rows");

    return stableSort(dogData, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [order, orderBy, page, rowsPerPage, dogData]);

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={dogData.length}
            />
            <TableBody>
              {visibleRows.map((dog, index) => {
                const isItemSelected = isSelected(dog.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, dog.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={dog.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell>
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        icon={<FavoriteBorderIcon />}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {dog.name}
                    </TableCell>
                    {/* img, name, age, zip_code, breed, */}
                    <TableCell align="right">
                      <Box
                        component="img"
                        sx={{
                          maxHeight: { xs: 50, md: 100 },
                          maxWidth: { xs: 50, md: 100 },
                        }}
                        alt="Man's best friend"
                        src={String(dog.img)}
                      />
                    </TableCell>

                    <TableCell align="right">{dog.age}</TableCell>
                    <TableCell align="right">{dog.zip_code}</TableCell>
                    <TableCell align="right">{dog.breed}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          // sx={{ border: "2px blue groove" }}
          rowsPerPageOptions={[25]}
          component="div"
          count={totalItems ? totalItems : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          // slotProps.action.n
        />
        {/* New "Load More" button */}
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </Paper>
      <Button variant="contained" onClick={() => navigate("/favoritedogs")}>
        Match My Fav Dogs
      </Button>
    </Box>
  );
}
