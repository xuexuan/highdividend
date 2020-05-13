package equityhunter.highdividend.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import equityhunter.highdividend.dao.entity.EquityStatics;
import equityhunter.highdividend.dao.entity.HistDividend;
import equityhunter.highdividend.dao.entity.HistDividendEventData;
import equityhunter.highdividend.dao.repository.HistDividendRepository;

@Service
public class EquityStaticsService {

		Logger _log = LoggerFactory.getLogger(EquityStaticsService.class);
		@Autowired
	    //@Qualifier("EquityStaticsProvider")
		EquityStaticsProvider _provider;
		
		private final HistDividendRepository _repo;
		
		public EquityStaticsService(final HistDividendRepository repo_)
		{
			this._repo = repo_;
		}
		
		
		@Transactional(readOnly = true)
	    public List<EquityStatics> getEquities(final String month_) {
	        List<EquityStatics> month_list = _provider.getStatics(month_);
	        return month_list;
	    }
		//get real time price
		//get weight value
		
		public List<HistDividendEventData> getHistDividend(final String symbol_){
			//filter with symbol to get eventdatas
			//Collection<HistDividend> data_list = _repo.findAll().stream().filter(s->s.getSymbol().contentEquals(symbol_)).collect(Collectors.toList());
			//_log.info("count of HistDividend list: "+ data_list.size());
			//List<HistDividendEventData> dividend_list = data_list.iterator().next().getEventsData();
			//_log.info("count of event data list: "+ dividend_list.size());
			List<HistDividend> dividend = _repo.findEventDatasBySymbol(symbol_);
			if (dividend == null || dividend.isEmpty())
			{
				//add throw exception
				_log.error("fail to get list of history dividend data");
				return new ArrayList<HistDividendEventData>();
			}
			else
			{
				List<HistDividendEventData> eventsdata = dividend.get(0).getEventsData();
				for(HistDividendEventData d: eventsdata)
				{
					Date date = new Date(Integer.parseInt(d.getDate()) *1000L);
					SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd");
					d.setDate(sdf.format(date));
				}
				
				_log.info("count of eventsdata is "+ eventsdata.size());
				return eventsdata;
			}
		}

}
