function createAccountViewModel() {
    var self = this;

    self.firstName = ko.observable("Alexis");

    self.firstName.subscribe(function (newValue) {
        console.log('new value', newValue)
    })

    self.handleSubmit = function () {
        console.log('SUBMIT THE FORM')
        var payload = {
            firstName: self.firstName()
        }
        console.log(payload) 
        // when i clicked the continue button it must send a response with firstNam0e
    }
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new createAccountViewModel(), knockoutApp)