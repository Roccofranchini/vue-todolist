console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
	el: "#root",
	data: {
		newTask: "",
		searchTerm: "",
		isInputVisible: false,
		tasks: ["Lavare la macchina", "Fare benzina", "Lavare il cane"],
	},
	methods: {
		deleteTask(index) {
			this.tasks.splice(index, 1);
		},
		addTask() {
			if (this.newTask.trim() !== "") {
				this.tasks.push(this.newTask);
				this.toggleInput();
			} else {
				this.newTask = "";
			}
		},
		toggleInput() {
			this.isInputVisible = !this.isInputVisible;
			this.newTask = "";
		},
		displayItem(task) {
			if (!this.searchTerm.trim()) return true;
			const filter = this.searchTerm.trim().toLowerCase();
			task = task.toLowerCase();
			return task.includes(filter);
		},
	},
});
