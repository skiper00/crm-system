<template>
	<div class="table-columns" :class="gridStyle">
		<div class="table-columns__icon">
			<img :src="ImageUrl" alt="Icon" />
		</div>
		<div v-for="(col, index) in columns" :key="index" class="table_columns__option">
			<div>{{ col }}</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	const { columns } = defineProps<{ columns: string[]; ImageUrl: string }>();

	const gridStyle = computed(() => `columns-${columns.length + 1}`);
</script>

<style lang="scss" scoped>
	.table-columns {
		display: grid;
		/* grid-template-columns: 0.24fr 2fr 0.5fr 0.9fr 0.5fr 0.5fr 0fr; */
		align-items: center;
		padding: 14px 24px 14px 12px;
		color: #7e92a2;
		font-weight: 400;

		//page Customers
		&.columns-6 {
			grid-template-columns: 0.65fr 4fr 3.5fr 2.5fr 4fr 0fr 0fr;
		}

		//page Deals
		&.columns-7 {
			grid-template-columns: 0.5fr 4fr 1fr 2fr 1.4fr 1fr 0fr 0fr;
		}
	}
</style>
