const readline = require('readline-sync')

const calculateBMI = () => {
  const weight = readline.questionFloat('What\'s your weight? ');
  const height = readline.questionInt('What\'s your height? ')
  const bmi = weight / Math.pow(height / 100, 2)
  console.log('Your BMI is ' + bmi);
  if (bmi < 18.5) {
    console.log('Status: Underweight (thin)');
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log('Status: Normal weight');
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log('Status: Overweight (overweight)');
    return;
  }

  if (bmi >= 30 && bmi < 35) {
    console.log('Status: Grade I obesity');
    return;
  }

  if (bmi >= 35 && bmi < 40) {
    console.log('Status: Grade II obesity');
    return;
  }

  console.log('Status: Obesity grades III and IV');
  };

calculateBMI();