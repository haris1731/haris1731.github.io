/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

var formFunctions = {
    submitForm: function () {
        // Optionally, you can perform any form data validation here before redirecting

        // Open a new window with a message
        var newWindow = window.open("", "_blank");
        newWindow.document.write("<h1>Thanks for your time!</h1>");

        // Optionally, you can redirect the user to another page
        // window.location.href = "new_page.html";
    },

    hire: function () {
        var newWindow = window.open("", "_blank");
        newWindow.document.write("<h1>Thanks for Hiring! kindly mail me on Harisahmed1731@gmail.com<br></h1>");

        // Optionally, you can redirect the user to another page
        // window.location.href = "new_page.html";
    }
};
