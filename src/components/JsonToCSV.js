import exportFromJSON from 'export-from-json'

function JsonTOCSV(dataArray) {
  const formula = {
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
      '6': '100%',
      '5': '80% - 99%',
      '4': '50% - 79%',
      '3': '20% - 49%',
      '2': '10 - 19%',
      '1': 'Less than 10%'
    }
  }
  const data = dataArray.map(item => {
      item.impactedUsers = formula.impactedUsers[item.impactedUsers];
      item.frequency = formula.frequency[item.frequency];
      item.improvement = formula.improvement[item.improvement];
      return item;
  });
  const date = new Date();
  const fileName = `appius-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.toLocaleTimeString()}`;
  const exportType = 'xls';
  exportFromJSON({data, fileName, exportType})
}

export default JsonTOCSV;
