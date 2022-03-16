import {AUTH_DATA, SEARCH_ENDPOINT} from "../common/constants";

const handleDataFetching = async ({text, search: {ageSpan, titleOptions, genderOptions}}) => {
    try {
        const body = {
            size: 100,
            query: {
                bool: {
                    must: [
                        {
                            terms: {
                                "title.keyword": titleOptions
                            }
                        },
                        {
                            terms: {
                                gender: genderOptions
                            }
                        }
                    ],
                    filter: [
                        {
                            range: {
                                experience_years: ageSpan
                            }
                        }
                    ]
                }
            }
        }

        if (text) body.query.bool.must.push({
            multi_match: {
                query: text,
                fields: [
                    "first_name",
                    "last_name",
                    "country"
                ]
            }
        })

        const searchResultRaw = await fetch(`${SEARCH_ENDPOINT}/_search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: AUTH_DATA,
            },
            body: JSON.stringify(body)
        })

        const result = await searchResultRaw.json()

        return result.hits.hits
    } catch (error) {
        console.error(error.message)
    }
}

export default handleDataFetching