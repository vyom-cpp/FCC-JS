function palindrome(input) {
    // Convert input to string
    input = String(input);
    
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInput = input.replace(/[^a-z0-9]/ig, '').toLowerCase();
    
    // Reverse the string
    const reversedInput = cleanInput.split('').reverse().join('');
    
    // Check if the original and reversed strings are equal
    return cleanInput === reversedInput;
}