function calculateGrade(event) {
    event.preventDefault();

    // Get input values
    const obtained = parseFloat(document.getElementById('obtained').value);
    const total = parseFloat(document.getElementById('total').value);

    // Validate inputs
    if (isNaN(obtained) || isNaN(total) || total <= 0) {
        alert('Please enter valid numbers for both fields.');
        return;
    }

    if (obtained > total) {
        alert('Obtained marks cannot be greater than total marks.');
        return;
    }

    // Calculate percentage
    const percentage = (obtained / total) * 100;

    // grade using SWITCH CASE
    let grade, gradePoint, remarks;

    switch (true) {
        case (percentage >= 90):
            grade = 'A+';
            gradePoint = 4.0;
            remarks = 'Excellent';
            break;
        case (percentage >= 80):
            grade = 'A';
            gradePoint = 3.7;
            remarks = 'Outstanding';
            break;
        case (percentage >= 70):
            grade = 'B+';
            gradePoint = 3.3;
            remarks = 'Very Good';
            break;
        case (percentage >= 60):
            grade = 'B';
            gradePoint = 3.0;
            remarks = 'Good';
            break;
        case (percentage >= 50):
            grade = 'C+';
            gradePoint = 2.7;
            remarks = 'Satisfactory';
            break;
        case (percentage >= 40):
            grade = 'C';
            gradePoint = 2.3;
            remarks = 'Average';
            break;
        case (percentage >= 33):
            grade = 'D';
            gradePoint = 2.0;
            remarks = 'Pass';
            break;
        default:
            grade = 'F';
            gradePoint = 0.0;
            remarks = 'Fail - Needs Improvement';
            break;
    }

    // Update UI with results
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
    // document.getElementById('gradeText').textContent = `${grade} Grade - ${remarks}`;
    document.getElementById('gradeText').textContent = grade + " Grade - " + remarks;
    // document.getElementById('gradeText').className = `grade-text grade-${grade.charAt(0)}`;
    document.getElementById('gradeText').className = "grade-text grade-" + grade.charAt(0);

    document.getElementById('obtainedMarks').textContent = obtained;
    document.getElementById('totalMarks').textContent = total;
    document.getElementById('percentageValue').textContent = percentage.toFixed(2) + '%';
    document.getElementById('gradePoint').textContent = gradePoint.toFixed(1);

    // Add animation
    const gradeDisplay = document.getElementById('gradeDisplay');
    gradeDisplay.classList.remove('fade-in');
    void gradeDisplay.offsetWidth;
    gradeDisplay.classList.add('fade-in');
}

// Auto-focus on first input
document.getElementById('obtained').focus();