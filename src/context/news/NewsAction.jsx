export const fetchNews = async (topic)=>{
    
  const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-27-04&sortBy=publishedAt&apiKey=77591329745447bf8879d4932d994aa3`);
   const data = await response.json();
    return data.articles

}