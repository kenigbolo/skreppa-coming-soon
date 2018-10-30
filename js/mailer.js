const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

$(document).ready(() => {
  const $emailBtn = $('#js-email-submit-btn');
  $emailBtn.click(() => {
    const email = $(this).val();
    if (validateEmail(email)) {
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
    } else {
      // TODO - Notify client that email is invalid
      console.log('Inavlid email');
    }
  });
});