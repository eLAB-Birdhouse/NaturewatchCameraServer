FROM sgtwilko/rpi-raspbian-opencv:stretch-latest

# Install python dependencies
COPY requirements-pi.txt .
COPY requirements.txt .
RUN python3 -m pip install -r requirements-pi.txt
RUN apt-get update
RUN apt-get install -y gpac

# Bundle source
COPY naturewatch_camera_server naturewatch_camera_server

# Expose port
EXPOSE 5000

# Run
CMD ["python3", "-m", "naturewatch_camera_server"]
