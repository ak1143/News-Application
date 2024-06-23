
const getNews = async (category, page, pageSize) => {

   try {
    // const [data, setData]=useState({});

    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3205c8f703784771822315afe1feb304}&page=${page}&pageSize=${pageSize}`);
    
    const final_data = await data.json();

    return{
        articles:final_data?.articles,
        totalResult:final_data?.totalResult
    }
   } catch (error) {
        console.log(error,"error in custom hook");
   }   
}

export default getNews;