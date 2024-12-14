export function setInShopBasket(obj) {
    let oldArr = getInShopBasket();
    if (oldArr != null) {
        let index = oldArr.findIndex(
            (item) => item.id == obj.id,
        );
        index == -1
            ? oldArr.push(obj)
            : (oldArr[index] = obj);
    } else {
        oldArr = [];
        oldArr.push(obj);
    }
    localStorage.shopBasket = JSON.stringify(oldArr);
    console.log(oldArr, 'shopBasket');
}

export function removeInShopBasket(id) {
    let oldArr = getInShopBasket();

    let newArr = oldArr.filter(item => item.id != id);

    localStorage.shopBasket = JSON.stringify(newArr);
}

export function getInShopBasket() {
    let l = localStorage.getItem('shopBasket');
    return JSON.parse(l);
}
