var main = function() {
    'use strict';

    var toDos = [
        "Buy products",
        "Refresh todo",
        "Prepare for class",
        "Answer on emails",
        "Walk with Gracy",
        "Finish writing book"
    ];

    $('.tabs a span').toArray().forEach(function(element) {
        $(element).on('click', function() {
            var $element = $(element),
                $content,
                $input,
                $button;

            $('.tabs a span').removeClass('active');
            $element.addClass('active');
            $('main .content').empty();

            if ($element.parent().is(':nth-child(1)')) {
                $content = $('<ul>');

                for (var i = 0; i < toDos.length; i++) {
                    $content.prepend($('<li>').text(toDos[i]));
                }

                $('main .content').append($content);
            } else if ($element.parent().is(':nth-child(2)')) {
                $content = $('<ul>');
                toDos.forEach(function(todo) {
                    $content.append($('<li>').text(todo));
                });
                $('main .content').append($content);
            } else if ($element.parent().is(':nth-child(3)')) {
                $input = $('<input>'),
                $button = $('<button>').text('+');

                $button.on('click', function() {
                    toDos.push($input.val());
                    $input.val('');
                });

                $content = $('<div>').append($input, $button);

            }

            $('main .content').append($content);

            return false;
        });

        $('.tabs a:first-child span').trigger('click');

    }) ;

    
};
$(document).ready(main);