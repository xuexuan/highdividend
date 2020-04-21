package equityhunter.highdividend.service;

import java.util.List;

import equityhunter.highdividend.dao.entity.EquityStatics;

public interface EquityStaticsProvider {

	List<EquityStatics> getStatics(String month_);
}
