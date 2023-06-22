export const exerciseOptions = {
    method: 'GET',
    
    headers: {
        'X-RapidAPI-Key': '9fbbfa2780msha6bc53c2f38a2dfp1e465ejsnacf687a9a1a2',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    
    
    headers: {
      'X-RapidAPI-Key': '9fbbfa2780msha6bc53c2f38a2dfp1e465ejsnacf687a9a1a2',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}