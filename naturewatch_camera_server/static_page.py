from flask import (Blueprint, Response, send_from_directory,
                   current_app, render_template)
import os
from .api import get_version

static_page = Blueprint('static_page', __name__)
version_hash = get_version('short_hash')
version_date = get_version('date')[:11]


@static_page.route('/', defaults={'path': ''})
@static_page.route('/<path:path>')
def serve(path):
    """
    Static root endpoint
    :return: index.html or file requested
    """
    if path != "" and os.path.exists(
            os.path.join(current_app.static_folder, path)):
        return send_from_directory(current_app.static_folder, path)
    elif path == "" or "gallery" in path:
        # return send_from_directory(current_app.static_folder, 'index.html')
        print(current_app.static_folder)
        print(current_app.template_folder)
        # print(version_date, version_hash)
        print(os.listdir(current_app.static_folder))
        return render_template(
            'index.html',
            version_hash=version_hash,
            version_date=version_date)
    else:
        return Response("Page not found. Please check the URL!", status=404)
