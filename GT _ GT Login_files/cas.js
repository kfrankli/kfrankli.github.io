
function animateCasMessageBoxes() {
    //flash error box
    $('#msg.errors').animate({ backgroundColor: 'rgb(187,0,0)' }, 30).animate({ backgroundColor: 'rgb(255,238,221)' }, 500);

    //flash success box
    $('#msg.success').animate({ backgroundColor: 'rgb(51,204,0)' }, 30).animate({ backgroundColor: 'rgb(221,255,170)' }, 500);

    //flash confirm box
    $('#msg.question').animate({ backgroundColor: 'rgb(51,204,0)' }, 30).animate({ backgroundColor: 'rgb(221,255,170)' }, 500);
}

function disableEmptyInputFormSubmission() {

    $('#fm1 input[name="username"],[name="password"]').on("input", function (event) {
        var enableSubmission = true;

        if (enableSubmission) {
            $("#fm1 input[name=submit]").removeAttr('disabled');
            event.stopPropagation && event.stopPropagation();
        } else {
            $("#fm1 input[name=submit]").attr('disabled', 'true');
        }
    });
}

function resourceLoadedSuccessfully() {
    $(document).ready(function () {
        $('.alert.fade.show').css('opacity', 1);


        //focus username or password field, first that is empty
        var username = $('#username');
        if (username.val() == '') {
            // console.log('FOCUS USERNAME');
            username.focus();
        } else {
            // console.log('FOCUS PASSWORD');
            $('#password').focus();
        }

        animateCasMessageBoxes();
        disableEmptyInputFormSubmission();

        $('#capslock-on').hide();
        $('#fm1 input[name="username"],[name="password"]').trigger("input");

        $('#password').keypress(function (e) {
            var s = String.fromCharCode(e.which);
            if (s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) {
                $('#capslock-on').show();
            } else {
                $('#capslock-on').hide();
            }
        });

        // load duo status from Passport
        var statusBox = $('.duo_status');
        if (statusBox.length) {
            var url = statusBox.attr('data-url');
            statusBox.html('<p class="loading">Loading duo status...</p>');
            $.get(url, function (result) {
                statusBox.html(result.markup);
                statusBox.addClass(result.status);
                // show non-green status at top of page on mobile devices
                if (result.status !== 'green' && $(window).width() <= 640) {
                    statusBox.hide();
                    $('.info h2').after(statusBox);
                    statusBox.slideDown();
                }
            });
        }


        if (typeof (jqueryReady) == "function") {
            jqueryReady();
        }
    });

};
