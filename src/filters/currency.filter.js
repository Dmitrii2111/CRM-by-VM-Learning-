export default function currencyFilter(value, currency) {
   return new Intl.NumberFormat('ru-Ru', {
      style: 'currency',
      currency
   }).format(value)
}