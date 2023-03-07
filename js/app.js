function createAccountViewModel() {
    var self = this;

    self.firstName = ko.observable("Alexis");

    self.firstName.subscribe(function (newValue) {
        console.log('new value', newValue)
    })
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new createAccountViewModel(), knockoutApp)