const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDropdown(e) {
  e.preventDefault();
  dropdown.classList.toggle('active');
}

btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown);