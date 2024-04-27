document.addEventListener('DOMContentLoaded', () => {
    const showsContainer = document.querySelector('.Shows_section');

    const allTicketsShows = [
        { DATE: "Mon Sept 09 2024", VENUE: "Ronald Lane", LOCATION: "San Francisco, CA" },
        { DATE: "Tue Sept 17 2024", VENUE: "Pier 3 East", LOCATION: "San Francisco, CA" },
        { DATE: "Sat Oct 12 2024", VENUE: "View Lounge", LOCATION: "San Francisco, CA" },
        { DATE: "Sat Nov 16 2024", VENUE: "Hyatt Agency", LOCATION: "San Francisco, CA" },
        { DATE: "Fri Nov 29 2024", VENUE: "Moscow Center", LOCATION: "San Francisco, CA" },
        { DATE: "Wed Dec 18 2024", VENUE: "Press Club", LOCATION: "San Francisco, CA" }
    ];

    allTicketsShows.forEach((show, index) => {
        const showDiv = document.createElement('div');
        showDiv.className = 'show';

        const dateLabel = document.createElement('p');
        dateLabel.className = 'show-label';
        dateLabel.textContent = 'DATE';
        const dateValue = document.createElement('p');
        dateValue.className = 'show-date';
        dateValue.textContent = show.DATE;
        showDiv.appendChild(dateLabel);
        showDiv.appendChild(dateValue);

        const venueLabel = document.createElement('p');
        venueLabel.className = 'show-label';
        venueLabel.textContent = 'VENUE';
        const venueValue = document.createElement('p');
        venueValue.className = 'show-venue';
        venueValue.textContent = show.VENUE;
        showDiv.appendChild(venueLabel);
        showDiv.appendChild(venueValue);

        const locationLabel = document.createElement('p');
        locationLabel.className = 'show-label';
        locationLabel.textContent = 'LOCATION';
        const locationValue = document.createElement('p');
        locationValue.className = 'show-location';
        locationValue.textContent = show.LOCATION;
        showDiv.appendChild(locationLabel);
        showDiv.appendChild(locationValue);

        const buyButton = document.createElement('button');
        buyButton.setAttribute('type', 'submit');
        buyButton.className = 'full-width-button';
        buyButton.textContent = 'BUY TICKETS';
        buyButton.addEventListener('click', function() {
            alert('Thank you!');
        });
        showDiv.appendChild(buyButton);

        showsContainer.appendChild(showDiv);

            const hr = document.createElement('hr');
            showsContainer.appendChild(hr);
    });
});
