export default {
  name: 'CurrencyCard',
  props: ['currencyType', 'currencyValue', 'amount'],
  computed: {
    total () {
      return this.currencyValue * parseInt(this.amount)
    }
  },
  methods: {
    removeCurrency () {
      this.$emit('removeCurrency', this.currencyType)
    }
  }
}
