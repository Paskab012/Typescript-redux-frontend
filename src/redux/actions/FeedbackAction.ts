
import {ADD_COUNTRY_TO_BUZ, REMOVE_COUNTRY_FROM_BUZ, BuzCountry, FeedbackActions} from '../../types'

//Add country to BUzzz
export function addCountryToBuz(country:BuzCountry):FeedbackActions{

    return {
        type: ADD_COUNTRY_TO_BUZ,
        payload:country
    }

}

//Remove country from the card

export function removeCountryToBuz(country:BuzCountry):FeedbackActions{

    return {
        type: REMOVE_COUNTRY_FROM_BUZ,
        payload:country
    }

}