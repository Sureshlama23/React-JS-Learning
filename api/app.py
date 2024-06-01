from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create-events', methods=['POST'])
def create_events():
    contact_email = request.form['contact_email']
    calendar_name = request.form['calendar_name']
    day_of_week = request.form['day_of_week']
    event_start_time = request.form['event_start_time']
    number_of_appointments = int(request.form['number_of_appointments'])

    # Simulate creating events
    events = []
    for i in range(number_of_appointments):
        event_data = {
            'contact_email': contact_email,
            'calendar_name': calendar_name,
            'day_of_week': day_of_week,
            'event_start_time': event_start_time,
            'index': i  # Adjust as needed for uniqueness
        }
        events.append(event_data)

    # In a real application, you would make an API call to GoHighLevel here
    # response = requests.post(api_url, headers=headers, json=event_data)

    return jsonify({'status': 'success', 'events': events})

@app.route('/delete-events', methods=['POST'])
def delete_events():
    event_ids = request.form.getlist('event_ids')  # Assume event_ids is a list of IDs

    # Simulate deleting events
    deleted_events = event_ids

    # In a real application, you would make an API call to GoHighLevel here
    # response = requests.delete(f'{api_url}/{event_id}', headers=headers)

    return jsonify({'status': 'success', 'deleted_events': deleted_events})

if __name__ == '__main__':
    app.run(debug=True)
