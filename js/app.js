function createAccountViewModel() {
    var self = this;

    self.firstName = ko.observable("Alexis").extend({
        validation: {
            message: 'Please enter at least 2 characters',
            validator: function (value) {
                return value.length > 1
            }
        }
        /* validation takes an object and returns it into the UI*/
    })

    self.firstName.subscribe(function (newValue) {
        console.log('new value', newValue)
    })

    self.handleSubmit = function () {
        console.log('SUBMIT THE FORM')
        var payload = {
            firstName: self.firstName()
        }
        console.log(payload) 
        
    }
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new createAccountViewModel(), knockoutApp)