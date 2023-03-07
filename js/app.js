function createAccountViewModel() {
    var self = this;

    self.firstName = ko.observable("Alexis");
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new createAccountViewModel(), knockoutApp)