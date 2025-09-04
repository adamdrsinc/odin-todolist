new class ProjectSubscriber{

}

class ProjectHandler{
    //A 2D array containing the ToDos
    #projects = [];
    
    constructor(){}
    
    constructor(projects){

    }

    createProject(){

    }

    createProject(todos){
        newToDoList = [];
        todos.forEach(todo => {
            newToDoList.push(todo);
        });

        this.projects.push(newToDoList);

        PubSub.publish('projects_updated', {
            projects: this.#projects
        });
    }
}

export {ProjectHandler};