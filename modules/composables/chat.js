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
            "content":"What happend in ${date}?"
          }]
        }`,
});

fetch("https://openai80.p.rapidapi.com/chat/completions", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
