# Introduction

Just imagine you are HR. And this full-stack application is aimed to alleviate your working process! It's a web developers database, powered by ElasticSearch searching engine. It's really cool technology you need to pay attention to.

ElasticSearch has recommended itself as a swift and smart searching solution with complicated queries, aggregation data, suggestions, fuzzy search, location search, etc. It can be much faster in response latency compared to a regular database and can be easily scalable at any time with no limitations.

# Functionality

1. Search engine looks for matches in the next fields: `Name`, `Surname`, `Country`. You can type your query in any order.
2. Application possesses an auto guessing feature. Which means it makes guesses before you finish input.
3. Application has a nice almost immediate response time on your actions.
4. You have a dashboard panel at the main screen, where you can define some additional lookup options:
    - filter developers by the desired title;
    - filter developers by gender;
    - filter developers by working experience.
5. To estimate search relevance in the top left corner of each developer card exists a score tag.
6. Possible options for the dashboard the application takes automatically as metadata from the first server response.