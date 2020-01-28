import axios from 'axios'
import CurrencyCard from '../CurrencyCard'

export default {
  name: 'Home',
  data () {
    return {
      amount: 10.00,
      isFormActive: false,
      currency: 'USD',
      currencies: {},
      dataset: [],
      supportedCurrencies: [
        {
          value: 'USD',
          text: 'USD'
        },
        {
          value: 'CAD',
          text: 'CAD'
        },
        {
          value: 'IDR',
          text: 'IDR'
        },
        {
          value: 'GBP',
          text: 'GBP'
        },
        {
          value: 'CHF',
          text: 'CHF'
        },
        {
          value: 'SGD',
          text: 'SGD'
        },
        {
          value: 'INR',
          text: 'INR'
        },
        {
          value: 'MYR',
          text: 'MYR'
        },
        {
          value: 'JPY',
          text: 'JPY'
        },
        {
          value: 'KRW',
          text: 'KRW'
        }
      ]
    }
  },
  methods: {
    toggleForm () {
      this.isFormActive = !this.isFormActive
      return
    },
    submitForm () {
      const type = this.currency
      const value = this.currencies[this.currency]
      const obj = { type, value }
      
      this.dataset.push(obj)
    },
    fetchData() {
      axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        .then(res => Object.assign(this.currencies, res.data.rates))
    },
    removeCurrency (payload) {
      const newDataset = this.dataset.filter(i => i.type !== payload)
      this.dataset = newDataset
      return this.dataset
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    CurrencyCard
  }
}
