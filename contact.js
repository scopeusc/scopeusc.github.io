/** Submit contact information to the firebase  */
var contactRef = firebase.database().ref('contact/');

function submit() {

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var contactMessage = document.getElementById('contactMessage').value;
  var date = new Date();

  console.log(lastName);
  console.log(firstName);
  console.log(email);

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
      document.getElementById('modal-trigger').click();
      contactRef.push({
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

  document.getElementById('firstName').placeholder = 'First name';
  document.getElementById('lastName').placeholder = 'Last name';
  document.getElementById('email').placeholder = 'Email';
}