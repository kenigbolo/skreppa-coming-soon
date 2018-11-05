/**
 * Email Regex
 */
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line max-len
/**
 * url
 */
const url = 'https://skreppa-coming-soon-server.herokuapp.com/';
/**
 * Headers
 */
const headers = {'Content-Type': 'application/json'}

const createEmailEntry = () => {
  const email = $('#email').val();
  if (email.match(emailRegex)) {
    $.ajax({
      url,
      headers,
      data: JSON.stringify({email}),
      type: 'POST',
      dataType: 'json',
    }).done((res) => {
        const {success, data} = res;
        alert(`${data} - ${success}`);
    }).fail((xhr) => {
        const {error} = xhr.responseJSON;
        alert(error);
      });
  } else {
    alert('Please enter a valid email');
  }
}

