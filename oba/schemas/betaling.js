export default {
  name: 'betaling',
  type: 'document',
  title: 'betaling',
  fields: [
    {
      name: 'soortBetaling',
      type: 'string',
      title: 'soortBetaling',
    },
    {
      name: 'betaaldatum',
      type: 'string',
      title: 'betaaldatum',
    },
    {
      name: 'bedrag',
      type: 'string',
      title: 'bedrag',
    },
    {
      name: 'betalingswijze',
      type: 'string',
      title: 'betalingswijze',
    },
    {
      name: 'details',
      type: 'string',
      title: 'details',
    },
  ],
}
