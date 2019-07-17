import { matrixAdd, matrixMultiply } from '../../线性代数/2矩阵及其运算/js/matrix';

const detArray2 = [[3, -2], [2, 1]],
	detArray3 = [[1, 4], [2, 5], [3, 6]],
	detArray4 = [[3, -2], [2, 1]],
	detArray5 = [[1, 2, 3], [4, 5, 6]],
	detArray6 = [[1, 1, 1], [2, 2, 2], [1, 1, 1]],
	detArray7 = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];

describe('矩阵', () => {
	it('相加', () => {
		console.log(matrixAdd(detArray2, detArray4));
		expect(matrixAdd(detArray2, detArray4)).toEqual([[6, -4], [4, 2]]);
	});

	it('相乘', () => {
		console.log(matrixMultiply(detArray3, detArray5));
		console.log(matrixMultiply(detArray6, detArray7));
		expect(matrixMultiply(detArray6, detArray7)).toEqual([[6, 6, 6], [12, 12, 12], [6, 6, 6]]);
	});
});
