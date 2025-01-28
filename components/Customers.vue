<template>
	<div class="customers">
		<div class="customers__title">
			<div>
				<h2>Customers</h2>
			</div>
			<div>
				<p>View All</p>
			</div>
		</div>
		<div class="customers__item">
			<img src="@/assets/icons/image.svg" alt="" />
			<div class="customers__contact">
				<p>Deanna Annis</p>
				<span>deannannis@gmail.com</span>
			</div>
			<div class="customers__addition">
				<img src="@/assets/icons/Addition.svg" alt="" />
			</div>
		</div>
		<div class="customers__item">
			<img src="@/assets/icons/image.svg" alt="" />
			<div class="customers__contact">
				<p>Deanna Annis</p>
				<span>deannannis@gmail.com</span>
			</div>
			<div class="customers__addition">
				<img src="@/assets/icons/Addition.svg" alt="" />
			</div>
		</div>
		<div class="customers__item">
			<img src="@/assets/icons/image.svg" alt="" />
			<div class="customers__contact">
				<p>Deanna Annis</p>
				<span>deannannis@gmail.com</span>
			</div>
			<div class="customers__addition">
				<img src="@/assets/icons/Addition.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" setup>
	.customers {
		min-width: 340px;
		margin-top: 17px;
		margin-left: 15px;

		.customers__title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 24px;

			h2 {
				color: #092c4c;
			}

			p {
				color: #514ef3;
			}
		}

		.customers__item {
			display: flex;
			align-items: center;
			margin-top: 12px;

			.customers__contact {
				margin-left: 16px;
				line-height: 30px;

				span {
					font-weight: 300;
					color: #7e92a2;
				}

				p {
					font-size: 15px;
					font-weight: 600;
					color: #092c4c;
				}
			}

			.customers__addition {
				margin-left: auto;
			}
		}
	}
</style>
