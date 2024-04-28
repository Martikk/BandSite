document.addEventListener('DOMContentLoaded', () => {
    const showsContainer = document.querySelector('.Shows_section');

    // Fetching data from the API
    fetch('https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=d063796d-39c9-4b36-aca5-004d479270d5')
        .then(response => response.json())
        .then(data => {
            data.forEach(show => {
                const showDiv = document.createElement('div');
                showDiv.className = 'show';

                // Convert date from timestamp
                const dateObject = new Date(show.date);
                const dateString = dateObject.toLocaleDateString('en-US', {
                    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
                });

                const dateLabel = document.createElement('p');
                dateLabel.className = 'show-label';
                dateLabel.textContent = 'DATE';
                const dateValue = document.createElement('p');
                dateValue.className = 'show-date';
                dateValue.textContent = dateString;
                showDiv.appendChild(dateLabel);
                showDiv.appendChild(dateValue);

                const venueLabel = document.createElement('p');
                venueLabel.className = 'show-label';
                venueLabel.textContent = 'VENUE';
                const venueValue = document.createElement('p');
                venueValue.className = 'show-venue';
                venueValue.textContent = show.place;
                showDiv.appendChild(venueLabel);
                showDiv.appendChild(venueValue);

                const locationLabel = document.createElement('p');
                locationLabel.className = 'show-label';
                locationLabel.textContent = 'LOCATION';
                const locationValue = document.createElement('p');
                locationValue.className = 'show-location';
                locationValue.textContent = show.location;
                showDiv.appendChild(locationLabel);
                showDiv.appendChild(locationValue);

                const buyButton = document.createElement('button');
                buyButton.setAttribute('type', 'submit');
                buyButton.className = 'full-width-button';
                buyButton.textContent = 'BUY TICKETS';
                buyButton.addEventListener('click', function() {
                    alert('Thank you for purchasing!');
                });
                showDiv.appendChild(buyButton);

                showsContainer.appendChild(showDiv);

                const hr = document.createElement('hr');
                showsContainer.appendChild(hr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
