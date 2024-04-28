document.addEventListener("DOMContentLoaded", function() {
    const commentList = document.querySelector(".comment_list");
    const commentForm = document.querySelector(".comment_section__form");

    // Function to fetch comments and update the UI
    async function fetchComments() {
        try {
            const response = await fetch('https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=your_api_key_here');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const comments = await response.json();
            displayComments(comments);
        } catch (error) {
            console.error('Failed to fetch comments:', error);
        }
    }

    // Function to display comments on the webpage
    function displayComments(comments) {
        commentList.innerHTML = ''; // Clear existing comments
        comments.forEach(comment => {
            const commentElement = document.createElement('li');
            commentElement.classList.add('comment-item'); // Add a class for potential styling

            // Format the timestamp nicely
            const date = new Date(comment.timestamp).toLocaleDateString("en-US", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            // Handling potentially missing likes or id
            const likes = comment.likes || 0; // Default to 0 if likes are missing

            // Creating HTML content for the comment
            commentElement.innerHTML = `
                <div class="comment-meta">
                    <h4>${comment.name}</h4>
                    <span>${date}</span>
                    <span>Likes: ${likes}</span>
                </div>
                <p class="comment-text">${comment.comment}</p>
            `;

            commentList.appendChild(commentElement);
        });
    }

    // Event listener for handling form submission
    commentForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('description');

        if (!nameInput.value.trim() || !commentInput.value.trim()) {
            alert("Please fill in both the name and the comment fields.");
            return;
        }

        const newComment = {
            name: nameInput.value.trim(),
            comment: commentInput.value.trim(),
        };

        try {
            const response = await fetch('https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=your_api_key_here', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const createdComment = await response.json();
            console.log('Comment posted successfully:', JSON.stringify(createdComment, null, 2));
            await fetchComments(); // Refresh comments on the page
        } catch (error) {
            console.error('Failed to post new comment:', error);
            alert('Failed to post comment. Please check the console for more details.');
        }

        event.target.reset(); // Reset form fields after submission
    });

    fetchComments(); // Initial call to load comments when the page loads
});



























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
