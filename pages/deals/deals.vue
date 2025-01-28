<template>
	<BaseTable
		:title="`deals`"
		:total="deals.length"
		:sortOptions="dealSortOptions"
		:rows="deals"
		:columns="columns"
		:ImageUrl="ImageUrl"
	>
	</BaseTable>
</template>

<script lang="ts" setup>
	import { ref, onMounted, provide } from "vue";
	import { $fetch } from "ofetch";
	import IconUrl from "@/assets/icons/Icon.svg";
	import type { Deal } from "~/types/deal.d.ts";
	import { useEntityLength } from "~/store/EntityLength";
	const ImageUrl = IconUrl;

	const dealsLength = useEntityLength();

	const deals = ref<Deal[]>([]);

	const dealSortOptions = [
		"Price: Low to high",
		"Price: High to low",
		"Date: Old to new",
		"Date: New to old",
		"Status: In Progress",
		"Status: Closed",
	];

	const columns = ["Name", "Area", "Appointment Date", "Price", "Status", "Edit"];

	const fetchDeals = async () => {
		try {
			const res = await $fetch<Deal[]>("/api/deals");
			deals.value = res || [];

			dealsLength.setDealsLength(deals.value.length);
		} catch (e) {
			console.log("Ошибка пр загрузке сделок:", e);
		}
	};

	provide("deals", deals);
	onMounted(fetchDeals);
</script>
