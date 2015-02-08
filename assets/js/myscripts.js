$(function(){$('#home a:contains("Home")').parent().addClass("active"),$('#about a:contains("About Us")').parent().addClass("active"),$('#services a:contains("Services")').parent().addClass("active"),$('#faqs a:contains("FAQs")').parent().addClass("active"),$('#contact a:contains("Contact Us")').parent().addClass("active"),$("ul.nav li.dropdown").hover(function(){$(".dropdown-menu",this).fadeIn()},function(){$(".dropdown-menu",this).fadeOut("fast")})});



function Validator()
{
    "use strict";
}

Validator.prototype.checkName = function(name)
{
    "use strict";
    return (/[^a-z]/i.test(name) === false);
};

window.addEventListener('load', function(){
    "use strict";
    document.getElementById('firstname').addEventListener('blur', function(){
        var _this = this;
        var validator = new Validator();
        var validation = document.getElementById('namevalidation');
        if (validator.checkName(_this.value) === true) {
            validation.innerHTML = 'Looks good! :)';
            validation.className = "validation yep";
            _this.className = "yep";
        }
        else {
            validation.innerHTML = 'Looks bad! :(';
            validation.className = "validation nope";
            _this.className = "nope";
        }

    });
});
