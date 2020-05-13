package equityhunter.highdividend.dao.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import equityhunter.highdividend.dao.entity.HistDividend;

@Repository
public interface HistDividendRepository extends MongoRepository<HistDividend, String> {

	 @Query("{'symbol': ?0}")
	 List<HistDividend> findEventDatasBySymbol(String symbol_);

}
