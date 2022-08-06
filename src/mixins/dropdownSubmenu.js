import DropdownSettingsListItem from '../components/DropdownSettingsListItem.vue'
import DropdownSettingsHeader from '../components/DropdownSettingsHeader.vue'

export default {
    props: ['selectedOptions'],
    emits: ['close', 'select-option'],
    components: {
        DropdownSettingsHeader,
        DropdownSettingsListItem
    },
    data() {
        return {
            optionName: null
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select-option', { name: this.optionName, value: option })
        }
    },

}


