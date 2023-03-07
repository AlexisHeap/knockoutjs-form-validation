function createAccountViewModel() {
    var self = this;

    self.firstName = ko.observable("Alexis").extend({
        validation: {
            message: 'Please enter at least 2 characters',
            validator: function (value) {
                return value.length > 1
            }
        }
    });

    self.emailAddress = ko.observable("").extend({
        email: true
    })
    self.firstName.subscribe(function (newValue) {
        console.log('new value', newValue)
    })

    self.handleSubmit = function () {
        var errors = ko.validation.group(self);
        if (errors().length > 0) {
            console.log("There are errors")
            return;
        };

        console.log('SUBMIT THE FORM')
        var payload = {
            firstName: self.firstName()
        }
        console.log(payload) 
        
    }
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new createAccountViewModel(), knockoutApp)