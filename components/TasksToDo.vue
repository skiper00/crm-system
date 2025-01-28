<template>
	<div class="tasks-list">
		<div class="tasks-list__wrapper">
			<div class="tasks-list__header">
				<h2>Tasks To Do</h2>
				<p>View All</p>
			</div>

			<div class="tasks-list__content">
				<div class="tasks-list__task tasks-list__task--warning">
					<div class="tasks-list__date">
						<span>30 Nov 2021</span>
						<img src="@/assets/icons/Warning.svg" alt="" />
					</div>
					<p>Meeting with partners</p>
				</div>
				<div class="tasks-list__task tasks-list__task--warning">
					<div class="tasks-list__date">
						<span>30 Nov 2021</span>
						<img src="@/assets/icons/Warning.svg" alt="" />
					</div>
					<p>Meeting with partners</p>
				</div>

				<div class="tasks-list__task">
					<div class="tasks-list__date">
						<span>24 Oct 2022</span>
					</div>
					<p class="tasks-list__description">Lunch with Steve</p>
				</div>
			</div>
		</div>

		<div class="tasks-list__footer">
			<p class="tasks-list__add-task">Add new task</p>
			<img
				style="width: 24px; height: 24px"
				src="@/assets/icons/Arrow-right.svg"
				alt=""
			/>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
	.tasks-list {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100%;
		margin-left: 13px;
		border-radius: 12px;
		box-shadow: 0 0 0 1.5px #eaeef4;
		border: none;
		background-color: #ffffff;

		.tasks-list__wrapper {
			padding: 24px 24px 80px 24px;
			.tasks-list__header {
				display: flex;
				align-items: center;
				justify-content: space-between;

				h2 {
					color: #092c4c;
				}

				p {
					color: #514ef3;
				}
			}

			.tasks-list__content {
				margin-top: 12px;

				.tasks-list__task {
					display: grid;
					grid-template-columns: 150px auto;
					align-items: center;
					gap: 8px;
					margin-bottom: 20px;
					font-weight: 400;
					color: #7e92a2;

					&--warning {
						color: #fe8084;
					}

					p {
						color: #092c4c;
					}

					.tasks-list__date {
						display: flex;
						gap: 25px;
					}
				}
			}
		}

		.tasks-list__footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 16px 24px 16px 24px;
			border-top: 1px solid #e6e9f0;
			text-align: center;
			color: #7e92a2;
			background-color: #fff;
			cursor: pointer;

			.tasks-list__add-task {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 5px;
				font-weight: 300;
				font-size: 17px;
				color: #7e92a2;

				span {
					color: #514ef3;
					font-weight: bold;
				}
			}
		}
	}
</style>
