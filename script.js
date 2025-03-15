// js logic for checkbox

document.addEventListener('DOMContentLoaded', function () {
    const emailCheck = document.querySelector('.email-check');
    const phoneCheck = document.querySelector('.phone-check');
    const emailBox = document.getElementById('email-box');
    const numBox = document.getElementById('num-box');

    // Function to handle visibility
    function toggleInputBox() {
        if (emailCheck.checked) {
            emailBox.classList.remove('hidden');
            numBox.classList.add('hidden');
        } else if (phoneCheck.checked) {
            numBox.classList.remove('hidden');
            emailBox.classList.add('hidden');
        }
    }

    // Add event listeners to radio buttons
    emailCheck.addEventListener('change', toggleInputBox);
    phoneCheck.addEventListener('change', toggleInputBox);

    // Initial check on page load
    toggleInputBox();
});

// js logic for explore options

document.addEventListener('DOMContentLoaded', function () {
    const optionBoxes = document.querySelectorAll(".option-box");

    optionBoxes.forEach(optionBox => {
        const downIcon = optionBox.querySelector("#down-icon");
        const description = optionBox.querySelector(".option-description");

        optionBox.addEventListener("click", () => {
            description.classList.toggle("hidden");
            downIcon.classList.toggle("active");
        });
    });
});