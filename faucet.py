# Step-by-Step Guide to Build an API on Vercel to Scrape Data from https://0g.ai

# 1. Set Up Your Project
# Begin by creating a new Python project and install the required dependencies:

pip install requests beautifulsoup4 flask

# 2. Create the API Endpoint
# Create a new Python file named `scrape.py` to define your API endpoint:

# scrape.py
from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/api/scrape', methods=['GET'])
def scrape():
    if request.method != 'GET':
        return jsonify({"error": "Method Not Allowed"}), 405
    try:
        # Fetch the HTML content of the target URL
        response = requests.get('https://0g.ai')

        if response.status_code != 200:
            raise Exception('Failed to fetch data')

        data = response.text

        # Load the HTML into BeautifulSoup
        soup = BeautifulSoup(data, 'html.parser')

        # Extract specific data; for example, the page title
        title = soup.title.string.strip() if soup.title else 'No title found'

        # Send the extracted data as a JSON response
        return jsonify({"title": title}), 200
    except Exception as error:
        return jsonify({"error": str(error) or 'Error fetching data'}), 500

if __name__ == '__main__':
    app.run(debug=True)

# 3. Test Locally
# Run your development server to test the API locally:

python scrape.py

# Access the API at http://localhost:5000/api/scrape to see the scraped data.

# 4. Deploy to Vercel
# Initialize a Git repository, commit your code, and push it to a platform like GitHub. Then, deploy your application to Vercel:
# - Log in to Vercel and import your repository.
# - Follow the deployment prompts; Vercel will automatically detect your Flask application and deploy it.

# 5. Access Your Deployed API
# After deployment, your API will be accessible at https://your-vercel-app.vercel.app/api/scrape.

# Additional Considerations
# - Respect Website Terms: Ensure that scraping https://0g.ai complies with their robots.txt and terms of service.
# - Error Handling: Implement robust error handling to manage potential issues during the scraping process.
# - Performance: Be mindful of the performance implications of scraping, especially if the target website has rate limits or anti-scraping measures.
