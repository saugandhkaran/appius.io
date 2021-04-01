import exportFromJSON from 'export-from-json';
import FormEntries from '../resources/data/FormEntries';

function JsonTOCSV(dataArray) {
  const formula = new FormEntries();
  const data = dataArray.map(item => {
      item.impactedUsers = formula.impactedUsers[item.impactedUsers];
      item.frequency = formula.frequency[item.frequency];
      item.improvement = formula.improvement[item.improvement];
      item.dependency = formula.dependency[item.dependency];
      return item;
  });
  const date = new Date();
  const fileName = `appius-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.toLocaleTimeString()}`;
  const exportType = 'xls';
  exportFromJSON({data, fileName, exportType})
}

export default JsonTOCSV;
