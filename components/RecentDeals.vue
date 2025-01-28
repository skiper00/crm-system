<template>
	<div class="recent-deals">
		<div class="recent-deals__title">
			<h2>Recent Deals</h2>
			<p>View All</p>
		</div>
		<div class="recent-deals__item">
			<img src="@/assets/icons/image.svg" alt="" />
			<div class="recent-deals__contact">
				<p>319 Haul Road</p>
				<h4>Glenrock,, WY</h4>
			</div>

			<div class="recent-deals__meta">
				<p>$5750</p>
				<span>Nov 14, 07:00 AM</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
	.recent-deals {
		border: 1px #e6e9f0 solid;
		padding: 24px 24px 9px 24px;
		background-color: #fff;
		border-radius: 12px;
		max-height: 392px;
		width: 519px;

		.recent-deals__title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 24px;
			h2 {
				font-weight: 600;
				color: #092c4c;
			}

			p {
				color: #514ef3;
			}
		}

		.recent-deals__item {
			display: flex;
			align-items: center;
			gap: 10px;

			.recent-deals__contact {
				line-height: 25px;

				h4 {
					font-weight: 300;
					color: #7e92a2;
				}

				p {
					font-weight: 500;
					color: #092c4c;
				}
			}

			.recent-deals__meta {
				margin-left: auto;
				text-align: end;
				line-height: 25px;
				p {
					color: #092c4c;
					font-weight: 500;
				}

				span {
					font-weight: 300;
					color: #7e92a2;
				}
			}
		}
	}
</style>
