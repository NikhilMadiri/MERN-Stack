function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let studentList = document.getElementById("studentList");

    let studentCard = document.createElement("div");
    studentCard.classList.add("student-card");

    studentCard.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Course:</strong> ${course}</p>
        <button class="delete-btn">Delete</button>
    `;

    studentCard
        .querySelector(".delete-btn")
        .addEventListener("click", function () {
            studentCard.remove();
        });

    studentList.appendChild(studentCard);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}