function detectAIContent() {
    const doc = DocumentApp.getActiveDocument();
    const body = doc.getBody();
    const text = body.getText();
    
    const aiKeywords = ['artificial intelligence', 'machine learning', 'neural network'];
    
    let hasAIContent = false;
    
  
    aiKeywords.forEach(keyword => {
      if (text.toLowerCase().includes(keyword)) {
        hasAIContent = true;
      }
    });
    
    if (hasAIContent) {
      // Implement action (e.g., notify, restrict access, etc.)
      Logger.log('AI-related content detected!');
    }
    
    var aiDetected = checkForAi(text);
  
    if (aiDetected) {
      DocumentApp.getUi().alert('Ai detected!'); 
    } else {
      DocumentApp.getUi().alert('No Ai detected.');
    }
  
    function checkForAi(text) {
      // Implement your plagiarism detection logic here
      // For simplicity, let's assume plagiarism if the text contains a specific phrase
      var referencePhrase = "Lorem ipsum dolor sit amet";
    
      // Check if the reference phrase is present in the text
      if (text.indexOf(referencePhrase) !== -1) {
        return true; // Ai detected
      } 
      else {
        return false; // No Ai detected
    }
  }
  }
  