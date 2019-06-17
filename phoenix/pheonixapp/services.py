def get_flights(Country):
    url = 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com' 
    params = {'Country': Country}
    r = requests.get(url, params=params)
    flights = r.json()
    flights_list = {'flights':flights['Query']}
    return flights_list