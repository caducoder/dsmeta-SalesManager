package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

// anotação que diz q é um componente
@Service
public class SaleService {
	
	// anotação para o spring injetar a dependência
	@Autowired
	private SaleRepository repository;

	public List<Sale> findSales() {
		return repository.findAll();
	}
}
