/**
 * 矩阵相加
 * @param {Array} matrixA
 * @param {Array} matrixB
 */
function matrixAdd(matrixA, matrixB) {
	if (matrixA.length !== matrixB.length) {
		throw Error('两矩阵行列数不一致');
	}
	return matrixA.map(function(arrayObj, i) {
		return arrayObj.map(function(value, j) {
			return value + matrixB[i][j];
		});
	});
}

/**
 * 矩阵相乘(复杂度有待优化)
 * @param {Array} matrixA eg：A3*2 [[1,4],[2,5],[3,6]]
 * @param {Array} matrixB eg: B2*3 [[1,2,3],[4,5,6]]
 * @description Am*n X Bn*m = Cm*m
 */
function matrixMultiply(matrixA, matrixB) {
	let matrixC = new Array(matrixA.length);
	if (!matrixA.length || !matrixB.length) {
		throw Error('矩阵不合理');
	}
	//构建数组
	matrixA.forEach((arrayObj, i) => {
		matrixC[i] = [];
		for (let index = 0; index < matrixB[0].length; index++) {
			matrixC[i].push(0);
		}
	});

	matrixC.forEach((array, i) => {
		matrixC[i].forEach((value, j) => {
			//注意，此处遍历，只是为获取matrixA[i]长度，累加数值
			matrixA[i].forEach((v, k) => {
				matrixC[i][j] += matrixA[i][k] * matrixB[k][j];
			});
			/* for (let index = 0; index < matrixC[i].length; index++) {
				cmatrixC[i][j] += matrixA[i][j] * matrixB[j][j]
			} */
			// matrixC[i][j] = matrixA[i][0] * matrixB[0][j] + matrixA[i][1] * matrixB[1][j] + matrixA[i][2] * matrixB[2][j];
		});
	});

	return matrixC;
}

export { matrixAdd, matrixMultiply };
