package equityhunter.highdividend.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import equityhunter.highdividend.dao.entity.EquityStatics;


@Service()
@Profile("prod")
//think about how to use spring boot handle switch of implement for an interface
public class EquityStaticsProviderFromFiles implements EquityStaticsProvider {

	Hashtable<String, List<EquityStatics>> _pool = new Hashtable<String, List<EquityStatics>>();
	Logger _log = LoggerFactory.getLogger(EquityStaticsProviderFromFiles.class);
	EquityStaticsProviderFromFiles()
	{
		getFromFiles();
	}
	
	private void getFromFiles()
	{
		try
		{
			JSONParser parser = new JSONParser();
		
			String[] liststr = new String[]{"Apr_2020-04-08.json", "May_2020-04-08.json", "Jun_2020-04-08.json",
					"Jul_2020-04-08.json","Aug_2020-04-08.json","Sep_2020-04-08.json","Oct_2020-04-08.json","Nov_2020-04-08.json",
					"Dec_2020-04-08.json"};
			for(String s: liststr)
			{
				InputStream in = getClass().getClassLoader().getResourceAsStream("/equitydata/"+s);
				
				BufferedReader rdr = new BufferedReader(new InputStreamReader(in));
	        
				Object obj = parser.parse(rdr);
				
				@SuppressWarnings("unchecked")
				Set<String> keys = (Set<String>)((JSONObject)obj).keySet();
				List<EquityStatics> grp = new ArrayList<EquityStatics>();
				for (Iterator<String> it = keys.iterator(); it.hasNext();)
				{
					EquityStatics es = new EquityStatics();
					String symbol_key = it.next();
					JSONObject element = (JSONObject) ((JSONObject)obj).get(symbol_key);
					es.setSymbol(symbol_key);
					es.setFiftytwoweekhigh((String)element.get("52 Week High"));
					es.setFiftytwoweeklow((String)element.get("52 Week Low"));
					es.setExDividenddate((String)element.get("Ex-Dividend Date"));
					es.setFwddividendyield((String)element.get("Forward Annual Dividend Yield"));
					es.setPayoutratio((String)element.get("Payout Ratio"));
					grp.add(es);
				}
				String[] months = s.split("_");
				_pool.put(months[0], grp);
				
				_log.info(s + "loaded");
			}
			
		}
		catch(Exception e)
		{
			_log.error("Fail to get equity static data: "+e.getMessage());
		}
	}
	
	public List<EquityStatics> getStatics(String month_)
	{
		if (_pool.containsKey(month_))
			return _pool.get(month_);
		else
			return new ArrayList<EquityStatics>();
	}
}
