/**Input: we have string
 * Output: how many words? how many time it displays?
 * .split(" ") -> ['as' , ' sda' , 'sad']
 * for i: loop through that result string
 *    filter resultString, condition index[0], count = length -> Map(word, count)
 * */

const myString = "Hello hello hello, I'm here here today, it's for you for."
getAndCountWord(myString);


function getAndCountWord(string) {

    const normalizedString = string.replaceAll(/[^\w\s']/g, "");
    const splitString = normalizedString.split(" ");
    console.log(splitString);

    const mapResult = new Map([]);

    for (let index = 0; index < splitString.length; index++) {

        let strIndex = splitString[index];
        let strFilter = splitString.filter((value) => value === strIndex);
        console.log(strIndex);
        console.log(strFilter);
        console.log(mapResult.has(strIndex))

        if (strFilter !== null && !mapResult.has(strIndex)) {
            mapResult.set(strIndex, strFilter.length);
        }
    }

    console.log(mapResult);
}