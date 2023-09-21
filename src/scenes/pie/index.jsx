import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import Header from "../../components/Header";
import { green } from "@mui/material/colors";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
// import View from "../pie/view";
import Create from "../pie/create";
// import Edit from "../pie/edit"; 



const Pie = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, [isOpen]);

  return (
    <Grid container spacing={1}>
      <Box sx={{ml: 5}}>
        <Header title="Prefentive Maintenance" subtitle="All PM (List)" />
      </Box>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 3,
            mx: 3,
            mb: 5,
            mt: 2,
            borderTop: "5px solid #000",
            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <div style={{ marginBottom: "5px" }}>
            <Box display="flex">
              <Typography fontSize="20px">List</Typography>
              <Box display="flex" ml="auto">
                <Create/>
                  {/* <AddIcon sx={{ mr: "5px", fontSize: "16px" }} />
                  Tambah Data
                </Button> */}
              </Box>
            </Box>
            <hr sx={{ width: "100%" }} />
            <Box display="flex" pb={1}>
              {/* <Box
                  display="flex"
                  borderRadius="5px"
                  ml="auto"
                  border="solid grey 1px">
                  <InputBase
                    sx={{ ml: 2, flex: 2, fontSize: "13px" }}
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  /> */}

              {/* <IconButton
                    type="button"
                    sx={{ p: 1 }}
                    onClick={() => {
                      const filteredData = dtCity.filter((city) =>
                        city.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      );
                      gridRef.current.api.setRowData(filteredData);
                    }}>
                    <SearchIcon sx={{ mr: "3px", fontSize: "19px" }} />
                  </IconButton> */}
            </Box>
            {/* </Box> */}
          </div>
          {/* <Tables
              name={"city"}
              path={"/cities"}
              fetcher={fetcher}
              colDefs={columnDefs}
              gridRef={gridRef}
            /> */}
        </Paper>
      </Grid>
    </Grid>
    
  );
};

export default Pie;
