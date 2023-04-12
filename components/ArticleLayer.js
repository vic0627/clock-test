import CLOCK from "../modules/main.js";
const { $$, app, reCall } = CLOCK;

const articleLayer = new $$("div", { class: "layer-article" });

const articleTitle = new $$("div", { class: "article-title" }).addTo(
  articleLayer
);

const articleText = new $$("div", { class: "article-text" }).addTo(
  articleLayer
);

const ArticleLayer = ({ article, title }) => {
  let articleArr = [...article];
  console.log(articleArr.shift())
  articleLayer.addTo(app);
  let ts = "";
  reCall((timer) => {
    ts += articleArr.shift();
    articleText.text(ts);
    if (articleArr.length === 0) clearInterval(timer);
  }, 100);
  return {
    articleLayer,
    articleTitle,
    articleText,
  };
};
export default ArticleLayer;
