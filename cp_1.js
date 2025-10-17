// Coding Project 01 — User Feedback Form

var form = document.getElementById('feedback-form');
var validationMsg = document.getElementById('validation-msg');
var feedbackDisplay = document.getElementById('feedback-display');
var commentCount = document.getElementById('comment-count');

// Count characters as user types (input event)
form.addEventListener('input', function(event) {
  var target = event.target;
  if (target.id === 'comments') {
    commentCount.textContent = target.value.length + ' characters';
  }
  if (target.id === 'name' || target.id === 'email' || target.id === 'comments') {
    target.classList.remove('invalid');
    if (form.name.value.trim() && form.email.value.trim() && form.comments.value.trim()) {
      validationMsg.classList.add('hidden');
      validationMsg.textContent = '';
    }
  }
});

form.addEventListener('mouseover', function(event) {
  var el = event.target;
  if (el.dataset && el.dataset.tooltip) {
    var field = el.parentElement;
    while (field && !field.classList.contains('field')) {
      field = field.parentElement;
    }
    if (field) {
      var tip = field.querySelector('.tooltip');
      tip.textContent = el.dataset.tooltip;
      tip.classList.add('visible');
    }
  }
});

form.addEventListener('mouseout', function(event) {
  var el = event.target;
  if (el.dataset && el.dataset.tooltip) {
    var field = el.parentElement;
    while (field && !field.classList.contains('field')) {
      field = field.parentElement;
    }
    if (field) {
      var tip = field.querySelector('.tooltip');
      tip.classList.remove('visible');
    }
  }
});

// Validation and Prevent Default
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = form.name.value.trim();
  var email = form.email.value.trim();
  var comments = form.comments.value.trim();
  var valid = true;

  if (!name) { valid = false; form.name.classList.add('invalid'); }
  if (!email) { valid = false; form.email.classList.add('invalid'); }
  if (!comments) { valid = false; form.comments.classList.add('invalid'); }

  if (!valid) {
    validationMsg.textContent = 'All fields are required.';
    validationMsg.classList.remove('hidden');
    return;
  }

  validationMsg.textContent = '';
  validationMsg.classList.add('hidden')

  // Append feedback dynamically
  var card = document.createElement('div');
  card.className = 'feedback-card';

  var who = document.createElement('div');
  who.className = 'who';
  who.textContent = name;

  var meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = email;
