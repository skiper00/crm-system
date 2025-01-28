import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task } from "~/types/tasks";

export const useTasksStore = defineStore("tasks", () => {
	const tasks = ref<Task[]>([]);

	const addTasks = (task: Task) => {
		tasks.value.push(task);
	};

	return { tasks, addTasks };
});
