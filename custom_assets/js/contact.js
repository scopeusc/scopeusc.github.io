/** Submit contact information to the firebase  */
var contactRef = firebase.database().ref('contact/');

function submit() {

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var contactMessage = document.getElementById('contactMessage').value;
  var date = new Date();

  if (firstName === ''){
    document.getElementById('firstName').value = '';
    document.getElementById('firstName').placeholder = 'Please enter a first name';
  } if (lastName === '') {
    document.getElementById('lastName').value = '';
    document.getElementById('lastName').placeholder = 'Please enter a last name';
  } if (email === '') {
    document.getElementById('email').value = '';
    document.getElementById('email').placeholder = 'Please enter an email';
  } if (contactMessage === '') {
    document.getElementById('contactMessage').value = '';
  } else {
      $('#contactModal').modal('show');
      contactRef.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactMessage: contactMessage,
        date: date,
      });
      emailjs.send('gmail', 'template_1V8sP0AJ', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactMessage: contactMessage,
        date: date,
      });
      clearAll();
  }
}


function clearAll() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('contactMessage').value = '';

  document.getElementById('firstName').placeholder = 'First Name';
  document.getElementById('lastName').placeholder = 'Last Name';
  document.getElementById('email').placeholder = 'Email';
  document.getElementById('contactMessage').placeholder = 'Message';
}