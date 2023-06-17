import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  const [jsonData, setJsonData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const keyGroups = [
    ['name', 'domain', 'create_date', 'domain_age', 'Country', 'A', 'ns', 'nsdomain', 'tld', 'ip_quality', 'domain_quality'],
    ['mailbox_provider', 'provider type', 'industry', 'mx', 'mxdomain', 'spf', 'mail'],
    ['www', 'ptr', 'parked', 'language', 'title', 'description'],
    ['risk_level']
  ];

  const fetchData = useCallback(async () => {
    // Construct the API URL with the search term
    const apiUrl = `https://gktm4kzdw7.execute-api.eu-west-1.amazonaws.com/domains/${searchTerm}`;

    // Fetch JSON data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
    setJsonData(data);
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchData();
  };

  return (
    <div>
      <Paper className="search-container" variant="outlined">
        <TextField
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <SearchIcon className="search-icon" onClick={handleSearchSubmit} />
            ),
            classes: {
              input: 'search-input',
            },
            disableUnderline: true,
          }}
        />
      </Paper>
      {Object.keys(jsonData).length === 0 ? (
        <div>No data available</div>
      ) : (
        <Grid container spacing={2}>
          {keyGroups.map((group, index) => (
            <Grid item xs={6} key={index}>
              <Paper>
                {renderGroupTable(group)}
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );

  function renderGroupTable(group) {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {group.map(key => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{jsonData[key]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

export default App;
