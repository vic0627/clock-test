const createOptions = (date = "1989-06-04") => ({
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "7ad046c0a3msh7fdf98961eb05bap1da5bcjsnb0088430a4f4",
    "X-RapidAPI-Host": "openai80.p.rapidapi.com",
  },
  body: `{
          "model":"gpt-3.5-turbo",
          "messages":[{
            "role":"user",
            "content":"What happend on ${date}? Response in js object which includes three different keys, 'title', 'article', 'description'. The 'article' must be over 100 words, and the 'description' is a description of the most impotant object or scene that appears in the 'article'."
          }]
        }`,
  // body: `{
  //         "model":"gpt-3.5-turbo",
  //         "messages":[{
  //           "role":"user",
  //           "content":"Response in js object which includes three different keys, 'title', 'article', 'description'. Total words do not over 50."
  //         }]
  //       }`,
});

const fetchChat = (date = "1989-6-4") => {
  fetch("https://openai80.p.rapidapi.com/chat/completions", createOptions(date))
    .then((response) => response.json())
    .then((response) => console.log(JSON.parse(response.choices[0].message.content)))
    .catch((err) => console.error(err));
};
export { fetchChat };
