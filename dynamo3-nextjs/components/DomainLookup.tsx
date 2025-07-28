'use client';

import React, { useEffect, useState, useCallback } from 'react';
import {
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

interface DomainData {
  [key: string]: string | number | undefined;
}

const DomainLookup: React.FC = () => {
  const [jsonData, setJsonData] = useState<DomainData>({});
  const [searchTerm, setSearchTerm] = useState('');
  
  const keyGroups = [
    ['name', 'domain', 'create_date', 'domain_age', 'Country', 'A', 'ns', 'nsdomain', 'tld', 'ip_quality', 'domain_quality'],
    ['mailbox_provider', 'provider type', 'industry', 'mx', 'mxdomain', 'spf', 'mail'],
    ['www', 'ptr', 'parked', 'language', 'title', 'description'],
    ['risk_level']
  ];

  const fetchData = useCallback(async () => {
    if (!searchTerm.trim()) {
      setJsonData({});
      return;
    }

    try {
      // Use Next.js API route instead of calling external API directly
      const apiUrl = `/api/domains/${encodeURIComponent(searchTerm)}`;

      // Fetch JSON data from the Next.js API route
      const response = await fetch(apiUrl);
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setJsonData({});
    }
  }, [searchTerm]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [searchTerm, fetchData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchData();
  };

  const renderGroupTable = (group: string[]) => {
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
                <TableCell>{jsonData[key] || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className="space-y-4">
      <Paper className="p-4" variant="outlined">
        <TextField
          type="text"
          placeholder="Enter domain name to search"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <SearchIcon 
                className="cursor-pointer text-gray-600 hover:text-gray-800" 
                onClick={handleSearchSubmit} 
              />
            ),
          }}
        />
      </Paper>
      
      {Object.keys(jsonData).length === 0 ? (
        <div className="text-center p-8 text-gray-500">
          {searchTerm ? 'Loading...' : 'Enter a domain name to search for information'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyGroups.map((group, index) => (
            <div key={index}>
              <Paper className="p-2">
                {renderGroupTable(group)}
              </Paper>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DomainLookup;