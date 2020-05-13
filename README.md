# highdividend
Initial function is to spot the high yield dividend stock in HKEX by month, also provide the historical dividend of input stock symbol.

Below framework/lib used in the project:-
springboot/JPA
reactjs/webpack
graphql-spring boot
mongodb-spring boot

Below is the guide to refer during the development.
GraphQL+Spring Boot+Maven
https://dzone.com/articles/a-beginners-guide-to-graphql-with-spring-boot

GraphQL+MongoDB+SPring boot+Maven
https://bezkoder.com/spring-boot-graphql-mongodb-example-graphql-java/

From building docker image to push to AWS repository
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html

Fullstack app include spring boot + reactjs
https://medium.com/@mukundmadhav/build-and-deploy-react-app-with-spring-boot-and-mysql-6f888eb0c600

My feeling after complete the intial part of this project:-
1,JPA is similar as .net entity framework, ORM to database.
2,There is no difference between web client side and desktop client side, except the message queue, and the low level API.
3,GraphQL is good thing, only need to provide one REST API as entry point (localhost:8080/graphiql/api)
4,IOC,AOP from spring boot is the way to maintan and construct the code, as time pass, or change the other langauge(golang), it will go away,
no need spend too much time, just get an idea is enough(think about AtiveX,COM in c++)
