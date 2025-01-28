<template>
	<BaseTable
		:title="`customers`"
		:total="customers.length"
		:sortOptions="customerSortOptions"
		:rows="processedCustomers"
		:columns="columns"
		:ImageUrl="ImageUrl"
	>
		<template #avatar="{ src }">
			<div class="custom-avatar">
				<img :src="src" alt="" />
			</div>
		</template>

		<template #cell="{ row }">
			<div class="custom-cell">
				{{ row }}
			</div>
		</template>
	</BaseTable>
</template>

<script lang="ts" setup>
	import { ref, onMounted, computed, provide } from "vue";
	import IconUrl from "@/assets/icons/User-octagon.svg";
	import type { Customer } from "~/types/customer.d.ts";
	import { $fetch } from "ofetch";
	import { getAvatarUrl } from "@/utils/avatar";
	import { useEntityLength } from "~/store/EntityLength";

	const ImageUrl = IconUrl;
	const customers = ref<Customer[]>([]);

	const customerLength = useEntityLength();

	const customerSortOptions = ["Name", "Date Created", "Email"];

	const columns = ["Name", "Email", "Phone", "Address", "Edit"];

	const processedCustomers = computed(() => {
		return customers.value.map((customer: Customer) => ({
			...customer,
			avatar: getAvatarUrl(customer.avatar),
		}));
	});

	const fetchCustomers = async () => {
		try {
			const res = await $fetch<Customer[]>("/api/customers");
			customers.value = res || [];

			customerLength.setCustomerLength(customers.value.length);
		} catch (e) {
			console.log("Ошибка при загрузке заказчика:", e);
		}
	};

	provide("customers", customers);
	onMounted(fetchCustomers);
</script>
