function calculateBudget() {
    const budget = parseFloat(document.getElementById('budget').value);
    
    if (!isNaN(budget)) {
        const needs = (budget * 0.50).toFixed(2);
        const savings = (budget * 0.30).toFixed(2);
        const wants = (budget * 0.20).toFixed(2);
        
        document.getElementById('needs').textContent = `₱${needs}`;
        document.getElementById('savings').textContent = `₱${savings}`;
        document.getElementById('wants').textContent = `₱${wants}`;
    } else {
        alert("Please enter a valid number");
    }
}
