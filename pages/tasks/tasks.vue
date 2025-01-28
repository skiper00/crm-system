<template>
	<div class="tasks">
		<TableHeader
			:total="taskStore.tasks.length"
			:title="`tasks`"
			:sortOptions="dealSortOptions"
		/>

		<TasksOption :option="option" />

		<TaskItem v-for="task in taskStore.tasks" :key="task.id" :task="task" />
	</div>
</template>

<script lang="ts" setup>
	import { onMounted } from "vue";
	import { $fetch } from "ofetch";
	import { useTasksStore } from "~/store/taskStore";
	import type { Task } from "~/types/tasks.d.ts";
	const option = ["Due Date", "Task", "Edit"];
	const dealSortOptions = ["Due Date", "Task Name"];

	const taskStore = useTasksStore();

	const fetchTasks = async () => {
		try {
			const res = await $fetch<Task[]>("/api/tasks");
			taskStore.tasks = res || [];
		} catch (e) {
			console.log("Ошибка при загрузке задач:", e);
		}
	};

	onMounted(fetchTasks);
</script>

<style lang="scss" scoped>
	.tasks {
		padding: 34px 24px 24px;

		.base-table__load-more {
			display: flex;
			justify-content: center;

			button {
				padding: 10px 29px;
				background-color: #fff;
				border-radius: 100px;
				color: #092c4c;
				font-weight: 600;
				border: none;
				cursor: pointer;
			}
		}
	}
</style>
