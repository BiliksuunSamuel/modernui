$(document).ready(() => {
  //auto resizing of the textarea on text input
  $(".message").on("keypress keyup", function () {
    if ($(this).val().length > 0) {
      $(this).height(0);
      $(this).height(this.scrollHeight);
    } else {
      $(this).css({
        height: "20px",
      });
    }
  });
});
