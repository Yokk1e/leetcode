function maximumWealth(accounts: number[][]): number {
    let maxValue = 0;
      accounts.forEach((account) => {
        const value = account.reduce((pre, cur) => pre + cur, 0);
        if (value > maxValue) {
          maxValue = value;
        }
      });
      return maxValue;
};