$(document).ready(function () {
    var stripe = Stripe('pk_test_TtqgAeSYyq1WxoX7xd0DNuEE');
    var elements = stripe.elements();

    var style = {
        base: {
            fontSize: '16px',
            color: "#32325d",
        }
    };

    var cardNumber = elements.create('cardNumber', {
        style: style
    });
    cardNumber.mount('#card-number-element');

    cardNumber.addEventListener('change', function (event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });

    var cardExpiry = elements.create('cardExpiry', {
        style: style
    });
    cardExpiry.mount('#card-expiry-element');

    var cardCvc = elements.create('cardCvc', {
        style: style
    });
    cardCvc.mount('#card-cvc-element');

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        stripe.createToken(cardNumber).then(function (result) {
            if (result.error) {
                // Inform the customer that there was an error.
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                $('#sponsorModal').modal('hide');
                showLoading();
                // Send the token to your server.
                var amount = $('#sponsor-amount').val() * 100; // in cents
                var email = $('#sponsor-email').val();
                var company_name = $('#sponsor-company').val();
                var rep_name = $('#sponsor-name').val();
                stripeTokenHandler(result.token.id, amount, email, company_name, rep_name);
            }
        });
    });

    function stripeTokenHandler(token, amount, email, company_name, rep_name){
        $.ajax({
            method: 'POST',
            url: "https://84lm1eyc81.execute-api.us-west-1.amazonaws.com/dev/charge",
            type: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                token: token,
                amount: Math.round(amount),
                email: email,
                company_name: company_name,
                rep_name: rep_name
            }),
            success: function (data, textStatus, jqXHR) {
                if (data.result === "success") {
                    console.log("Successful!");
                    console.log(data);
                    showSuccess('Thanks for your donation! A digital receipt has been emailed to you.');
                } else {
                    showFail('Sorry, something went wrong.');
                    console.log(data);
                }
            },
            error: function (data, textStatus, jqXHR) {
                showFail('Sorry, something went wrong.');
                console.log(data);
            }
        });
    }

    function showSuccess(msg) {
        var element = $('#sponsor-alert');
        element.text(msg);
        element[0].className = 'green';
    }

    function showFail(msg) {
        var element = $('#sponsor-alert');
        element.text(msg);
        element[0].className = 'red';
    }

    function showLoading(){
        var element = $('#sponsor-alert');
        element.html('<i class="fas fa-spinner spin"></i>');
    }

    function clearMsg() {
        $('#sponsor-alert').text('');
    }

    $("#btn-sponsor").click(function (e) {
        e.preventDefault();
        clearMsg();
        $('#sponsorModal').modal('show');
        cardNumber.clear();
        cardExpiry.clear();
        cardCvc.clear();
        $('#sponsor-company').val('');
        $('#sponsor-name').val('');
        $('#sponsor-email').val('');
    })
})