FROM balenalib/raspberrypi3:latest

# Install python dependencies
RUN apt-get update
RUN apt-get install -y libpng-dev libjpeg-dev libopenexr-dev libtiff-dev libwebp-dev
RUN apt-get install -y gpac python3 python3-pip python3-opencv python3-dev python3-numpy
# COPY requirements-dev.txt .
COPY requirements-pi.txt .
COPY requirements.txt .
RUN python3 -m pip install pip setuptools wheel --upgrade
# RUN python3 -m pip install opencv-python --upgrade
RUN python3 -m pip install -r requirements-pi.txt
# RUN python3 -m pip install -r requirements-dev.txt

# Bundle source
COPY naturewatch_camera_server naturewatch_camera_server

# Expose port
EXPOSE 5000

# Run
CMD ["python3", "-m", "naturewatch_camera_server"]
