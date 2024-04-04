import language from '@/src/mixins/i18n/language.js'

const created = async function() {
	const that = this
	
	// set language
	this.setLanguage(this.$route)
}

const computed = {
	indexClass() {
		return this.theme + '-index-' + this.themeVariety
	},
	locale() {
		return this.$store.getters['main/getLocale']
	},
	theme() {
		return this.$store.getters['main/getTheme']
	},
	themeVariety() {
		return this.$store.getters['main/getThemeVariety']
	}
}

const watch = {
}

const mounted = async function() {
}

const methods = {
	mail(email) {
		window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank')
	}
}

const beforeUnmount = async function() {
}

export default {
	mixins: [
		language
	],
	components: {
	},
	directives: {
	},
	name: 'Index',
	data () {
		return {
			activeSection: 'home'
		}
	},
	created: created,
	computed: computed,
	watch: watch,
	mounted: mounted,
	methods: methods,
	beforeUnmount: beforeUnmount
}
