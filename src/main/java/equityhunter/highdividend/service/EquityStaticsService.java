package equityhunter.highdividend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import equityhunter.highdividend.dao.entity.EquityStatics;

@Service
public class EquityStaticsService {

		@Autowired
	    //@Qualifier("EquityStaticsProvider")
		EquityStaticsProvider _provider;
		public EquityStaticsService()
		{
		}
		
		
		@Transactional(readOnly = true)
	    public List<EquityStatics> getEquities(final String month_) {
	        List<EquityStatics> month_list = _provider.getStatics(month_);
	        return month_list;
	    }
		//get real time price
		//get weight value

}
