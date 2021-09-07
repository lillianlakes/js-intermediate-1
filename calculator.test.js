it('should calculate the monthly rate correctly', function () {
  expect(calcMonthlyPayment(50000, 8, 2)).toEqual('564.04');
  expect(calcMonthlyPayment(100000, 10, 5)).toEqual('1060.66');
});