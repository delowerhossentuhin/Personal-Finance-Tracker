const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
const formInputs = document.querySelectorAll('#profileForm input');

let originalValues = {};

editBtn.addEventListener('click', () => {
  formInputs.forEach(input => {
    originalValues[input.id] = input.value;
    input.disabled = false;
  });
  editBtn.style.display = 'none';
  saveBtn.style.display = 'inline-block';
  cancelBtn.style.display = 'inline-block';
});

cancelBtn.addEventListener('click', () => {
  formInputs.forEach(input => {
    input.value = originalValues[input.id];
    input.disabled = true;
  });
  editBtn.style.display = 'inline-block';
  saveBtn.style.display = 'none';
  cancelBtn.style.display = 'none';
});

document.getElementById('profileForm').addEventListener('submit', (e) => {
  e.preventDefault();
  formInputs.forEach(input => input.disabled = true);
  editBtn.style.display = 'inline-block';
  saveBtn.style.display = 'none';
  cancelBtn.style.display = 'none';
  alert('Profile saved successfully!');
});
