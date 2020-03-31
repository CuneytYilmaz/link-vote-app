import { addLinkToLocalStorage } from '../utils/api'
import { addLink } from './links'

export function handleAddLink (linkName, linkURL) {
    return (dispatch) => {

        const newLink = {
            id: new Date().getTime(),
            name: linkName,
            url: linkURL,
            point: 0,
            modifiedDate: new Date().getTime()
        }

        // TODO: Catch methodu yazılacak, Loading bar eklenebilir
        return addLinkToLocalStorage(newLink)
          .then((link) => {
            dispatch(addLink(link))  
          })
  }
}