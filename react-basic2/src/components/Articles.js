import React from "react";

function Articles({ articles, sortName }) {
  const sortBy = () => {
    // console.log(articles);
    // console.log(sortName);
    if (sortName === "votes") {
      articles = articles.sort(function (a, b) {
        return b.upvotes - a.upvotes;
      });
    } else if (sortName === "downVotes") {
      articles = articles.sort(function (a, b) {
        return b.upvotes - a.upvotes;
      });
    } else {
      articles = articles.sort(function (a, b) {
        // console.log(a.date, b.date);
        return new Date(b.date) - new Date(a.date);
      });
    }
    // console.log(articles);
  };

  const ItemList = () => {
    sortBy(articles);
    return articles.map((article) => (
      <tr data-testid="article" key={`article-index ${article.title}`}>
        <td data-testid="article-title">{article.title}</td>
        <td data-testid="article-upvotes">{article.upvotes}</td>
        <td data-testid="article-date">{article.date}</td>
      </tr>
    ));
  };

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
          <ItemList />
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Articles;
