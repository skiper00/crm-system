<template>
	<div class="base-table">
		<TableHeader :title="title" :total="total" :sortOptions="sortOptions" />

		<TableColumns :columns="columns" :ImageUrl="ImageUrl" />
		<div v-for="(row, index) in rows" :key="index" class="base-table__row">
			<TableRow :row="row" :columns="columns">
				<template #avatar="{ src }">
					<slot name="avatar" :src="src" />
				</template>
				<template #status="{ value }">
					<slot name="status" :value="value" />
				</template>
				<template #cell="{ row }">
					<slot name="cell" :row="row" />
				</template>
			</TableRow>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import type { Customer } from "~/types/customer.d.ts";
	import type { Deal } from "~/types/deal.d.ts";

	defineProps<{
		ImageUrl: string;
		title: string;
		total: number;
		sortOptions: string[];
		rows: Array<Deal | Customer>;
		columns: string[];
	}>();
</script>

<style lang="scss" scoped>
	.base-table {
		padding: 34px 24px 24px;

		.base-table__columns {
			display: grid;
			grid-template-columns: 0.24fr 2fr 0.5fr 0.9fr 0.5fr 0.5fr 0fr;
			align-items: center;
			padding: 14px 24px 14px 12px;
			color: #7e92a2;
			font-weight: 400;
		}
	}

	.base-table__load-more {
		display: flex;
		justify-content: center;
	}

	button {
		padding: 10px 29px;
		background-color: #fff;
		border-radius: 100px;
		color: #092c4c;
		font-weight: 600;
		border: none;
		cursor: pointer;
	}
</style>
