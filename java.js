class formSubmit 
{
    constructor(settings) 
    {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);

        if (this.form) 
        {
            this.url = this.form.getAtribute("action");
        }
    }

    displaySuccess() 
    {
        this.form.innerHTML = this.settings.success;
    }

    displayError() 
    {
        this.form.innerHTML = this.settings.error();;
    }

    init()
    {
        if(this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }

}

const formSubmit = new formSubmit
({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1>Mensagem enviada!</h1>",
    error: "<h1 class= 'error'>Não foi possível enviar sua mensagem.</h1>"
})

formSubmit.init();

