import PubSub from "pubsub-js";

class ToDoHandler{
    static addToDo(newToDo){
        console.log(newToDo);
        PubSub.publish('new_to_do', {
            title: newToDo.title,
            description: newToDo.description,
            dueDate: newToDo.dueDate,
            priority: newToDo.priority
        });
    }
}

class ToDo{
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get title() {
        return this.#title;
    }
    set title(newTitle){
        if(typeof newTitle === 'string'){
            this.#title = newTitle;
        }
    }

    get description(){
        return this.#description;
    }
    set description(newDescription){
        if(typeof newDescription === 'string'){
            this.#description === newDescription;
        }
    }

    get dueDate(){
        return this.#dueDate;
    }
    set dueDate(newDueDate){
        //Set this to be of the date class type
        this.#dueDate = newDueDate;
    }

    get priority(){
        return this.#priority;
    }2
    set priority(newPriority){
        this.#priority = newPriority;
    }

    get disassemble(){
        return {
            title: this.title, 
            description: this.description, 
            duedate: this.dueDate, 
            priority: this.priority
        };
    }
}

export {ToDoHandler, ToDo};