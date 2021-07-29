console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
	el: "#root",
	data: {
		newTask: "",
		tasks: ["Lavare la macchina", "Fare benzina", "Lavare il cane"],
	},
	methods: {
		deleteTask(index) {
			this.tasks.splice(index, 1);
		},
		addTask() {
			if (this.newTask.trim() !== "") {
				this.tasks.push(this.newTask);
			}
			this.newTask = "";
		},
	},
});
