#!/bin/bash

echo "BUILD START"

# Install dependencies using Vercel's built-in Python builder
python3 -m pip install -r requirements.txt

# Collect static files
python3 manage.py collectstatic --noinput --clear

echo "BUILD END"
