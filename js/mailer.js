$(document).ready(() => {
  const $emailBtn = $('#js-email-submit-btn');
  $emailBtn.click(() => {
    const email = this.val();
    $ajax({
      url: 'https://skreppa-coming-soon-server.herokuapp.com/',
      data: {email},
      type: 'POST',
      dataType: 'json',
    }).done((response) => {
      const {success} = response;
      // TODO - Notify client that email has been saved
      console.log(success)
    }).fail((xhr) => {
      const error = xhr.responseJSON;
      // TODO - Notify client that email wasn't saved
      console.log(error)
    });
  });
});