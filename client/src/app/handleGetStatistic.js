import {AUTH_DATA, SEARCH_ENDPOINT} from "../common/constants";

const handleGetStatistic = async () => {
    try {
        const body = JSON.stringify({
            size: 0,
            aggregations: {
                titles: {
                    terms: {
                        field: "title.keyword",
                        size: 100
                    }
                },
                experience: {
                    stats: {
                        field: "experience_years"
                    }
                },
                gender: {
                    terms: {
                        field: "gender",
                        size: 15
                    }
                }
            }
        })

        const searchResultRaw = await fetch(`${SEARCH_ENDPOINT}/_search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: AUTH_DATA
            },
            body
        })

        const result = await searchResultRaw.json()

        return result.aggregations
    } catch (error) {
        console.error(error.message)
    }
}

export default handleGetStatistic