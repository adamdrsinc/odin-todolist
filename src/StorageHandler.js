new (class StorageSubscriber {
  constructor() {
    PubSub.subscribe("update_storage", (tag, data) => {
      if (StorageHandler.storageAvailable("localStorage")) {
        const projectsAsObjectLiterals = [];
        data.projects.forEach((element) => {
          projectsAsObjectLiterals.push(element.asObjectLiteral);
        });
        StorageHandler.updateStorage(projectsAsObjectLiterals);
      }
    });
  }
})();

class StorageHandler {
  static #PROJECTS = "PROJECTS";

  static init() {
    window.localStorage.setItem(this.#PROJECTS, "");
  }

  static storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  static updateStorage(projects) {
    const stringifiedProjects = JSON.stringify(projects);
    localStorage.setItem(this.#PROJECTS, stringifiedProjects);
  }
}

export { StorageHandler };
