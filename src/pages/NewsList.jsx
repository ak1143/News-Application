import React, { useEffect, useState } from "react";
import FirstPostCard from "../components/PostCard/FirstPostCard";
import Spinner from "../components/Spinner/Spinner.jsx";
import getNews from "../api/getNews.js";
import SecondPostCard from "../components/PostCard/SecondPostCard.jsx";

export default function NewsList({ category }) {
  const [news, setNews] = useState([]);
  const [pageSize] = useState(20);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (page) => {
    try {
      setLoading(true);
      const data = await getNews(category, page, pageSize);
      setNews(data?.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = async (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      await fetchNews(page - 1);
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    setPage((prevPage) => prevPage + 1);
    await fetchNews(page + 1);
  };

  useEffect(() => {
    fetchNews(page);
  }, [page, category]); // Include category in dependencies to fetch new news when category changes

  return (
    <div className="w-full flex flex-col items-center bg-gray-900 text-white">
      {!loading && news.length > 0 ? (
        <>
          <div className="w-full grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 border-none">
              {/* Conditional rendering based on category */}
              {category === "general" && news.length > 0 ? (
                <FirstPostCard article={news[0]} />
              ) : (
                news.map((article, i) => (
                  <div className="col-md-4" key={i}>
                    <SecondPostCard article={article} />
                  </div>
                ))
              )}
          </div>


          <div className="w-3/4 flex mx-auto">
            {page > 1 && (
              <button
                className="p-2 rounded-lg bg-yellow-300 text-black w-max m-3 mb-5 disabled:opacity-80 font-bold"
                onClick={handleBack}
                disabled={page <= 1 || !news.length}
              >
                Back
              </button>
            )}
            {news.length >= pageSize && (
              <button
                className="p-2 rounded-lg bg-yellow-300 text-black w-max m-3 mb-5 disabled:opacity-80 font-bold"
                onClick={handleNext}
                disabled={news.length < pageSize || !news.length}
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="h-[500px] flex items-center justify-center mx-auto">
          <Spinner />
        </div>
      )}
    </div>
  );
}
