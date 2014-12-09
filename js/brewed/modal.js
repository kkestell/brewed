var BREWED = (function(module) {

  module.showModal = function(title, text, buttons) {
    var $modal = $('<div class="modal-container">' +
                     '<div class="modal">' +
                       '<div class="modal-header">' +
                         '<h3>' + title + '</h3><a class="btn-close"><i class="ion-close"></i></a>' +
                       '</div>' +
                       '<div class="modal-body">' +
                         '<textarea onclick="this.select()">' + text + '</textarea>' +
                       '</div>' +
                       '<div class="modal-footer">' +
                       '</div>' +
                     '</div>' +
                   '</div>');

    if(typeof buttons !== 'undefined') {
      Object.keys(buttons).forEach(function(text) {
        var $button = $('<button>' + text + '</button>');
        $button.click(buttons[text]);
        $modal.find('.modal-footer').append($button);
      });
    }

    $('body').prepend($modal);

    $modal.find('textarea').select();

    $('.modal-container .btn-close').click(function() {
      $('.modal-container').remove();
    });
  };

  module.hideModal = function() {
    $('.modal-container').remove();
  };

  return module;

}(BREWED || {}));
