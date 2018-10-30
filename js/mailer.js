const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

const sendEmailToSave = (email, this) => {
  $ajax({
    url: 'https://skreppa-coming-soon-server.herokuapp.com/',
    data: {email},
    type: 'POST',
    dataType: 'json',
  }).done((response) => {
    const {success} = response;
    $(this).val('');
    // TODO - Notify client that email has been saved
    console.log(success)
  }).fail((xhr) => {
    const error = xhr.responseJSON;
    // TODO - Notify client that email wasn't saved
    console.log(error)
  });
};

$(document).ready(() => {
  const $emailBtn = $('#js-email-submit-btn');
  $emailBtn.click(() => {
    const email = $(this).val();
    validateEmail(email)
      ? sendEmailToSave(email, this)
      : console.log('Inavlid email'); // TODO - Notify client that email is invalid
  });
});
