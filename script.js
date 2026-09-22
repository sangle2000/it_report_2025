// Common Chart.js Configuration for Dark Theme
Chart.defaults.color = '#94a3b8';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.scale.grid.color = 'rgba(255, 255, 255, 0.05)';
Chart.defaults.scale.grid.borderColor = 'rgba(255, 255, 255, 0.1)';

const chartColors = {
    blue: '#3b82f6',
    purple: '#8b5cf6',
    pink: '#ec4899',
    rose: '#f43f5e',
    emerald: '#10b981',
    amber: '#f59e0b'
};

const gradientBackground = (ctx, colorStr) => {
    const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
    // Convert hex to rgb for rgba
    let hex = colorStr.replace('#', '');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);
    
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.8)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.1)`);
    return gradient;
};

// 1. Chart: Lương theo thành phố (Bar)
const cityCtx = document.getElementById('citySalaryChart').getContext('2d');
new Chart(cityCtx, {
    type: 'bar',
    data: {
        labels: ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng'],
        datasets: [{
            label: 'Mức lương TB 2025 (Triệu VNĐ)',
            data: [44.9, 40.5, 39.6],
            backgroundColor: [
                chartColors.blue,
                chartColors.purple,
                chartColors.pink
            ],
            borderRadius: 8,
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleFont: { size: 14, family: "'Inter', sans-serif" },
                bodyFont: { size: 14, family: "'Inter', sans-serif" },
                padding: 12,
                cornerRadius: 8,
                displayColors: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 50,
                ticks: { stepSize: 10 }
            }
        }
    }
});

// 2. Chart: Top 5 Vị trí Hot (Horizontal Bar)
const rolesCtx = document.getElementById('rolesChart').getContext('2d');
new Chart(rolesCtx, {
    type: 'bar',
    data: {
        labels: ['Back-end', 'Full-stack', 'Front-end', 'Business Analyst', 'Tester/QA-QC'],
        datasets: [{
            label: 'Nhu cầu tuyển dụng (%)',
            data: [54.2, 45.8, 31.3, 22.9, 21.7],
            backgroundColor: function(context) {
                const chart = context.chart;
                const {ctx, chartArea} = chart;
                if (!chartArea) return null;
                return chartColors.emerald;
            },
            borderRadius: 8
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                padding: 12,
                cornerRadius: 8
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 60
            }
        }
    }
});

// 3. Chart: Lương theo loại hình công ty (Bar)
const companyCtx = document.getElementById('companyTypeChart').getContext('2d');
new Chart(companyCtx, {
    type: 'bar',
    data: {
        labels: [['IT Services', '& Consulting'], 'IT Product', 'Non-IT', ['IT', 'Outsourcing']],
        datasets: [{
            label: 'Mức lương TB (Triệu VNĐ)',
            data: [48.2, 43.9, 43.0, 39.7],
            backgroundColor: chartColors.amber,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 30,
                max: 55
            }
        }
    }
});

// 4. Chart: Nhu cầu theo cấp bậc (Doughnut)
const levelCtx = document.getElementById('levelChart').getContext('2d');
new Chart(levelCtx, {
    type: 'doughnut',
    data: {
        labels: ['Middle', 'Senior', 'Khác (Lead, Manager)', 'Junior', 'Fresher'],
        datasets: [{
            data: [76.8, 62.2, 44.0, 32.9, 26.8],
            backgroundColor: [
                chartColors.blue,
                chartColors.purple,
                chartColors.pink,
                chartColors.emerald,
                chartColors.amber
            ],
            borderWidth: 2,
            borderColor: '#1e293b'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: '#f8fafc',
                    font: { size: 12 }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return ' ' + context.label + ': ' + context.raw + '%';
                    }
                }
            }
        }
    }
});
