document.addEventListener("DOMContentLoaded", function () {
    const commentList = document.querySelector(".comment_list");
    const commentForm = document.querySelector(".comment_section__form");


    async function fetchComments() {
        try {
            const response = await fetch('https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=d063796d-39c9-4b36-aca5-004d479270d5');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const comments = await response.json();
            displayComments(comments);
        } catch (error) {
            console.error('Failed to fetch comments:', error);
        }
    }

    function displayComments(comments) {
        commentList.innerHTML = ""; 

        // Sort comments by timestamp in descending order
        comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        comments.forEach(comment => {
            const commentItem = document.createElement("li");
            commentItem.classList.add("comment_list__item");

            const icon = document.createElement("div");
            icon.classList.add("icon");

            const textContainer = document.createElement("div");
            const nameAndDateContainer = document.createElement("div");
            nameAndDateContainer.style.display = "flex";
            nameAndDateContainer.style.justifyContent = "space-between";
            nameAndDateContainer.style.alignItems = "center";

            const commentName = document.createElement("h3");
            commentName.innerText = comment.name;
            commentName.classList.add("comment_list__name");

            const commentDate = document.createElement("p");
            commentDate.innerText = new Date(comment.timestamp).toLocaleDateString();
            commentDate.style.color = "#AFAFAF";
            commentDate.classList.add("comment_list__date");

            nameAndDateContainer.appendChild(commentName);
            nameAndDateContainer.appendChild(commentDate);

            const commentText = document.createElement("p");
            commentText.innerText = comment.comment;
            commentText.classList.add("comment_list__description");

            textContainer.appendChild(nameAndDateContainer);
            textContainer.appendChild(commentText);

            commentItem.appendChild(icon);
            commentItem.appendChild(textContainer);
            commentList.appendChild(commentItem);
        });
    }



    commentForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const nameInput = event.target.elements.name;
        const commentInput = event.target.elements.description; 

        if (!nameInput.value.trim() || !commentInput.value.trim()) {
            alert("Please fill in both the name and the comment fields.");
            return;
        }

        const newComment = {
            name: nameInput.value.trim(),
            comment: commentInput.value.trim(),
        };

        try {
            const response = await fetch('https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=d063796d-39c9-4b36-aca5-004d479270d5', {
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
            console.log('Comment posted successfully:', createdComment);
            await fetchComments();
        } catch (error) {
            console.error('Failed to post new comment:', error);
            alert('Failed to post comment. Please check the console for more details.');
        }

        event.target.reset(); 
    });

    fetchComments(); 
});
