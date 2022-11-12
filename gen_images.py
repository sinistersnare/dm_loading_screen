#
# Run this when you add new images to recreates the images.json file
# instead of having to manually edit it.
# This will overwrite images.json

import os
import json
import pprint
import sys

if not os.path.exists('images') or len(os.listdir('images')) == 0:
	print("Add images to an images/ directory to run this file!")
	sys.exit(0)

image_dicts = []

for path in os.listdir('images'):
	d = {
		"name": path,
		"file": f'images/{path}',
	}
	image_dicts.append(d)

try:
    os.remove('images.json')
except OSError:
    pass
with open('images.json', 'w') as j:
	# obj = json.dumps(image_dicts)
	# j.write(pprint.pformat(obj))
	json.dump(image_dicts, j)