import json
import random

def read_json_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)

def expand_records(data):
    expanded_data = []
    for record in data:
        for _ in range(record["POINTS"]):
            expanded_data.append({
                "u": '0' + record["USERNAME"][2:],
                "n": record["NAME"],
                "p": record["POINTS"]
            })
    return expanded_data

file_path = 'Result_14.json'
data = read_json_file(file_path)

expanded_data = expand_records(data)

random.shuffle(expanded_data)

for i, record in enumerate(expanded_data):
    record["i"] = i + 1

with open('shuffled_indexed_records.json', 'w', encoding='utf-8') as f:
    json.dump(expanded_data, f, ensure_ascii=False, indent=2)

print("Shuffled records with random indices have been written to 'shuffled_indexed_records.json'")