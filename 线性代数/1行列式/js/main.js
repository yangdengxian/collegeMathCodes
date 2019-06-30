/**
 * 二阶行列式计算
 * @description |a11 a12|
 *              |a21 a22|
 * 对角线法则
 * @param {Array} detArray 二维数组 [[a11, a12],[a21,a22]]
 * @returns a11 * a22 - a12 * a21
 */
function secondOrderDeterminant(detArray) {
	var result = null;
	if (detArray) {
		result = detArray[0][0] * detArray[1][1] - detArray[0][1] * detArray[1][0];
	}

	return result;
}

/**
 * 三阶行列式计算
 * @description |a11 a12 a13|
 *              |a21 a22 a23|
 *              |a31 a32 a33|
 * 对角线法则
 * @param {Array} detArray 二维数组 [[a11, a12, a13],[a21, a22, a23],[a31, a32, a33]]
 * @returns a11 * a22 * a33 + a12 * a23 * a31 + a13 * a32 * a21 - a13 * a22 * a31 - a12 * a21 * a33 - a11 * a32 * a23
 */
function thirdOrderDeterminant(detArray) {
	var result = null;
	if (detArray) {
		result =
			detArray[0][0] * detArray[1][1] * detArray[2][2] +
			detArray[0][1] * detArray[1][2] * detArray[2][0] +
			detArray[0][2] * detArray[2][1] * detArray[1][0] -
			detArray[0][2] * detArray[1][1] * detArray[2][0] -
			detArray[0][1] * detArray[1][0] * detArray[2][2] -
			detArray[0][0] * detArray[2][1] * detArray[1][2];
	}

	return result;
}

function test() {
	var detArray2 = [[3, -2], [2, 1]],
		detArray3 = [[1, 2, -4], [-2, 2, 1], [-3, 4, -2]],
		detArrayn = [];
	console.log(
		'二阶行列式计算：' +
			secondOrderDeterminant(detArray2) +
			'\n' +
			'三阶行列式计算：' +
			thirdOrderDeterminant(detArray3) +
			'\n'
	);
}
test();
