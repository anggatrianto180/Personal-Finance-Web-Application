const updateAnalysisCards = (months, incomeTotals, expenseTotals) => {
    // Find highest income
    const maxIncome = Math.max(...incomeTotals);
    const maxIncomeIdx = incomeTotals.indexOf(maxIncome);
    const maxIncomeMonth = months[maxIncomeIdx];
    
    // Find highest expense
    const maxExpense = Math.max(...expenseTotals);
    const maxExpenseIdx = expenseTotals.indexOf(maxExpense);
    const maxExpenseMonth = months[maxExpenseIdx];
    
    // Calculate average monthly savings
    const monthlySavings = months.map((_, i) => incomeTotals[i] - expenseTotals[i]);
    const avgSavings = monthlySavings.reduce((a, b) => a + b, 0) / months.length;

    // Update the DOM
    const formatDate = (monthStr) => {
        const [y, m] = monthStr.split('-');
        return new Date(y, parseInt(m,10)-1).toLocaleString('en-US', { month: 'long', year: 'numeric' });
    };
    
    const formatCurrency = (amount) => new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0 
    }).format(amount);

    // Update highest income card
    document.getElementById('highest-income').textContent = formatCurrency(maxIncome);
    document.getElementById('highest-income-month').textContent = formatDate(maxIncomeMonth);

    // Update highest expense card
    document.getElementById('highest-expense').textContent = formatCurrency(maxExpense);
    document.getElementById('highest-expense-month').textContent = formatDate(maxExpenseMonth);

    // Update average savings card
    document.getElementById('average-savings').textContent = formatCurrency(avgSavings);
};

export { updateAnalysisCards };
