function createAccountViewModel() {
    var self = this;

    self.firstName = ko.observable("Alexis").extend({
        required: true,
        minLenght: 2,
    });

    self.emailAddress = ko.observable("").extend({
        required: true,
        email: true
    })
    self.subscriptionType = ko.observable("pro")
    self.hasBeenSubmitted = ko.observable(false)

    self.handleSubmit = function () {
        var errors = ko.validation.group(self);
        if (errors().length > 0) {
            errors.showAllMessages();
            return;
        };
        self.hasBeenSubmitted(true)
        
        console.log('SUBMIT THE FORM')
        var payload = {
            firstName: self.firstName(),
            emailAddress: self.emailAddress(),
            subscriptionType: self.subscriptionType()
        }
        console.log(payload) 
        
    }
    
    
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new createAccountViewModel(), knockoutApp)