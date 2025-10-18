// Tab Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetPage = btn.dataset.page;
    pages.forEach(p => p.classList.add('hidden'));
    document.getElementById(targetPage).classList.remove('hidden');
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Notification dropdown
const bell = document.getElementById('notificationBell');
const dropdown = document.getElementById('notificationDropdown');
bell.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Profile Page toggle
const profileIcon = document.getElementById('profileIcon');
const profilePage = document.getElementById('profilePage');
const homePage = document.getElementById('homePage');
const backToHome = document.getElementById('backToHome');

profileIcon.addEventListener('click', () => {
  homePage.classList.add('hidden');
  profilePage.classList.remove('hidden');
});

backToHome.addEventListener('click', () => {
  profilePage.classList.add('hidden');
  homePage.classList.remove('hidden');
});

// Button actions
document.getElementById('toTransfer').addEventListener('click', () => {
  document.querySelector('[data-page="transferPage"]').click();
});

document.getElementById('sendMoney').addEventListener('click', () => {
  alert('✅ Transfer Sent!');
});

// Payment method selection
const methodButtons = document.querySelectorAll('.payment-methods .method-btn');
let selectedMethod = null;

methodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    methodButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedMethod = btn.dataset.method;
  });
});

// Settings interactions
document.querySelector('.link-bank').addEventListener('click', () => alert('Linked successfully ✅'));
document.querySelectorAll('.link-options .method-btn').forEach(btn => {
  btn.addEventListener('click', () => alert('Linked successfully ✅'));
});

document.querySelector('.change-pass').addEventListener('click', () => alert('Changed successfully ✅'));
document.querySelector('.feedback-btn').addEventListener('click', () => alert('Submitted successfully ✅'));
document.querySelector('.logout-btn').addEventListener('click', () => alert('Logged out successfully 👋'));
