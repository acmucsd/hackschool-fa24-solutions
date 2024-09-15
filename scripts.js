function handleSubmit(event){
    event.preventDefault();

    let form = event.target;
    let newEvent = {};
    const formElements = form.elements;

    for (let i = 0; i < formElements.length; i++){
        const element = formElements[i];
        if (element.name){
            newEvent[element.name] = element.value;
        }
    }

    console.log("Trip uploaded! Your event is:", newEvent);
}