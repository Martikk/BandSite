const allComment = [{
    name: "Victor Pinto",
    description: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    timestamp: 1698950400000,
},
{
    name: "Christina Cabrera",
    description: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    timestamp: 1701148800000,
},
{
    name: "Isaac Tadesse",
    description: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timestamp: 1700515200000,
},
];

console.table(allComment);

document.addEventListener("DOMContentLoaded", function() {
    const commentList = document.querySelector(".comment_list");
    const commentForm = document.querySelector(".comment_section__form");

    function loopThroughForm() {
        commentList.innerText = ""; 
        
        const startDivider = document.createElement("hr");
        startDivider.style.borderTop = "1px solid #AFAFAF"; 
        commentList.appendChild(startDivider);
        
        for (let i = 0; i < allComment.length; i++) {
            const allCommentItem = document.createElement("li");
            allCommentItem.classList.add("comment_list__item");
    
            const icon = document.createElement("div");
            icon.classList.add("icon");
    
            const textContainer = document.createElement("div");
    
            const nameAndDateContainer = document.createElement("div");
            nameAndDateContainer.style.display = "flex";
            
            nameAndDateContainer.style.justifyContent = "space-between";
            nameAndDateContainer.style.alignItems = "center"; 
            

            const allCommentName = document.createElement("h3");
            allCommentName.innerText = allComment[i].name;
            allCommentName.classList.add("comment_list__name");
    
            const allCommentDateCreator = document.createElement("p");
            allCommentDateCreator.innerText = new Date(allComment[i].timestamp).toLocaleDateString();
            allCommentDateCreator.style.color = "#AFAFAF";
            allCommentDateCreator.classList.add("comment_list__datas");
    
            nameAndDateContainer.appendChild(allCommentName);
            nameAndDateContainer.appendChild(allCommentDateCreator);

            const allCommentDescription = document.createElement("p");
            allCommentDescription.innerText = allComment[i].description;
            allCommentDescription.classList.add("allComment_list__description");

            textContainer.appendChild(nameAndDateContainer);
            textContainer.appendChild(allCommentDescription);
    
            allCommentItem.appendChild(icon);
            allCommentItem.appendChild(textContainer);
            commentList.appendChild(allCommentItem);
    
            const divider = document.createElement("hr");
            divider.style.borderTop = "1px solid #AFAFAF"; 
            commentList.appendChild(divider);
        }
    };
    
    commentForm.addEventListener("submit", function(event){
        event.preventDefault();
        const allCommentName = event.target.elements.name.value;
        const allCommentDescription = event.target.elements.description.value;

        const newCommentItem = {
            name: allCommentName,
            description: allCommentDescription,
            timestamp: Date.now(),
        };
        allComment.unshift(newCommentItem);
        loopThroughForm();
        event.target.reset();
    });

    loopThroughForm();
});
