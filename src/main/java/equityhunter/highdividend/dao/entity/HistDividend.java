package equityhunter.highdividend.dao.entity;

import java.util.List;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "dividendhist")
public class HistDividend {
	@Id
	private String id;
	private String symbol;
	private List<HistDividendEventData> eventsData;
	
}

