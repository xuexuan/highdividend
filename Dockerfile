From openjdk:8
copy ./target/highdividend-0.0.1-SNAPSHOT.jar highdividend-0.0.1-SNAPSHOT.jar	
CMD ["java","-Dspring.profiles.active=prod","-jar","highdividend-0.0.1-SNAPSHOT.jar"]