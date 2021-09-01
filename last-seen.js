export const LASTSEEN = 'LAST-SEEN';

export function setLastSeen(arr){
    let acc = [];

    arr.forEach(item =>{
        const newObj = 
        {
            id: item.id
        };
        acc.push(newObj);
    });

    const stringyArr = JSON.stringify(acc);
    localStorage.setItem(LASTSEEN, stringyArr);
}


export function getLastSeen(){
    const stringyArr = localStorage.getItem(LASTSEEN);
    const finalArr = JSON.parse(stringyArr);

    return finalArr;
}

