$(document).ready(function () {
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

    $("#btn-sponsor").click(function (e) {
        e.preventDefault();

        var amount = $('input#sponsor-amount').val();
        amount = amount.replace(/\$/g, '').replace(/\,/g, '');

        amount = parseFloat(amount);

        if (isNaN(amount)) {
            showFail('Please enter a valid amount in USD ($).');
            return;
        } else if (amount < 5.00) {
            showFail('Sponsorship amount must be at least $5.');
            return;
        } else {
            amount = amount * 100; // Needs to be an integer!
            StripeCheckout.open({
                key: "pk_live_PJ4YD5h7XC4JztK1jkCSjsYk",
                amount: Math.round(amount),
                name: 'Scope',
                description: 'Sponsorship payment',
                panelLabel: 'Pay',
                token: function (res) {
                    stripeToken = res.id;
                    $.ajax({
                        method: 'POST',
                        url: "https://84lm1eyc81.execute-api.us-west-1.amazonaws.com/dev/charge",
                        type: 'json',
                        contentType: "application/json",
                        data: JSON.stringify({
                            token: stripeToken,
                            amount: Math.round(amount)
                        }),
                        success: function (data, textStatus, jqXHR) {
                            if (data.result === "success") {
                                console.log("Successful!");
                                console.log(data);
                                showSuccess('Thanks for your donation!');
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
            });
        }
    })
})