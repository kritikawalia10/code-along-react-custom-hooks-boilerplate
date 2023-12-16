import {useEffect, useState} from 'react'

function CustomHooks(key, value) {
    const getData = () => {
        const storeData = JSON.parse(localStorage.getItem(key)) || JSON.parse(sessionStorage.getItem(key));
        return storeData  ||value;
    }
    const [item, setItem] = useState(getData);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(item));
        sessionStorage.setItem(key, JSON.stringify(item));
    }, [key,item])
  return [item, setItem];
}

export default CustomHooks

