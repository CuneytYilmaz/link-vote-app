const STORAGE_KEY = 'LINK_VOTE_APP'

export function getLinkListFromLocalStorage () {
    let linkList = localStorage.getItem(STORAGE_KEY)

      if (linkList === null) {
        return []
      } 
      else {
        return JSON.parse(linkList)
    }
}

  export function addLinkToLocalStorage (link) {

    return new Promise((res, rej) => {
      let linkList = getLinkListFromLocalStorage()
      linkList.push(link)
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(linkList))
      res(link)
    })
    
  }