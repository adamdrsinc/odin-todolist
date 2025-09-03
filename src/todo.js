const createToDo = (pTitle, pDescription, pDueDate, pPriority) => {
    return{
        _title : pTitle,
        _description : pDescription,
        _dueDate : pDueDate,
        _priority: pPriority,

        get title() {
            return this._title;
        },
        set title(newTitle){
            if(typeof newTitle === 'string'){
                this._title = newTitle;
            }
        },

        get description(){
            return this._description;
        },
        set description(newDescription){
            if(typeof newDescription === 'string'){
                this._description === newDescription;
            }
        },

        get dueDate(){
            return this._dueDate;
        },
        set dueDate(newDueDate){
            //Set this to be of the date class type
            this._dueDate = newDueDate;
        },

        get priority(){
            return this._priority;
        },
        set priority(newPriority){
            this._priority = newPriority;
        }

    }
}