package com.linearAlgebra.determinant.service;

import com.linearAlgebra.determinant.entity.Determinant;

public interface DeterminantService {
	/**
	 * 二阶行列式
	 * @param determinant
	 * @return
	 */
	public int secondOrderDeterminant(Determinant determinant);
	/**
	 * 三阶行列式
	 * @param determinant
	 * @return
	 */
	public int thirdOrderDeterminant(Determinant determinant);
	
	/**
	 * n阶行列式
	 * @param determinant
	 * @return
	 */
	public int multiOrderDetermainant(Determinant determinant);
	
}
