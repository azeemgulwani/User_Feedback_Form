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