import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        debugger
        const response = await axios.get('https://localhost:7223/api/BingSearch/'); // Update URL accordingly
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      {/* <button onClick={fetchData} >Search</button> */}
      <button >Search</button>
      <h2>Locations with Availability</h2>
      <table>
        <thead>
          <tr>
            <th>Location ID</th>
            <th>Location Name</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((location) => (
            <tr key={location.locationId}>
              <td>{location.locationId}</td>
              <td>{location.locationName}</td>
              <td>{location.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;