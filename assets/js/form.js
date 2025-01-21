// TODO: Create a variable that selects the form element

const formElement = document.getElementById("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.


const storingBlog = function (event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const error = document.getElementById("error");
if (!username || !title || !content) {
    error.textContent = "Please complete the form.";
    error.style.display = "block";
    return;
}

const formInfo = {
    username: username,
    title: title,
    content: content
};

localStorage.setItem("formInfo", JSON.stringify(formInfo));
redirectPage("./blog.html");
};


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

formElement.addEventListener("submit", storingBlog);