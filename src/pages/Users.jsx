import { useState, useEffect } from "react";
import React from "react";
import Sidenav from "../components/Sidenav";
import Toolbar from "@mui/material/Toolbar";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Barchart from "../charts/Barchart";
import CountUp from "react-countup";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const drawerWidth = 240;
const columns = [
  {
    field: "img",
    headerName: "",
    width: 70,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="User"
        style={{ width: 50, height: 50, borderRadius: "50%" }}
      />
    ),
    sortable: false,
  },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "mobile",
    headerName: "Mobile No.",

    width: 120,
  },
  {
    field: "address",
    headerName: "Address",
    description: "This column has a value getter and is not sortable.",

    width: 240,
  },
  {
    field: "date",
    headerName: "Date Joined",
    description: "This column has a value getter and is not sortable.",

    width: 160,
  },
];

const rows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "John Smith",
    email: "fX5Hh@example.com",
    mobile: 1234567890,
    address: "123 Main St, Anytown, USA",
    date: "2022-01-01",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Jane Doe",
    email: "jane@example.com",
    mobile: 9876543210,
    address: "456 Elm St, Othertown, USA",
    date: "2022-02-01",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/20441996/pexels-photo-20441996/free-photo-of-short-hair-man-in-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Alice Johnson",
    email: "alice@example.com",
    mobile: 4561237890,
    address: "789 Oak St, Sometown, USA",
    date: "2022-03-01",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "John Smith",
    email: "fX5Hh@example.com",
    mobile: 1234567890,
    address: "123 Main St, Anytown, USA",
    date: "2022-01-01",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Jane Doe",
    email: "jane@example.com",
    mobile: 9876543210,
    address: "456 Elm St, Othertown, USA",
    date: "2022-02-01",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/20441996/pexels-photo-20441996/free-photo-of-short-hair-man-in-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Alice Johnson",
    email: "alice@example.com",
    mobile: 4561237890,
    address: "789 Oak St, Sometown, USA",
    date: "2022-03-01",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "John Smith",
    email: "fX5Hh@example.com",
    mobile: 1234567890,
    address: "123 Main St, Anytown, USA",
    date: "2022-01-01",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Jane Doe",
    email: "jane@example.com",
    mobile: 9876543210,
    address: "456 Elm St, Othertown, USA",
    date: "2022-02-01",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/20441996/pexels-photo-20441996/free-photo-of-short-hair-man-in-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Alice Johnson",
    email: "alice@example.com",
    mobile: 4561237890,
    address: "789 Oak St, Sometown, USA",
    date: "2022-03-01",
  },
];

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
  }

  /* firefox */
  &:focus-visible {
    outline: 0;
  }
`
);

const paginationModel = { page: 0, pageSize: 5 };
export default function Users() {
  const [rows, setRows] = useState([]); // State to hold API data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    height: 500,
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length > 255) {
      setNameError("Name must not exceed 255 characters.");
    } else {
      setNameError("");
    }
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
    }
  };
  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);
    if (!/^\d{0,10}$/.test(value)) {
      setMobileError("Mobile number must not exceed 10 digits.");
    } else {
      setMobileError("");
    }
  };
  const handleRoleChange = (e) => {
    const value = e.target.value;
    setRole(value);
    if (value === "") {
      setRoleError("Please select your role.");
    } else {
      setRoleError("");
    }
  };
  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://localhost:44306/api/Crud/users")
      .then((response) => {
        // Map API response to match DataGrid row structure
        const mappedRows = response.data.map((item, index) => ({
          id: index + 1,
          img: item.img, // Ensure your API returns `imgUrl`
          name: item.name,
          email: item.email,
          mobile: item.mobile,
          address: item.address,
          date: item.date_joined,
        }));
        setRows(mappedRows); // Update rows state
        setLoading(false); // Turn off loading state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Turn off loading even if there's an error
      });
  }, []);

  return (
    <div>
      <Box />

      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Button
            variant="contained"
            onClick={handleOpen}
            startIcon={<AddCircleOutlineIcon />}
            sx={{ mb: 2 }}
          >
            Add
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                textAlign="center"
                fontWeight={"bold"}
              >
                ADD USER
                <hr />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    value={name}
                    onChange={handleNameChange}
                    error={!!nameError}
                    helperText={nameError}
                  />

                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    value={email}
                    onChange={handleEmailChange}
                    error={!!emailError}
                    helperText={emailError}
                  />
                </Stack>
                <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
                  <TextField
                    id="standard-basic"
                    label="Mobile No"
                    variant="standard"
                    value={mobile}
                    onChange={handleMobileChange}
                    error={!!mobileError}
                    helperText={mobileError}
                  />

                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Role</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        variant="standard"
                        label="Role"
                        onChange={handleRoleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Stack>

                <Stack spacing={2} direction="row" sx={{ width: "100%" }}>
                  <Textarea
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Address"
                    style={{ width: "100%", height: "100px" }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Stack>
              </Typography>
            </Box>
          </Modal>
          <Paper sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
