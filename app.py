# this is the server of the app.
# it facilitates connections to the database? and the Machine Learning components
from caption_util import *
from flask import Flask, request
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
from time import sleep

# dictionary of the url to the actual chapter, transcripts, and save locations
chapters = {}
transcripts = {}
save_locations = {}

# starts processing the url and returns the time needed
@app.route("/process_url", methods=['POST'])
@cross_origin()
def process_url():
    url = request.get_json()['url']
    save_location, duration = download_from_yt(url)
    duration = duration*2/5
    sleep(2)
    print(url)
    # return json.dumps(url)
    # save_location, duration = download_from_yt(url)
    # duration = duration*2/5 # seconds
    # save_locations[url] = save_location
    
    # # how to do the asynchronous action here
    # return duration
    # save_location, duration = download_from_yt(url)
    # duration = duration*2/5 # seconds
    # save_locations[url] = save_location
    
    # # how to do the asynchronous action here
    doc = {'duration':duration} # duration to get captions
    return json.dumps(doc) # return it

    # start the captioning process -> takes 'duration' seconds to complete
    # as a side effect
    
if __name__ == '__main__':
	app.run(debug=True)
