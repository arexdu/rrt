export const mapFilterTest = () => {
    let values = [34, 23, 76, 3, 9, 98, 100];
    let valuesMap = values.map((n) => n*10);
    console.log(valuesMap);
    let valuesFilter = values.filter((n) => {return n > 30});
    console.log(valuesFilter);
};