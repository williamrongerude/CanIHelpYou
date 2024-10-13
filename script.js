async function respond() {
    const question = document.getElementById('question').value;
    const character = document.getElementById('character');

    const API_KEY = 'will insert my api key';

    try (
        const response = await fetch ('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ${API_KEY}'
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: question,
                max_tokens: 150,
                temperature: 0.7
        })
        });

        const data = await response.json();
        const aiResponse = data.choices[0].text.trim();

        document.getElementById('ai-response').innerText = aiResponse;

        character.classList.remove('nod', 'wave', 'shrug');
        character.classList.add('nod');

    ) catch (error) {
        console.error('Error:', error);
    }

    document.getElementById('question').value = ';'
}
