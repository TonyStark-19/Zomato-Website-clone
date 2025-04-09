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

// JavaScript to toggle the menu

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtn2 = document.querySelector('.menu-btn-2');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.classList.add('hidden'); // Hide menu button
        menuBtn2.classList.remove('hidden'); // Show close button
    });

    menuBtn2.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn2.classList.add('hidden'); // Hide close button
        menuBtn.classList.remove('hidden'); // Show menu button
    });
});