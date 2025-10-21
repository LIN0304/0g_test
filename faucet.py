#!/usr/bin/env python3
"""
0G Terminal - Cyberpunk Neural Scraper
A Flask web application with a cyberpunk-themed interface for web scraping
"""

from flask import Flask, request, jsonify, render_template
import requests
from bs4 import BeautifulSoup
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    """Serve the cyberpunk-styled home page"""
    return render_template('index.html')

@app.route('/api/scrape', methods=['GET'])
def scrape():
    """
    Scrape data from 0g.ai and return as JSON
    Returns:
        JSON response with title, url, and timestamp
    """
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

        # Send the extracted data as a JSON response with additional info
        return jsonify({
            "title": title,
            "url": "https://0g.ai",
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }), 200

    except Exception as error:
        return jsonify({"error": str(error) or 'Error fetching data'}), 500

if __name__ == '__main__':
    app.run(debug=True)
