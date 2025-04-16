# Tesisquare Data Analysis Project

**Comprehensive Supply Chain Data Analysis & Visualization**

## 🎯 Project Overview

This project analyzes a dataset from Tesisquare to identify trends and optimization opportunities in logistics operations. The analysis focuses on delivery times, distances, and patterns across different service types.

## Dataset Overview
The original dataset contains 14,554 entries with 15 columns including:

- Service types (E-commerce, Courier, Road Transport)
- Vehicle types
- Origin and destination information (countries, ZIP codes)
- Shipping details (dates, weights, volumes)
- Delivery metrics (distance, time, day of week)

## Data Preparation Process

### Data Cleaning:
- Handled missing values in SERVICETYPE and VEHICLETYPE using machine learning (RF classifier)
- Filled missing DECLARED_DISTANCE_KM values using geographical coordinates
- Corrected negative delivery times by swapping dates
- Removed outliers for more accurate modeling

### Data Segmentation:
- Split data by service type:
  - E-commerce: 9,028 entries (62%)
  - Express Couriers: 2,875 entries (20%)
  - Road Transport: 1,863 entries (13%)

- Split data by country pairs:
  - IT-IT: 11,755 entries (81%)
  - US-US: 2,225 entries (15%)
  - Mixed (IT-US/US-IT): 574 entries (4%)

## Key Findings

### Correlation Analysis
The analysis revealed significant correlations between:
- Day of week (WDAY) and delivery time
- Declared distance and delivery time
- Weight metrics and volume

### Delivery Time Patterns

#### Weekend Effect:
- Shipments closer to weekends have longer delivery times
- This effect is strongest for Courier and Road Transport services

#### Service Type Comparison:
- E-commerce: Maintains consistent delivery operations throughout the week
- Road Transport: Shows significant increases in delivery time for Thursday and Friday shipments
- Courier Services: Shows moderate increases for mid-week shipments

#### Geographical Analysis:
- Created visualizations showing delivery routes for different regions
- Domestic deliveries (IT-IT, US-US) follow more predictable patterns than international ones

## Predictive Model Development
A machine learning model was created to predict:
- Delivery distance based on origin and destination
- Delivery time based on service type, vehicle type, and day of week

The model:
- Uses Gradient Boosting Regressor for both distance and time predictions
- Accounts for weekend adjustments based on service type
- Includes business logic for work hours and non-working days
- Achieved 100% accuracy for distance prediction and 56% for time prediction

### Example Prediction
For a Courier service from IT (62010) to IT (22100) departing on 2023-01-10:
- Predicted distance: 427.3 km
- Predicted delivery time: 31 working hours (4 days)
- Expected arrival date: 2023-01-16 (adjusted for weekend)

## Conclusions

1. **Service Type Impact**: E-commerce services demonstrate the most consistent delivery performance, while Road Transport and Courier services show greater variability influenced by day of week.
2. **Weekend Effect**: There is a clear pattern of increased delivery times for shipments scheduled close to weekends, with some service types not operating at all on weekends.
3. **Predictive Power**: The model can accurately predict distances between ZIP codes, making it useful for route planning and optimization.
4. **Time Prediction Challenges**: The moderate accuracy (56%) for time prediction suggests that factors beyond distance and service type impact delivery times, such as traffic conditions, warehouse operations, and staffing levels.
5. **Business Applications**: This model could help logistics companies:
   - Optimize shipping schedules away from peak days
   - Provide more accurate delivery estimates to customers
   - Identify inefficient routes or service types
   - Better plan staffing and resource allocation

6. **Model Limitations**: The time prediction could be improved by incorporating more dynamic variables such as seasonal factors, regional traffic patterns, and handling times at distribution centers.

The analysis has successfully transformed raw shipping data into actionable insights that can improve customer satisfaction through more accurate delivery estimates and help optimize operational efficiency in logistics operations.

## 🔧 Technologies & Methods
- **Languages**: Python
- **Development**: Jupyter Notebooks, Git version control
- **Data Processing**: pandas, NumPy
- **Visualization**: matplotlib, seaborn
- **Machine Learning**: scikit-learn

## 📂 Project Structure
```
project/
├── 📁 website/             # Interactive dashboard
│   ├── index.html          # Main dashboard page
│   └── assets/             # CSS, JS, and static resources
├── 📁 data/                # Data files
│   ├── raw/                # Original unmodified data
│   └── processed/          # Cleaned and transformed datasets
├── 📁 notebooks/           # Jupyter analysis notebook
│   └── notebook.ipynb
├── 📁 reports/             # Results and deliverables
├── requirements.txt        # list of python libraries used in the project
└── README.md               # Project documentation
```

## 🚀 Getting Started
1. **Environment Setup**:
   ```bash
   git clone https://github.com/vittoriofino/tesisquare_analysis.git
   cd tesisquare-analysis
   pip install -r requirements.txt
   ```

2. **Run Analysis**:
   ```bash
   jupyter notebook notebooks/notebook.ipynb
   ```

3. **View Results**:
   - Open `website/index.html` in a browser
   - Explore the PDF reports in the `reports` directory

## 👥 Team Members
- Vittorio Fino
- Luca Grosso 
- Beatrice Risso
- Francesco Torterolo
- Lorenzo Bruno
- Rebecca Simondi
- Viola Peruzzi

## 🙏 Acknowledgments
Special thanks to Tesisquare for providing the dataset. We appreciate the guidance from our instructors at ITIS Mario Delpozzo who supported our analytical approach and methodology.

---
© 2025 Tesisquare Data Analysis Team | For questions, contact: vittoriofino06@gmail.com
