package equityhunter.highdividend.query;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import equityhunter.highdividend.dao.entity.EquityStatics;
import equityhunter.highdividend.service.EquityStaticsService;

@Component
public class EquityStaticsQuery implements GraphQLQueryResolver {

	@Autowired
	private EquityStaticsService _service;
	Logger _log = LoggerFactory.getLogger(EquityStaticsQuery.class);
	
	public List<EquityStatics> getEquities(String month_) {
		_log.info("query the parameter: "+month_);
        return this._service.getEquities(month_);
    }
}
