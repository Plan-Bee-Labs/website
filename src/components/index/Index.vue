<template>
	<section :class="indexClass">
		<div class="container">
			<div class="header">
				<div class="menu">
					<a :class="['menu_item', {active: activeSection == 'home'}]" href="#home" id="home"
						@click="activeSection = 'home'">{{ $t("message.index.header.menu.home") }}</a>
					<a :class="['menu_item', {active: activeSection == 'debrief'}]" href="#debrief"
						@click="activeSection = 'debrief'">{{ $t("message.index.header.menu.debrief") }}</a>
					<a :class="['menu_item', {active: activeSection == 'offering'}]" href="#offering"
						@click="activeSection = 'offering'">{{ $t("message.index.header.menu.offering") }}</a>
					<a :class="['menu_item', {active: activeSection == 'projects'}]" href="#projects"
						@click="activeSection = 'projects'">{{ $t("message.index.header.menu.projects") }}</a>
				</div>
				<div class="logo"
					@click="$router.push({ name: 'index' })">
					<img src="@/assets/Black logo - no background.svg" />
				</div>
				<div class="contact"
					@click="mail('bot@0xbee.ai')">
					<div class="button">{{ $t("message.index.header.contact.contact_us") }}</div>
				</div>
			</div>
			<div class="title">{{ $t("message.index.title") }}</div>
			<div class="sub-title">{{ $t("message.index.subtitle") }}</div>
			<div class="contact-button"
					@click="mail('bot@0xbee.ai')">{{ $t("message.index.contact_button") }}</div>
			<div class="landing">
				<img src="@/assets/Landing.jpg" />
			</div>
			<div class="section-title-1" id="debrief">{{ $t("message.index.debrief") }}</div>
			<div class="text-1">{{ $t("message.index.debrief-text-1") }}</div>
			<div class="text-1">{{ $t("message.index.debrief-text-2") }}</div>
			<div class="text-1">{{ $t("message.index.debrief-text-3") }}</div>
			<div class="text-1">{{ $t("message.index.debrief-text-4") }}</div>
			<div class="section-2">
				<div class="section-title-2" id="offering">{{ $t("message.index.offering") }}</div>
				<div class="section-text-2">{{ $t("message.index.offering-text-1") }}</div>
				<div class="section-text-2">{{ $t("message.index.offering-text-2") }}</div>
			</div>
			<div class="section-title-1" id="projects">{{ $t("message.index.projects") }}</div>
			<div class="title-heading">{{ $t("message.index.projects-title") }}</div>
			<div class="grid-1">
				<div class="grid-1-field">
					<div class="grid-1-field-image">
						<img src="@/assets/Wild pollinators.jpg" />
					</div>
					<div class="grid-1-field-title">{{ $t("message.index.projects-wild-pollinators") }}</div>
					<div class="grid-1-field-text">{{ $t("message.index.projects-wild-pollinators-1") }}</div>
				</div>
				<div class="grid-1-field">
					<div class="grid-1-field-image">
						<img src="@/assets/Bumblebee.jpg" />
					</div>
					<div class="grid-1-field-title">{{ $t("message.index.projects-bumblebees") }}</div>
					<div class="grid-1-field-text">{{ $t("message.index.projects-bumblebees-1") }}</div>
				</div>
				<div class="grid-1-field">
					<div class="grid-1-field-image">
						<img src="@/assets/Honeybees.jpg" />
					</div>
					<div class="grid-1-field-title">{{ $t("message.index.projects-honeybees") }}</div>
					<div class="grid-1-field-text">{{ $t("message.index.projects-honeybees-1") }}</div>
				</div>
			</div>
			<div class="section-2">
				<div class="section-title-2">{{ $t("message.index.pollinators-importance") }}</div>
				<div class="section-text-2">{{ $t("message.index.pollinators-importance-1") }}</div>
				<div class="logo">
					<img src="@/assets/Color logo - no background.svg" />
				</div>
			</div>
			<div class="title-heading">{{ $t("message.index.contact-us-today") }}</div>
			<div class="contact-button"
					@click="mail('bot@0xbee.ai')">{{ $t("message.index.contact_button") }}</div>
			<div class="section-3">&#9825; {{ $t("message.index.plan-bee-labs") }}</div>
		</div>
	</section>
</template>

<script src="@/src/js/index/index.js" scoped />
<style src="@/src/scss/index/index.scss" lang="scss" scoped />
