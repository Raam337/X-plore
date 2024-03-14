import React, { useState } from 'react';

const TripAdvisorTest = () => {
  const [locationId, setLocationId] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);
  const apiKey = '9491811BFD104CB0A2D25657377EEFD0';
  const locationName = 'New York';

  const searchLocation = () => {
    // const searchUrl = `https://api.tripadvisor.com/data/1.0/locations/search?query=${locationName}&key=${apiKey}`;

    // fetch(searchUrl)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     const locationId = data.data[0].result_object.location_id;
    //     setLocationId(locationId);
    //     fetchLocationDetails(locationId);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

      const options = {method: 'GET', headers: {accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Origin': '90.241.158.152'}} // Replace with your website's origin }};

fetch('https://cors-anywhere.herokuapp.com/https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=New%20York&language=en&key=9491811BFD104CB0A2D25657377EEFD0', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  };

  const fetchLocationDetails = (locationId) => {
    const detailsUrl = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/details?language=en&currency=USD&key=${apiKey}`;

    fetch(detailsUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setLocationDetails(data);
      })
      .catch(error => {
        console.error('Error fetching location details:', error);
      });
  };

  return (
    <div>
      <h2>Testing TripAdvisor API with React</h2>
      <button onClick={searchLocation}>Search Location</button>
      {locationId && (
        <div>
          <h3>Location ID: {locationId}</h3>
          <h3>Location Details:</h3>
          <pre>{JSON.stringify(locationDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TripAdvisorTest;