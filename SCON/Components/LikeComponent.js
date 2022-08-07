import AsyncStorage from '@react-native-community/async-storage'
import { ApiFetch } from './API/ApiFetch'

export function LikeComponent(ilike, url) {
    const type = ilike ? 'DELETE' : 'POST'
    var apiUrl = '/like/' + url
    AsyncStorage.getItem('accessToken')
        .then((thing) => {
            ApiFetch({
                method: type,
                url: apiUrl,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + thing,
                },
                body: null,
            }).then(() => {
                // console.log("Like", thing)
            })
        })
}
