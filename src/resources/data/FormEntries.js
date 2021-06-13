export default function FormEntries() {
  return {
    impactedUsers: {
      '6': '100%',
      '5': '80% - 99%',
      '4': '50% - 79%',
      '3': '20% - 49%',
      '2': '10 - 19%',
      '1': 'Less than 10%'
    },
    frequency: {
      '6': 'Daily',
      '5': 'Few times a week',
      '4': 'Weekly',
      '3': 'Monthly',
      '2': 'Few times a year',
      '1': 'Once a year or less'
    },
    improvement: {
      '4': 'Major',
      '3': 'Significant',
      '2': 'Minor',
      '1': 'Negligible'
    },
    effort: {
      '60': 'XXL',
      '50': 'XL',
      '40': 'L',
      '30': 'M',
      '20': 'S',
      '10': 'XS'
    },
    dependency: {
      '1': 'High dependency (Dependent on >3 teams)',
      '2': 'Medium dependency (Dependent on 2 - 3 teams)',
      '3': 'Low dependency (Dependent on 1 extra team)',
      '4': 'No dependency'
    }
  }
}