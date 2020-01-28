export default {
  name: 'CurrencyCard',
  props: ['currencyType', 'currencyValue', 'amount'],
  computed: {
    total () {
      return this.currencyValue * parseInt(this.amount) || 0
    }
  },
  methods: {
    removeCurrency () {
      this.$emit('removeCurrency', this.currencyType)
    }
  }
}
