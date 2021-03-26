import exportFromJSON from 'export-from-json'

function JsonTOCSV(dataArray) {
  const formula = {
    affectedUsers: {
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
      '5': '10x or more',
      '4': '2x or more',
      '3': '1x - 2x',
      '2': 'No change',
      '1': 'Less than 1x'
    }
  }
  const data = dataArray.map(item => {
      item.affectedUsers = formula.affectedUsers[item.affectedUsers];
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
