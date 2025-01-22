// TODO: Create a variable that selects the form element

const formElement = document.getElementById("form");
const errorElement = document.getElementById("error");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.


function storingBlog (event){
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

if (!username || !title || !content) {
    errorElement.textContent = "Please complete the form.";
    return;
}

const formInfo = {
    username: username,
    title: title,
    content: content,
};

storeLocalStorage('blogPosts', formInfo);
redirectPage("./blog.html");
};


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

formElement.addEventListener("submit", storingBlog);